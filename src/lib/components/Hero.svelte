<script>
	import Network from './Network.svelte';
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'Epidemiology · UC San Diego / San Diego State University',
			lead: "I'm a physician and epidemiologist studying how infectious diseases move through communities, from HIV transmission networks in Mexico City to cancer prevention and Latino health along the border.",
			known: 'known case',
			newly: 'newly diagnosed',
			regrow: 'tap to regrow',
			start: 'Start here',
			items: [
				{ text: 'About', link: '/about', desc: 'Who I am, and what keeps me curious' },
				{
					text: 'Research',
					link: '/research',
					desc: 'HIV & infectious disease, molecular epidemiology, Latino health'
				},
				{
					text: 'Publications',
					link: '/publications',
					desc: 'Peer-reviewed papers, books, and conference work'
				},
				{
					text: 'Teaching & Mentoring',
					link: '/teaching',
					desc: 'Courses, thesis advising, and science communication'
				}
			]
		},
		es: {
			eyebrow: 'Epidemiología · UC San Diego / San Diego State University',
			lead: 'Soy médica y epidemióloga. Estudio cómo se mueven las enfermedades infecciosas entre las comunidades, desde las redes de transmisión del VIH en la Ciudad de México hasta la prevención del cáncer y la salud latina en la frontera.',
			known: 'caso conocido',
			newly: 'diagnóstico reciente',
			regrow: 'toca para regenerar',
			start: 'Empieza aquí',
			items: [
				{ text: 'Sobre mí', link: '/about', desc: 'Quién soy y qué mantiene viva mi curiosidad' },
				{
					text: 'Investigación',
					link: '/research',
					desc: 'VIH e infecciosas, epidemiología molecular, salud latina'
				},
				{
					text: 'Publicaciones',
					link: '/publications',
					desc: 'Artículos revisados por pares, libros y congresos'
				},
				{
					text: 'Docencia y tutoría',
					link: '/teaching',
					desc: 'Cursos, dirección de tesis y divulgación'
				}
			]
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<section class="hero">
	<div class="hero-copy">
		<p class="eyebrow">{t.eyebrow}</p>
		<h1>Vanessa Dávila Conn</h1>
		<p class="lead">{t.lead}</p>
	</div>

	<div class="hero-figure">
		<div class="hero-net">
			<Network seed={7} size={340} interactive={true} opacity={0.97} />
		</div>
		<p class="hero-caption">
			<span class="dot dot-accent" aria-hidden="true"></span>
			{t.known}
			<span class="dot dot-signal" aria-hidden="true"></span>
			{t.newly} · <em>{t.regrow}</em>
		</p>
	</div>
</section>

<nav class="start-here" aria-label={t.start}>
	<p class="eyebrow start-label">{t.start}</p>
	<ul>
		{#each t.items as item}
			<li>
				<a href={item.link}>
					<span class="sh-title">{item.text}</span>
					<span class="sh-desc">{item.desc}</span>
					<span class="sh-arrow" aria-hidden="true">→</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--space-8);
		align-items: center;
		margin-bottom: var(--space-12);
	}

	.hero-copy {
		max-width: 32rem;
	}

	h1 {
		margin: var(--space-3) 0 var(--space-4);
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.hero-figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-caption {
		font-family: var(--font-mono);
		font-size: 0.66rem;
		letter-spacing: 0.04em;
		color: var(--ink-faint);
		margin: var(--space-2) 0 0;
		display: flex;
		align-items: center;
		gap: 0.35rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.hero-caption em {
		font-style: italic;
	}

	.dot {
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		margin-left: 0.35rem;
	}

	.dot-accent {
		background: var(--accent);
	}

	.dot-signal {
		background: var(--signal);
	}

	.start-here {
		margin: var(--space-8) 0 var(--space-12);
	}

	.start-label {
		margin-bottom: var(--space-3);
	}

	.start-here ul {
		list-style: none;
		border-top: 1px solid var(--rule);
	}

	.start-here li {
		border-bottom: 1px solid var(--rule);
	}

	.start-here a {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas:
			'title arrow'
			'desc arrow';
		align-items: center;
		gap: 0 var(--space-4);
		padding: var(--space-4) var(--space-2);
		text-decoration: none;
		transition: background-color 0.15s ease;
	}

	.start-here a:hover {
		background-color: var(--muted-tint);
	}

	.sh-title {
		grid-area: title;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--ink);
	}

	.start-here a:hover .sh-title {
		color: var(--accent);
	}

	.sh-desc {
		grid-area: desc;
		font-family: var(--font-body);
		font-size: 0.95rem;
		color: var(--ink-faint);
	}

	.sh-arrow {
		grid-area: arrow;
		font-family: var(--font-mono);
		color: var(--muted);
		font-size: 1.1rem;
		transition:
			transform 0.15s ease,
			color 0.15s ease;
	}

	.start-here a:hover .sh-arrow {
		color: var(--signal);
		transform: translateX(4px);
	}

	@media (max-width: 720px) {
		.hero {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}

		.hero-figure {
			order: -1;
		}
	}
</style>
