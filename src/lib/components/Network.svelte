<script>
	import { onMount } from 'svelte';

	let {
		seed = 7,
		size = 360,
		interactive = false,
		opacity = 1,
		label = 'Generative transmission network: the same growth rule, a different network every time'
	} = $props();

	let canvas;
	let animationId;
	let currentSeed = $state(seed);

	// Colors resolved from CSS custom properties at mount.
	let edgeColor = '#7a4a63';
	let nodeColor = '#7a4a63';
	let signalColor = '#cf6a3f';
	let paperColor = '#f5efe4';

	class Random {
		constructor(seed) {
			this.seed = seed;
		}
		random() {
			let x = Math.sin(this.seed) * 10000;
			this.seed++;
			return x - Math.floor(x);
		}
	}

	// Build a transmission network by preferential attachment: a few index
	// cases, then each new case links to an existing one weighted by degree —
	// so hubs and clusters emerge, the way real HIV networks do. A subset of
	// recent leaf cases are flagged "newly diagnosed" (the signal nodes).
	function buildGraph(seedValue) {
		const r = new Random(seedValue + 0.5);
		r.random();
		r.random();

		const N = 30 + Math.floor(r.random() * 12); // 30–41 nodes
		const seeds = 2 + Math.floor(r.random() * 2); // 2–3 index cases
		const nodes = [];
		const edges = [];
		const bag = []; // degree-weighted attachment pool

		for (let i = 0; i < seeds; i++) {
			nodes.push({ gen: 0, deg: 0, signal: false });
			bag.push(i);
		}

		for (let i = seeds; i < N; i++) {
			const p = bag[Math.floor(r.random() * bag.length)];
			nodes.push({ gen: nodes[p].gen + 1, deg: 0, signal: false });
			edges.push([p, i]);
			nodes[p].deg++;
			nodes[i].deg++;
			bag.push(p, i);

			// Occasional second link — co-transmission, denser clusters.
			if (r.random() < 0.13 && i > seeds + 1) {
				const q = bag[Math.floor(r.random() * bag.length)];
				if (q !== i && q !== p) {
					edges.push([Math.min(q, i), Math.max(q, i)]);
					nodes[q].deg++;
					nodes[i].deg++;
					bag.push(q, i);
				}
			}
		}

		// Flag newly-diagnosed cases: recent leaves, a handful of them.
		let flagged = 0;
		for (let i = nodes.length - 1; i >= seeds && flagged < 6; i--) {
			if (nodes[i].deg === 1 && r.random() < 0.55) {
				nodes[i].signal = true;
				flagged++;
			}
		}
		if (flagged === 0) nodes[nodes.length - 1].signal = true;

		layout(nodes, edges, r);
		return { nodes, edges };
	}

	// Deterministic force-ish layout: parent-anchored seeding, then a fixed
	// number of relaxation passes (repulsion + edge springs + gentle centering).
	function layout(nodes, edges, r) {
		const px = new Array(nodes.length);
		const py = new Array(nodes.length);

		for (let i = 0; i < nodes.length; i++) {
			if (nodes[i].gen === 0) {
				const a = r.random() * Math.PI * 2;
				px[i] = Math.cos(a) * 30;
				py[i] = Math.sin(a) * 30;
			} else {
				const parent = edges.find((e) => e[1] === i);
				const pi = parent ? parent[0] : 0;
				const a = r.random() * Math.PI * 2;
				const d = 40 + r.random() * 20;
				px[i] = px[pi] + Math.cos(a) * d;
				py[i] = py[pi] + Math.sin(a) * d;
			}
		}

		const L = 48; // ideal edge length
		const repK = 2200;
		for (let it = 0; it < 140; it++) {
			const fx = new Array(nodes.length).fill(0);
			const fy = new Array(nodes.length).fill(0);

			// Repulsion between every pair.
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					let dx = px[i] - px[j];
					let dy = py[i] - py[j];
					let d2 = dx * dx + dy * dy;
					if (d2 < 0.01) {
						dx = 0.1;
						d2 = 0.01;
					}
					const f = Math.min(repK / d2, 8);
					const d = Math.sqrt(d2);
					fx[i] += (dx / d) * f;
					fy[i] += (dy / d) * f;
					fx[j] -= (dx / d) * f;
					fy[j] -= (dy / d) * f;
				}
			}

			// Springs along edges pull toward L.
			for (const [a, b] of edges) {
				let dx = px[b] - px[a];
				let dy = py[b] - py[a];
				const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
				const f = (d - L) * 0.05;
				fx[a] += (dx / d) * f;
				fy[a] += (dy / d) * f;
				fx[b] -= (dx / d) * f;
				fy[b] -= (dy / d) * f;
			}

			// Gentle pull to origin so the graph stays compact.
			for (let i = 0; i < nodes.length; i++) {
				fx[i] -= px[i] * 0.008;
				fy[i] -= py[i] * 0.008;
				const step = 0.85;
				px[i] += Math.max(-6, Math.min(6, fx[i] * step));
				py[i] += Math.max(-6, Math.min(6, fy[i] * step));
			}
		}

		for (let i = 0; i < nodes.length; i++) {
			nodes[i].x = px[i];
			nodes[i].y = py[i];
		}
	}

	const smoother = (t) => {
		t = Math.max(0, Math.min(1, t));
		return t * t * t * (t * (t * 6 - 15) + 10);
	};

	function nodeRadius(n) {
		return 3.4 + Math.min(n.deg, 6) * 0.7;
	}

	function run() {
		if (!canvas) return;
		if (animationId) cancelAnimationFrame(animationId);

		const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
		const backing = Math.round(size * dpr);
		if (canvas.width !== backing) {
			canvas.width = backing;
			canvas.height = backing;
		}
		canvas.style.width = size + 'px';
		canvas.style.height = size + 'px';

		const ctx = canvas.getContext('2d');
		const V = 600; // virtual drawing space
		const scale = backing / V;

		const { nodes, edges } = buildGraph(currentSeed);

		// Fit the laid-out graph into the virtual box, centered, with margin.
		let minX = Infinity,
			minY = Infinity,
			maxX = -Infinity,
			maxY = -Infinity;
		for (const n of nodes) {
			const r = nodeRadius(n) + 6;
			if (n.x - r < minX) minX = n.x - r;
			if (n.y - r < minY) minY = n.y - r;
			if (n.x + r > maxX) maxX = n.x + r;
			if (n.y + r > maxY) maxY = n.y + r;
		}
		const margin = 46;
		const avail = V - margin * 2;
		const bw = Math.max(1, maxX - minX);
		const bh = Math.max(1, maxY - minY);
		const fit = Math.min(avail / bw, avail / bh);
		const offX = margin + (avail - bw * fit) / 2 - minX * fit;
		const offY = margin + (avail - bh * fit) / 2 - minY * fit;

		const reduce =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const N = nodes.length;
		const growMs = 1900;
		let t0 = null;

		function drawAt(head) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.setTransform(scale, 0, 0, scale, 0, 0);
			ctx.translate(offX, offY);
			ctx.scale(fit, fit);

			// Edges first, growing from the earlier endpoint toward the later.
			ctx.lineCap = 'round';
			for (const [a, b] of edges) {
				const t = smoother(head - b);
				if (t <= 0) continue;
				const ax = nodes[a].x,
					ay = nodes[a].y;
				const ex = ax + (nodes[b].x - ax) * t;
				const ey = ay + (nodes[b].y - ay) * t;
				ctx.strokeStyle = edgeColor;
				ctx.globalAlpha = 0.32 * Math.min(1, t * 1.4);
				ctx.lineWidth = 1.4;
				ctx.beginPath();
				ctx.moveTo(ax, ay);
				ctx.lineTo(ex, ey);
				ctx.stroke();
			}
			ctx.globalAlpha = 1;

			// Nodes, popping in as the head sweeps past their index.
			for (let i = 0; i < N; i++) {
				const t = smoother(head - i);
				if (t <= 0) continue;
				const n = nodes[i];
				const r = nodeRadius(n) * (0.35 + 0.65 * t);

				if (n.signal) {
					// Soft halo — a case that seeds onward transmission.
					ctx.globalAlpha = 0.16 * t;
					ctx.fillStyle = signalColor;
					ctx.beginPath();
					ctx.arc(n.x, n.y, r * 2.4, 0, Math.PI * 2);
					ctx.fill();
					ctx.globalAlpha = t;
					ctx.fillStyle = signalColor;
				} else {
					ctx.globalAlpha = t;
					ctx.fillStyle = nodeColor;
				}
				ctx.beginPath();
				ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
				ctx.fill();

				// A paper-colored core lifts the node off its edges.
				ctx.globalAlpha = t;
				ctx.fillStyle = paperColor;
				ctx.beginPath();
				ctx.arc(n.x, n.y, r * 0.34, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
		}

		if (reduce) {
			drawAt(N + 1);
			return;
		}

		function frame(time) {
			if (t0 === null) t0 = time;
			const raw = Math.min(1, (time - t0) / growMs);
			drawAt(smoother(raw) * (N + 1));
			if (raw < 1) animationId = requestAnimationFrame(frame);
			else animationId = null;
		}
		animationId = requestAnimationFrame(frame);
	}

	function reseed() {
		if (!interactive) return;
		currentSeed = 1 + Math.floor(Math.random() * 995);
		run();
	}

	onMount(() => {
		const cs = getComputedStyle(document.documentElement);
		edgeColor = cs.getPropertyValue('--accent').trim() || edgeColor;
		nodeColor = cs.getPropertyValue('--accent').trim() || nodeColor;
		signalColor = cs.getPropertyValue('--signal').trim() || signalColor;
		paperColor = cs.getPropertyValue('--paper').trim() || paperColor;
		run();
		return () => {
			if (animationId) cancelAnimationFrame(animationId);
		};
	});
</script>

{#if interactive}
	<button class="net-btn" style="opacity:{opacity}" onclick={reseed} aria-label={label}>
		<canvas bind:this={canvas}></canvas>
	</button>
{:else}
	<canvas bind:this={canvas} role="img" aria-label={label} style="opacity:{opacity}"></canvas>
{/if}

<style>
	canvas {
		max-width: 100%;
		height: auto;
		display: block;
	}

	.net-btn {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		display: block;
		max-width: 100%;
		border-radius: var(--radius-lg);
		transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
	}

	/* A whisper of an affordance — no words needed. */
	.net-btn:hover {
		transform: translateY(-2px);
	}

	.net-btn:active {
		transform: translateY(0);
	}

	@media (prefers-reduced-motion: reduce) {
		.net-btn {
			transition: none;
		}
	}
</style>
