<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { initLang } from '$lib/i18n.svelte.js';
	import '../app.css';

	// Display face — Fraunces (variable: optical sizing + soft axis)
	import '@fontsource-variable/fraunces/full.css';
	// Reading serif — Spectral
	import '@fontsource/spectral/400.css';
	import '@fontsource/spectral/400-italic.css';
	import '@fontsource/spectral/500.css';
	import '@fontsource/spectral/600.css';
	// Data / utility mono — IBM Plex Mono
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import '@fontsource/ibm-plex-mono/700.css';

	let { children } = $props();

	let navOpen = $state(false);

	onMount(() => {
		initLang();
	});

	// Close the mobile drawer whenever the route changes.
	$effect(() => {
		$page.url.pathname;
		navOpen = false;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="theme-container">
	<Navbar {navOpen} onMenuToggle={() => (navOpen = !navOpen)} />
	<div class="page-wrapper">
		<Sidebar {navOpen} onClose={() => (navOpen = false)} />
		<main class="page-content">
			{@render children?.()}
		</main>
	</div>
</div>

<style>
	.theme-container {
		min-height: 100vh;
	}

	.page-wrapper {
		display: flex;
	}

	.page-content {
		flex: 1;
		min-width: 0;
		margin-left: var(--sidebar-w);
		padding: var(--space-12) var(--space-16);
		max-width: calc(var(--content-max) + var(--space-16) * 2);
	}

	@media (max-width: 900px) {
		.page-content {
			margin-left: 0;
			padding: var(--space-8) var(--space-6);
		}
	}
</style>
