<script>
	import Network from '$lib/components/Network.svelte';
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'Contact',
			title: 'Get in touch',
			lead: "I'm always glad to hear from collaborators, students, and anyone working on HIV, infectious disease, or Latino and community health.",
			emailTitle: 'Email',
			elsewhereTitle: 'Elsewhere',
			affTitle: 'Affiliations',
			ucsd: 'UC San Diego',
			sdsu: 'San Diego State University',
			cv: 'Download CV (PDF) ↗',
			aff: [
				{ name: 'Antiviral Research Center (AVRC)', org: 'University of California San Diego', role: 'Graduate Student Researcher' },
				{ name: 'Joint Doctoral Program in Public Health', org: 'UC San Diego / San Diego State University', role: 'PhD Student, Epidemiology' }
			]
		},
		es: {
			eyebrow: 'Contacto',
			title: 'Contacto',
			lead: 'Siempre es un gusto saber de colaboradores, estudiantes y de quienes trabajan en VIH, enfermedades infecciosas o salud latina y comunitaria.',
			emailTitle: 'Correo',
			elsewhereTitle: 'En otros sitios',
			affTitle: 'Afiliaciones',
			ucsd: 'UC San Diego',
			sdsu: 'San Diego State University',
			cv: 'Descargar CV (PDF) ↗',
			aff: [
				{ name: 'Antiviral Research Center (AVRC)', org: 'University of California San Diego', role: 'Investigadora de posgrado' },
				{ name: 'Programa Doctoral Conjunto en Salud Pública', org: 'UC San Diego / San Diego State University', role: 'Estudiante de doctorado, Epidemiología' }
			]
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>
<h1>{t.title}</h1>
<p class="lead">{t.lead}</p>

<div class="contact-grid">
	<div class="contact-col">
		<h2>{t.emailTitle}</h2>
		<p>
			<a href="mailto:vdavilaconn@ucsd.edu">vdavilaconn@ucsd.edu</a>
			<span class="c-note">{t.ucsd}</span>
		</p>
		<p>
			<a href="mailto:vdavilaconn8016@sdsu.edu">vdavilaconn8016@sdsu.edu</a>
			<span class="c-note">{t.sdsu}</span>
		</p>

		<h2>{t.elsewhereTitle}</h2>
		<p>
			<a href="https://www.linkedin.com/in/vanessa-davila-394685178/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
		</p>
		<p>
			<a href="https://scholar.google.com/scholar?q=Vanessa+D%C3%A1vila-Conn">Google Scholar ↗</a>
		</p>
	</div>

	<div class="contact-col">
		<h2>{t.affTitle}</h2>
		{#each t.aff as a}
			<p>
				<strong>{a.name}</strong><br />
				{a.org}
				<span class="c-note">{a.role}</span>
			</p>
		{/each}
	</div>
</div>

<div class="contact-net">
	<Network seed={41} size={300} interactive={true} opacity={0.9} />
</div>

<style>
	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8);
		margin-top: var(--space-8);
	}

	.contact-col h2:first-child {
		margin-top: 0;
	}

	.contact-col p {
		margin: var(--space-2) 0 var(--space-4);
	}

	.c-note {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-top: 0.1rem;
	}

	.contact-net {
		display: flex;
		justify-content: center;
		margin-top: var(--space-12);
		padding-top: var(--space-8);
		border-top: 1px solid var(--rule);
	}

	@media (max-width: 640px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: var(--space-4);
		}
	}
</style>
