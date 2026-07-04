<script>
	import Hero from '$lib/components/Hero.svelte';
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			heading: 'About',
			body: "I'm a physician and PhD student in the Joint Doctoral Program in Public Health (Epidemiology) at UC San Diego and San Diego State University, and a Graduate Student Researcher at UC San Diego's Antiviral Research Center. I trained as a medical doctor in Mexico, specialized in Preventive Medicine, and earned a Master of Public Health in Epidemiology. My work follows how infectious diseases spread through communities, and how prevention can meet people where they are.",
			more: 'More about me →'
		},
		es: {
			heading: 'Sobre mí',
			body: 'Soy médica y estudiante de doctorado en el Programa Doctoral Conjunto en Salud Pública (Epidemiología) de UC San Diego y San Diego State University, e investigadora en el Antiviral Research Center de UC San Diego. Me formé como médica general en México, me especialicé en Medicina Preventiva y obtuve una Maestría en Salud Pública con enfoque en Epidemiología. Mi trabajo sigue cómo se propagan las enfermedades infecciosas en las comunidades y cómo la prevención puede llegar a las personas.',
			more: 'Más sobre mí →'
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<Hero />

<section class="bio">
	<div class="bio-photo">
		<img src="/vanessa-portrait.jpg" alt="Vanessa Dávila Conn" />
	</div>

	<div class="bio-text">
		<h2>{t.heading}</h2>
		<p>{t.body}</p>
		<p><a href="/about">{t.more}</a></p>
	</div>
</section>

<style>
	.bio {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: var(--space-8);
		align-items: start;
		margin-top: var(--space-8);
	}

	.bio-photo img {
		border-radius: 50%;
		width: 200px;
		height: 200px;
		object-fit: cover;
		object-position: center 30%;
		border: 1px solid var(--rule);
	}

	.bio-text h2 {
		margin-top: 0;
	}

	@media (max-width: 640px) {
		.bio {
			grid-template-columns: 1fr;
			justify-items: start;
			gap: var(--space-4);
		}
	}
</style>
