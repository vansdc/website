<script>
	import { locale, setLang } from '$lib/i18n.svelte.js';

	let { navOpen = false, onMenuToggle } = $props();

	const tag = { en: 'epidemiology & public health', es: 'epidemiología y salud pública' };
</script>

<nav class="navbar">
	<div class="navbar-inner">
		<a href="/" class="wordmark">
			<span class="wordmark-name">Vanessa Dávila Conn</span>
			<span class="wordmark-tag">{tag[locale.current]}</span>
		</a>

		<div class="navbar-actions">
			<div class="lang-switch" role="group" aria-label="Language">
				<button
					class="lang-btn"
					class:active={locale.current === 'en'}
					aria-pressed={locale.current === 'en'}
					onclick={() => setLang('en')}>EN</button
				>
				<span class="lang-sep" aria-hidden="true">/</span>
				<button
					class="lang-btn"
					class:active={locale.current === 'es'}
					aria-pressed={locale.current === 'es'}
					onclick={() => setLang('es')}>ES</button
				>
			</div>

			<button
				class="menu-toggle"
				aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
				aria-expanded={navOpen}
				aria-controls="site-sidebar"
				onclick={onMenuToggle}
			>
				<span class="menu-icon" class:open={navOpen} aria-hidden="true">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
		</div>
	</div>
</nav>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 30;
		background-color: color-mix(in srgb, var(--paper) 88%, transparent);
		backdrop-filter: saturate(1.4) blur(8px);
		border-bottom: 1px solid var(--rule);
	}

	.navbar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-4);
		padding: var(--space-3) var(--space-6);
	}

	.wordmark {
		display: flex;
		flex-direction: column;
		line-height: 1.05;
		text-decoration: none;
		color: var(--ink);
	}

	.wordmark:hover {
		color: var(--ink);
	}

	.wordmark-name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.wordmark:hover .wordmark-name {
		color: var(--accent);
	}

	.wordmark-tag {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-top: 0.15rem;
	}

	.navbar-actions {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.lang-switch {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.06em;
	}

	.lang-btn {
		background: none;
		border: none;
		padding: 0.15rem 0.1rem;
		cursor: pointer;
		font: inherit;
		color: var(--ink-faint);
		text-transform: uppercase;
		transition: color 0.15s ease;
	}

	.lang-btn:hover {
		color: var(--signal);
	}

	.lang-btn.active {
		color: var(--accent);
		font-weight: 700;
	}

	.lang-sep {
		color: var(--muted);
	}

	/* Hamburger — hidden on desktop, shown when the sidebar folds away */
	.menu-toggle {
		display: none;
		background: none;
		border: 1px solid var(--rule);
		border-radius: var(--radius);
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		color: var(--ink);
	}

	.menu-toggle:hover {
		border-color: var(--muted);
	}

	.menu-icon {
		display: block;
		width: 20px;
		height: 14px;
		position: relative;
	}

	.menu-icon span {
		position: absolute;
		left: 0;
		height: 2px;
		width: 100%;
		background: currentColor;
		border-radius: 2px;
		transition:
			transform 0.22s ease,
			opacity 0.22s ease,
			top 0.22s ease;
	}

	.menu-icon span:nth-child(1) {
		top: 0;
	}
	.menu-icon span:nth-child(2) {
		top: 6px;
	}
	.menu-icon span:nth-child(3) {
		top: 12px;
	}

	.menu-icon.open span:nth-child(1) {
		top: 6px;
		transform: rotate(45deg);
	}
	.menu-icon.open span:nth-child(2) {
		opacity: 0;
	}
	.menu-icon.open span:nth-child(3) {
		top: 6px;
		transform: rotate(-45deg);
	}

	@media (max-width: 900px) {
		.menu-toggle {
			display: flex;
		}
	}
</style>
