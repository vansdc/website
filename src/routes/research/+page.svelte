<script>
	import Network from '$lib/components/Network.svelte';
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'Research',
			title: 'What I study',
			lead: 'I use the tools of epidemiology, study design, molecular data, spatial and statistical analysis, to understand how infectious and chronic diseases move through communities, and how prevention can meet people where they are.',
			sections: [
				{
					h: 'HIV & infectious disease',
					p: "The through-line of my work is HIV. At Mexico's Center for Research in Infectious Diseases (CIENI/INER) I helped build and analyze the <strong>molecular transmission network of HIV in Mexico City</strong>, using genetic sequence data to understand how the epidemic grows and where newly diagnosed cases fit into it. The question is deceptively simple: who is driving onward transmission, and when? The answer comes from combining phylogenetics, surveillance, and pretreatment drug-resistance monitoring. I have also studied the role of people who inject drugs in HIV transmission, drug resistance in circulating HCV, and the immunology of HIV epitopes restricted by Amerindian HLA subtypes. Today, as a Graduate Student Researcher at UC San Diego's Antiviral Research Center, I continue this line of work in a new setting."
				},
				{
					h: 'Molecular & network epidemiology',
					p: 'Transmission networks are how I think about epidemics: not as counts, but as structures. Reconstructing them from genetic data, and reasoning carefully about the thresholds and assumptions that shape what a network means, has been a central methodological interest, including collaborative work on tools for inferring HIV transmission clusters.'
				},
				{
					h: 'Pandemic response & respiratory disease',
					p: "During COVID-19 I served as a public-health advisor at Mexico's Dirección General de Epidemiología, analyzing national data for decision makers, and I provided clinical care to hospitalized patients at the National Institute of Respiratory Diseases. I led seroepidemiology studies of SARS-CoV-2 among healthcare workers and people living with HIV at Mexico City's largest tertiary COVID-19 referral hospitals."
				},
				{
					h: 'Cancer prevention & Latino health',
					p: 'My current work reaches into chronic-disease prevention and the health of Hispanic and Latino communities, including the interpersonal factors that shape <strong>breast cancer screening among U.S. Hispanic and Latina women</strong>, drawing on the Hispanic Community Health Study / Study of Latinos. Preventive medicine, vaccines, and community-based participatory research run through all of it.'
				},
				{
					h: 'Methodology & evidence synthesis',
					p: 'I teach and practice rigorous research methodology: protocol design, study design, and <strong>systematic review and meta-analysis</strong>. I have written on interpreting meta-analytic results and on information metrics for evidence synthesis. Good methods are how public health earns its conclusions.'
				}
			],
			figCaption: 'A transmission network, grown fresh each time. Tap to regrow.'
		},
		es: {
			eyebrow: 'Investigación',
			title: 'Lo que investigo',
			lead: 'Uso las herramientas de la epidemiología (el diseño de estudios, los datos moleculares, el análisis espacial y estadístico) para entender cómo se mueven las enfermedades infecciosas y crónicas en las comunidades, y cómo la prevención puede llegar a las personas.',
			sections: [
				{
					h: 'VIH y enfermedades infecciosas',
					p: 'El hilo conductor de mi trabajo es el VIH. En el Centro de Investigación en Enfermedades Infecciosas (CIENI/INER) de México ayudé a construir y analizar la <strong>red molecular de transmisión del VIH en la Ciudad de México</strong>, usando datos de secuencias genéticas para entender cómo crece la epidemia y qué lugar ocupan en ella los casos recién diagnosticados. La pregunta es engañosamente simple: ¿quién impulsa la transmisión, y cuándo? La respuesta surge de combinar filogenética, vigilancia y monitoreo de resistencia previa al tratamiento. También he estudiado el papel de las personas que se inyectan drogas en la transmisión del VIH, la resistencia del VHC circulante y la inmunología de epítopos del VIH restringidos por subtipos HLA amerindios. Hoy, como investigadora en el Antiviral Research Center de UC San Diego, continúo esta línea en un nuevo contexto.'
				},
				{
					h: 'Epidemiología molecular y de redes',
					p: 'Las redes de transmisión son mi forma de pensar las epidemias: no como conteos, sino como estructuras. Reconstruirlas a partir de datos genéticos, y razonar con cuidado sobre los umbrales y supuestos que definen lo que una red significa, ha sido un interés metodológico central, incluido el trabajo colaborativo en herramientas para inferir agrupamientos de transmisión del VIH.'
				},
				{
					h: 'Respuesta a pandemias y enfermedad respiratoria',
					p: 'Durante la COVID-19 fui asesora de salud pública en la Dirección General de Epidemiología de México, analizando datos nacionales para tomadores de decisiones, y brindé atención clínica a pacientes hospitalizados en el Instituto Nacional de Enfermedades Respiratorias. Dirigí estudios de seroepidemiología del SARS-CoV-2 en personal de salud y en personas con VIH en los principales hospitales de referencia COVID-19 de la Ciudad de México.'
				},
				{
					h: 'Prevención del cáncer y salud latina',
					p: 'Mi trabajo actual se extiende a la prevención de enfermedades crónicas y a la salud de las comunidades hispanas y latinas, incluidos los factores interpersonales que influyen en la <strong>detección del cáncer de mama en mujeres hispanas y latinas en Estados Unidos</strong>, con base en el Hispanic Community Health Study / Study of Latinos. La medicina preventiva, las vacunas y la investigación participativa basada en la comunidad atraviesan todo ello.'
				},
				{
					h: 'Metodología y síntesis de evidencia',
					p: 'Enseño y practico una metodología de investigación rigurosa: diseño de protocolos, diseño de estudios y <strong>revisiones sistemáticas y metaanálisis</strong>. He escrito sobre la interpretación de resultados de metaanálisis y sobre métricas de la información para la síntesis de evidencia. Los buenos métodos son la forma en que la salud pública gana sus conclusiones.'
				}
			],
			figCaption: 'Una red de transmisión, generada de nuevo cada vez. Toca para regenerar.'
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>
<h1>{t.title}</h1>
<p class="lead">{t.lead}</p>

{#each t.sections as s}
	<h2>{s.h}</h2>
	<p>{@html s.p}</p>
{/each}

<div class="research-figure">
	<Network seed={22} size={320} interactive={true} opacity={0.95} />
	<p class="fig-caption">{t.figCaption}</p>
</div>

<style>
	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.research-figure {
		margin: var(--space-12) 0 var(--space-4);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: var(--space-8);
		border-top: 1px solid var(--rule);
	}

	.fig-caption {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.04em;
		color: var(--ink-faint);
		margin-top: var(--space-2);
	}
</style>
