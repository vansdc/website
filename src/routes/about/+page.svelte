<script>
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'About',
			title: 'A little about me',
			bio: 'My name is Vanessa Montserrat Dávila Conn. I was born in Fresnillo, Zacatecas, and studied general medicine at the Universidad Autónoma de Zacatecas. I am passionate about knowledge in general and public health in particular. My philosophy is to keep my balance in the endless work of growing and improving.',
			philosophy:
				'Intelligence is no guarantee of success without effort and perseverance, and it means nothing without human values.',
			autumn: 'From autumn I learned that although the leaves fall, the tree stays standing.',
			valuesTitle: 'Values I work by',
			values: [
				{
					name: 'Honesty',
					body: 'A social value that builds common good and shows in the match between what we think and what we do. It creates trust wherever there is sincerity, with ourselves and with others.'
				},
				{
					name: 'Respect',
					body: 'The ability to recognize and value others, knowing that everyone matters. It asks us to listen, and to care for ways of life different from our own.'
				},
				{
					name: 'Freedom',
					body: 'A value that helps us become who we are. Individual freedom lives within the social, tied closely to respect and responsibility.'
				}
			],
			beyondTitle: 'Beyond the lab',
			scicomm:
				'I like making science feel less distant. I have taught research methodology to students at every level, from secondary school to university, and built small public projects along the way, including a blog on research methodology (its motto was "closer to science") and another on technology in education.',
			animal:
				'My favorite animal is the horse, a symbol of those who love freedom.',
			offclock:
				'Off the clock: classical piano, kung fu, and a long-standing interest in art, technology, and politics.',
			songLabel: 'A piece I keep coming back to',
			songTitle: 'Valse — Evgeny Grinko'
		},
		es: {
			eyebrow: 'Sobre mí',
			title: 'Algo sobre mí',
			bio: 'Mi nombre es Vanessa Montserrat Dávila Conn. Soy originaria de Fresnillo, Zacatecas, y estudié medicina general en la Universidad Autónoma de Zacatecas. Me apasiona el conocimiento en general y la salud pública en particular. Mi filosofía es mantener el equilibrio en el eterno continuo de crecer y mejorar.',
			philosophy:
				'La inteligencia no es garantía de éxito sin esfuerzo y perseverancia, y carece de sentido sin valores humanos.',
			autumn: 'Del otoño aprendí que aunque las hojas caen, el árbol sigue de pie.',
			valuesTitle: 'Valores que me guían',
			values: [
				{
					name: 'Honestidad',
					body: 'Un valor social que genera un bien común y se refleja en la congruencia entre lo que se piensa y lo que se hace. Propicia confianza donde hay sinceridad, con uno mismo y con los demás.'
				},
				{
					name: 'Respeto',
					body: 'La capacidad de reconocer y valorar a las personas, sabiendo que todos somos valiosos. Pide aprender a escuchar y cuidar las formas de vida distintas a la propia.'
				},
				{
					name: 'Libertad',
					body: 'Un valor que nos ayuda a realizarnos como personas. La libertad individual se enmarca en lo social, ligada de cerca al respeto y la responsabilidad.'
				}
			],
			beyondTitle: 'Más allá del laboratorio',
			scicomm:
				'Me gusta hacer que la ciencia se sienta menos lejana. He enseñado metodología de la investigación a estudiantes de todos los niveles, desde secundaria hasta licenciatura, y en el camino he creado pequeños proyectos de divulgación, entre ellos un blog de metodología de la investigación (su lema era "más cerca de la ciencia") y otro sobre tecnología en la educación.',
			animal:
				'Mi animal favorito es el caballo, símbolo de quienes aman la libertad.',
			offclock:
				'Fuera del trabajo: piano clásico, kung fu y un interés de siempre por el arte, la tecnología y la política.',
			songLabel: 'Una pieza a la que siempre vuelvo',
			songTitle: 'Valse — Evgeny Grinko'
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>
<h1>{t.title}</h1>

<section class="intro">
	<img class="portrait" src="/vanessa-portrait.jpg" alt="Vanessa Dávila Conn" />
	<div class="intro-text">
		<p class="lead">{t.bio}</p>
		<blockquote class="philosophy">{t.philosophy}</blockquote>
	</div>
</section>

<figure class="quote-band">
	<img src="/autumn.jpg" alt="" />
	<figcaption>{t.autumn}</figcaption>
</figure>

<h2>{t.valuesTitle}</h2>
<div class="values">
	{#each t.values as v}
		<div class="value">
			<h3>{v.name}</h3>
			<p>{v.body}</p>
		</div>
	{/each}
</div>

<section class="beyond">
	<h2>{t.beyondTitle}</h2>
	<p>{t.scicomm}</p>
	<p>{t.animal}</p>
	<p class="off">{t.offclock}</p>

	<figure class="song">
		<figcaption>{t.songLabel}</figcaption>
		<iframe
			title={t.songTitle}
			src="https://open.spotify.com/embed/track/41UTnVa6DvcVPUYoXWA97h?utm_source=generator"
			width="100%"
			height="152"
			frameborder="0"
			loading="lazy"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		></iframe>
	</figure>
</section>

<style>
	.intro {
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: var(--space-8);
		align-items: start;
		margin-top: var(--space-6);
	}

	.portrait {
		width: 220px;
		height: 290px;
		object-fit: cover;
		object-position: center 25%;
		border-radius: var(--radius-lg);
		border: 1px solid var(--rule);
	}

	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
		margin-top: 0;
	}

	.philosophy {
		margin: var(--space-6) 0 0;
		padding: var(--space-2) var(--space-6);
		border-left: 3px solid var(--signal);
		font-family: var(--font-display);
		font-style: italic;
		font-size: 1.15rem;
		line-height: 1.4;
		color: var(--accent-deep);
	}

	.quote-band {
		position: relative;
		margin: var(--space-12) 0;
		border-radius: var(--radius-lg);
		overflow: hidden;
		min-height: 240px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.quote-band img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.quote-band::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			color-mix(in srgb, #241a12 55%, transparent),
			color-mix(in srgb, #241a12 70%, transparent)
		);
	}

	.quote-band figcaption {
		position: relative;
		z-index: 1;
		max-width: 30rem;
		padding: var(--space-8) var(--space-6);
		text-align: center;
		font-family: var(--font-display);
		font-style: italic;
		font-weight: 500;
		font-size: clamp(1.3rem, 1rem + 1.4vw, 1.7rem);
		line-height: 1.3;
		color: #f7f1e6;
		text-shadow: 0 1px 12px rgba(0, 0, 0, 0.35);
	}

	.values {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-6);
		margin-top: var(--space-4);
	}

	.value {
		padding: var(--space-6);
		background: var(--paper-raised);
		border: 1px solid var(--rule);
		border-radius: var(--radius-lg);
	}

	.value h3 {
		margin-top: 0;
		margin-bottom: var(--space-2);
		color: var(--accent);
	}

	.value p {
		margin: 0;
		font-size: 0.98rem;
		color: var(--ink-soft);
	}

	.beyond .off {
		color: var(--ink-faint);
		font-size: 0.98rem;
	}

	.song {
		margin: var(--space-6) 0 0;
		max-width: 34rem;
	}

	.song figcaption {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-bottom: var(--space-2);
	}

	.song iframe {
		border-radius: 12px;
		display: block;
	}

	@media (max-width: 640px) {
		.intro {
			grid-template-columns: 1fr;
			justify-items: start;
		}

		.portrait {
			width: 100%;
			max-width: 260px;
			height: 320px;
		}

		.values {
			grid-template-columns: 1fr;
		}
	}
</style>
