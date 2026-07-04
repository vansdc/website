<script>
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'Teaching & Mentoring',
			title: 'Teaching & mentoring',
			lead: 'Teaching is where research methodology becomes a habit of mind. I have led courses in epidemiology, biostatistics, systematic reviews, and scientific writing, and advised graduate theses in epidemiology and public health.',
			teachingTitle: 'Teaching',
			teaching: [
				{
					t: 'Instructional Student Assistant, PH 623: Epidemiological Methods',
					d: 'School of Public Health, San Diego State University. Supporting instruction under Dr. Heather Pines.',
					m: 'Jan-May 2026'
				},
				{
					t: 'Foundations of the Immune System',
					d: 'Guest lecture, Universidad Autónoma de Zacatecas. A two-hour session taught annually for five consecutive years.',
					m: '2021-2025'
				},
				{
					t: 'Research Methodology and Statistics for Health Sciences Research',
					d: 'Course lead, endorsed by the Education Department of the National Institute of Respiratory Diseases (INER). 38 hours.',
					m: 'Feb-May 2024'
				},
				{
					t: 'Systematic Reviews in Health Sciences',
					d: 'Course lead, endorsed by INER. 40 hours.',
					m: 'May-Jun 2023'
				},
				{ t: 'Research Methodology', d: 'Course lead, endorsed by INER. 20 hours.', m: 'Aug-Nov 2022' },
				{
					t: 'Scientific Writing',
					d: 'Taught within the medical specialty in epidemiology, Dirección General de Epidemiología (DGE). 20 hours.',
					m: 'Mar-Jun 2021'
				},
				{
					t: 'Research methodology, problem prioritization, and logical framework',
					d: 'Theoretical and practical workshops in the epidemiology specialty, DGE. 20 hours.',
					m: 'Jul 2020'
				}
			],
			advisingTitle: 'Thesis advising & mentoring',
			advising: [
				{
					n: 'Luis Eduardo Hernández Olvera',
					w: 'Cost-effectiveness of pre-exposure prophylaxis in reducing new HIV cases in Mexico City, 2021-2022.',
					o: 'Specialty thesis in Epidemiology, Faculty of Medicine, UNAM.',
					m: 'Advisor · Feb 2026'
				},
				{
					n: 'Noé Hernández Valdivia',
					w: 'Spatial analysis of malaria transmission in Chiapas and its relationship to epidemiologic, demographic, and social characteristics, 2016-2021.',
					o: 'Specialty thesis in Epidemiology, Faculty of Medicine, UNAM.',
					m: 'Advisor · Jun 2024'
				},
				{
					n: 'Samuel Ehécatl Schulz Medina',
					w: 'Role of the stage of infection in the transmission dynamics of the HIV genetic network in the metropolitan area of Mexico City, 2021-2022. Graduated with honorable mention; the work was later published.',
					o: 'Specialty thesis in Epidemiology, Faculty of Medicine, UNAM.',
					m: 'Advisor · Sep 2023'
				},
				{
					n: 'Juan Carlos Anguiano Velázquez',
					w: 'Design proposal for the ELSSA strategy of the Mexican Institute of Social Security.',
					o: 'Master of Public Health thesis, Escuela de Salud Pública de México.',
					m: 'Advisor · Aug 2023'
				},
				{
					n: 'Medical doctors in University Service in Research',
					w: 'Mentored three generations of research-service physicians (fall 2021, fall 2022, spring 2023).',
					o: '',
					m: '2021-2023'
				},
				{
					n: "Bachelor's dissertation synod",
					w: 'Served as synod for a bachelor-degree dissertation with a real patient, Medical School, UNAM.',
					o: '',
					m: 'Jan 2019'
				}
			],
			sciTitle: 'Science communication',
			sciComm:
				'Beyond formal courses, I like making research feel less distant. I built a blog on research methodology for upper-level students, with the motto "closer to science," and another on technology in education, gathering the basics of study design, research protocols, and epidemiological methods in plain language.',
			sciLinks: [
				{
					t: 'Más cerca de la ciencia — research methodology',
					u: 'https://vansfoumind.wixsite.com/metodinvest'
				},
				{
					t: 'Technology in education',
					u: 'https://vansfoumind.wixsite.com/virtualedquality'
				}
			]
		},
		es: {
			eyebrow: 'Docencia y tutoría',
			title: 'Docencia y tutoría',
			lead: 'La docencia es donde la metodología de la investigación se vuelve un hábito mental. He dirigido cursos de epidemiología, bioestadística, revisiones sistemáticas y redacción científica, y he asesorado tesis de posgrado en epidemiología y salud pública.',
			teachingTitle: 'Docencia',
			teaching: [
				{
					t: 'Asistente de instrucción, PH 623: Métodos Epidemiológicos',
					d: 'School of Public Health, San Diego State University. Apoyo a la instrucción bajo la supervisión de la Dra. Heather Pines.',
					m: 'Ene-May 2026'
				},
				{
					t: 'Fundamentos del sistema inmune',
					d: 'Conferencia invitada, Universidad Autónoma de Zacatecas. Sesión de dos horas impartida cada año durante cinco años consecutivos.',
					m: '2021-2025'
				},
				{
					t: 'Metodología de la investigación y estadística para ciencias de la salud',
					d: 'Titular del curso, avalado por el Departamento de Enseñanza del Instituto Nacional de Enfermedades Respiratorias (INER). 38 horas.',
					m: 'Feb-May 2024'
				},
				{
					t: 'Revisiones sistemáticas en ciencias de la salud',
					d: 'Titular del curso, avalado por el INER. 40 horas.',
					m: 'May-Jun 2023'
				},
				{
					t: 'Metodología de la investigación',
					d: 'Titular del curso, avalado por el INER. 20 horas.',
					m: 'Ago-Nov 2022'
				},
				{
					t: 'Redacción científica',
					d: 'Impartido en la especialidad médica en epidemiología, Dirección General de Epidemiología (DGE). 20 horas.',
					m: 'Mar-Jun 2021'
				},
				{
					t: 'Metodología, priorización de problemas y marco lógico',
					d: 'Talleres teórico-prácticos en la especialidad de epidemiología, DGE. 20 horas.',
					m: 'Jul 2020'
				}
			],
			advisingTitle: 'Dirección de tesis y tutoría',
			advising: [
				{
					n: 'Luis Eduardo Hernández Olvera',
					w: 'Costo-efectividad de la profilaxis previa a la exposición para reducir nuevos casos de VIH en la Ciudad de México, 2021-2022.',
					o: 'Tesis de especialidad en Epidemiología, Facultad de Medicina, UNAM.',
					m: 'Asesora · Feb 2026'
				},
				{
					n: 'Noé Hernández Valdivia',
					w: 'Análisis espacial de la transmisión de malaria en Chiapas y su relación con características epidemiológicas, demográficas y sociales, 2016-2021.',
					o: 'Tesis de especialidad en Epidemiología, Facultad de Medicina, UNAM.',
					m: 'Asesora · Jun 2024'
				},
				{
					n: 'Samuel Ehécatl Schulz Medina',
					w: 'Papel de la etapa de infección en la dinámica de transmisión de la red genética del VIH en la zona metropolitana de la Ciudad de México, 2021-2022. Graduado con mención honorífica; el trabajo se publicó después.',
					o: 'Tesis de especialidad en Epidemiología, Facultad de Medicina, UNAM.',
					m: 'Asesora · Sep 2023'
				},
				{
					n: 'Juan Carlos Anguiano Velázquez',
					w: 'Propuesta de diseño para la estrategia ELSSA del Instituto Mexicano del Seguro Social.',
					o: 'Tesis de Maestría en Salud Pública, Escuela de Salud Pública de México.',
					m: 'Asesora · Ago 2023'
				},
				{
					n: 'Médicos en Servicio Universitario en Investigación',
					w: 'Tutoría de tres generaciones de médicos en servicio de investigación (otoño 2021, otoño 2022, primavera 2023).',
					o: '',
					m: '2021-2023'
				},
				{
					n: 'Sínodo de tesis de licenciatura',
					w: 'Sínodo en la defensa de una tesis de licenciatura con paciente real, Facultad de Medicina, UNAM.',
					o: '',
					m: 'Ene 2019'
				}
			],
			sciTitle: 'Divulgación científica',
			sciComm:
				'Más allá de los cursos formales, me gusta hacer que la investigación se sienta menos lejana. Creé un blog de metodología de la investigación para estudiantes de nivel superior, con el lema "más cerca de la ciencia", y otro sobre tecnología en la educación, reuniendo en lenguaje claro lo básico del diseño de estudios, los protocolos de investigación y los métodos epidemiológicos.',
			sciLinks: [
				{
					t: 'Más cerca de la ciencia — metodología de la investigación',
					u: 'https://vansfoumind.wixsite.com/metodinvest'
				},
				{
					t: 'Tecnología en la educación',
					u: 'https://vansfoumind.wixsite.com/virtualedquality'
				}
			]
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>
<h1>{t.title}</h1>
<p class="lead">{t.lead}</p>

<h2>{t.teachingTitle}</h2>
{#each t.teaching as e}
	<div class="entry">
		<p class="entry-title">{e.t}</p>
		<p class="entry-desc">{e.d}</p>
		<span class="entry-meta">{e.m}</span>
	</div>
{/each}

<h2>{t.advisingTitle}</h2>
{#each t.advising as a}
	<div class="entry">
		<p class="entry-title">{a.n}</p>
		<p class="entry-desc"><em>{a.w}</em></p>
		{#if a.o}<p class="entry-org">{a.o}</p>{/if}
		<span class="entry-meta">{a.m}</span>
	</div>
{/each}

<h2>{t.sciTitle}</h2>
<p>{t.sciComm}</p>
<ul class="sci-links">
	{#each t.sciLinks as l}
		<li>
			<a href={l.u} target="_blank" rel="noopener noreferrer">{l.t}</a>
		</li>
	{/each}
</ul>

<style>
	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.entry {
		margin-bottom: var(--space-6);
	}

	.entry-title {
		margin: 0;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.05rem;
		color: var(--ink);
	}

	.entry-desc {
		margin: 0.2rem 0 0;
		color: var(--ink-soft);
		font-size: 0.98rem;
	}

	.entry-org {
		margin: 0.15rem 0 0;
		color: var(--ink-faint);
		font-size: 0.92rem;
	}

	.entry-meta {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-top: 0.25rem;
	}

	.sci-links {
		list-style: none;
		margin: var(--space-4) 0 0;
		padding: 0;
	}

	.sci-links li {
		margin-bottom: 0.4rem;
	}

	.sci-links a {
		color: var(--ink);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.sci-links a:hover {
		color: var(--ink-soft);
	}
</style>
