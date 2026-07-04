<script>
	import { locale } from '$lib/i18n.svelte.js';

	const copy = {
		en: {
			eyebrow: 'Curriculum Vitae',
			title: 'Curriculum Vitae',
			download: 'Download full CV (PDF) ↗',
			lead: 'Physician and epidemiologist. PhD student in the Joint Doctoral Program in Public Health (Epidemiology) at UC San Diego / San Diego State University, and Graduate Student Researcher at the UCSD Antiviral Research Center.',
			sections: [
				{
					h: 'Education',
					entries: [
						{
							t: 'PhD, Public Health (Epidemiology track)',
							d: 'Joint Doctoral Program, University of California San Diego / San Diego State University',
							m: 'Sep 2024 - Present'
						},
						{ t: 'Specialty in Preventive Medicine', d: 'Instituto Nacional de Salud Pública (INSP), Mexico', m: '2018 - 2021' },
						{ t: 'Master of Public Health (Epidemiology concentration)', d: 'Instituto Nacional de Salud Pública (INSP), Mexico', m: '2018 - 2020' },
						{ t: 'Medical Doctor (General Practitioner)', d: 'School of Medicine, Universidad Autónoma de Zacatecas (UAZ), Mexico', m: '2010 - 2017' }
					]
				},
				{
					h: 'Languages',
					list: ['<strong>Spanish</strong>: native speaker', '<strong>English</strong>: C1 (TOEFL iBT 96)']
				},
				{
					h: 'Continuing education',
					entries: [
						{ t: 'Bayesian Statistics · Data Visualization in R · Introduction to GIS', d: 'International exchange, University of Minnesota (summer courses, with curricular value)', m: 'Jun 2021' },
						{ t: 'Introduction to Systematic Review and Meta-Analysis', d: 'Johns Hopkins University (online)', m: 'Jul 2020' },
						{ t: 'Programming Fundamentals', d: 'Duke University (online)', m: 'Jul 2020' },
						{ t: 'Information & Communication Technologies in Education', d: 'Grupo Avance Educativo (certificate)', m: 'Aug-Nov 2019' },
						{ t: 'Evaluation of Public Policies and Programs', d: 'Secretaría de Hacienda y Crédito Público (SHCP) (certificate)', m: 'Jun-Aug 2019' },
						{ t: 'GIS software Mapa Digital de México (basic and intermediate)', d: 'Instituto Nacional de Estadística y Geografía (INEGI)', m: 'Jul 2018' }
					]
				},
				{
					h: 'Professional experience',
					entries: [
						{ t: 'Graduate Student Researcher', d: 'Antiviral Research Center (AVRC), University of California San Diego', m: 'Aug 2024 - Present' },
						{ t: 'Researcher', d: 'Center for Research in Infectious Diseases (CIENI), National Institute of Respiratory Diseases (INER), Mexico City. Coordinated multi-institution study logistics, raising patient enrollment by roughly 70%, mentored students, designed protocols and data-collection instruments, managed and analyzed databases, and prepared manuscripts.', m: 'Jan 2021 - Jun 2023' },
						{ t: 'COVID-19 Public Health Advisor', d: 'Directorate of Epidemiological Operations Research, Dirección General de Epidemiología (DGE), Mexico City.', m: 'Mar-Jun 2021' },
						{ t: 'General Practitioner, COVID-19 emergency response', d: 'National Institute of Respiratory Diseases (INER), Mexico City.', m: 'Sep 2020' },
						{ t: 'Professional practice (MPH in Epidemiology)', d: 'Directorate of Epidemiological Operations Research, DGE, Mexico City. Prepared institutional reports and analyzed the national COVID-19 database and WHO situation reports.', m: 'Mar-Jun 2020' },
						{ t: 'Research Assistant', d: 'CIENI/INER. Managed protocol documentation, enrolled study candidates, and counseled newly HIV-diagnosed patients.', m: 'Nov 2017 - Feb 2018' }
					]
				},
				{
					h: 'Clinical training',
					entries: [
						{ t: 'General Practitioner', d: 'Healthcare center Estación San José, Fresnillo, Zacatecas. Primary care in a rural community.', m: 'Aug 2016 - Jul 2017' },
						{ t: 'Medical Rotational Internship', d: 'Hospital General de Zona No. 1, Instituto Mexicano del Seguro Social (IMSS), Zacatecas.', m: 'Aug 2015 - Jul 2016' }
					]
				},
				{
					h: 'Community outreach & volunteer',
					entries: [
						{ t: 'HIV transmission network, public presentation', d: 'Condesa Clinic: the role of sexual encounter venues in HIV transmission in Mexico City.', m: 'Aug 2025' },
						{ t: 'Volunteer physician, Community Scientific Expedition', d: 'Mexicali, Baja California. Certificate of recognition (SDSU and Universidad Autónoma de Baja California).', m: 'May 2025' },
						{ t: 'Volunteer physician (emergency room)', d: 'Hospital General Fresnillo Dr. José Haro Ávila, Zacatecas.', m: '2011 - 2015' },
						{ t: 'Volunteer physician', d: 'Dispensario Médico Central de Abastos y Alma Obrera, Zacatecas. Free primary care for low-income populations.', m: '2013' }
					]
				},
				{
					h: 'Distinctions & awards',
					entries: [
						{ t: 'T32 ALIADOS Program', m: 'Apr 2026' },
						{ t: 'Global Grant Scholarship for graduate studies, Rotary Club', m: 'Oct 2025' },
						{ t: 'Scholarship for graduate studies abroad, CONAHCYT', m: 'Oct 2024' },
						{ t: 'Candidate for National Researcher, National Researchers System (CONAHCYT)', m: 'Jan 2023' },
						{ t: 'Special mention, degree thesis on HIV transmission networks in metropolitan Mexico City', m: 'Apr 2021' },
						{ t: '2nd place, national Political Debate 2017 (state phase), INJUVE Zacatecas', m: 'Oct 2017' }
					]
				},
				{
					h: 'Technical skills',
					list: [
						'<strong>Statistics & data</strong>: R / RStudio, STATA, SPSS, ATLAS.ti, REDCap',
						'<strong>Evidence & literature</strong>: PubMed, Cochrane Library, Scopus, SciELO, Epistemonikos, Health Evidence, Up to Date, BVS',
						'<strong>Tools & platforms</strong>: Microsoft Office, BioRender, Canvas, Moodle, Google Classroom',
						'<strong>Large language models</strong>: ChatGPT, Claude, Gemini, NotebookLM'
					]
				},
				{
					h: 'Extracurricular',
					list: ['Classical piano', 'Five-animal-style Kung Fu (blue belt)', 'Kickboxing', 'Film appraisal workshop']
				}
			]
		},
		es: {
			eyebrow: 'Currículum',
			title: 'Currículum',
			download: 'Descargar CV completo (PDF) ↗',
			lead: 'Médica y epidemióloga. Estudiante de doctorado en el Programa Doctoral Conjunto en Salud Pública (Epidemiología) de UC San Diego / San Diego State University, e investigadora en el Antiviral Research Center de UCSD.',
			sections: [
				{
					h: 'Formación académica',
					entries: [
						{ t: 'Doctorado en Salud Pública (Epidemiología)', d: 'Programa Doctoral Conjunto, University of California San Diego / San Diego State University', m: 'Sep 2024 - Presente' },
						{ t: 'Especialidad en Medicina Preventiva', d: 'Instituto Nacional de Salud Pública (INSP), México', m: '2018 - 2021' },
						{ t: 'Maestría en Salud Pública (área de Epidemiología)', d: 'Instituto Nacional de Salud Pública (INSP), México', m: '2018 - 2020' },
						{ t: 'Médica Cirujana (médica general)', d: 'Facultad de Medicina, Universidad Autónoma de Zacatecas (UAZ), México', m: '2010 - 2017' }
					]
				},
				{
					h: 'Idiomas',
					list: ['<strong>Español</strong>: lengua materna', '<strong>Inglés</strong>: C1 (TOEFL iBT 96)']
				},
				{
					h: 'Formación continua',
					entries: [
						{ t: 'Estadística bayesiana · Visualización de datos en R · Introducción a los SIG', d: 'Intercambio internacional, University of Minnesota (cursos de verano con valor curricular)', m: 'Jun 2021' },
						{ t: 'Introducción a la revisión sistemática y el metaanálisis', d: 'Johns Hopkins University (en línea)', m: 'Jul 2020' },
						{ t: 'Fundamentos de programación', d: 'Duke University (en línea)', m: 'Jul 2020' },
						{ t: 'Tecnologías de la información y la comunicación en la educación', d: 'Grupo Avance Educativo (certificado)', m: 'Ago-Nov 2019' },
						{ t: 'Evaluación de políticas y programas públicos', d: 'Secretaría de Hacienda y Crédito Público (SHCP) (certificado)', m: 'Jun-Ago 2019' },
						{ t: 'Software SIG Mapa Digital de México (básico e intermedio)', d: 'Instituto Nacional de Estadística y Geografía (INEGI)', m: 'Jul 2018' }
					]
				},
				{
					h: 'Experiencia profesional',
					entries: [
						{ t: 'Investigadora de posgrado', d: 'Antiviral Research Center (AVRC), University of California San Diego', m: 'Ago 2024 - Presente' },
						{ t: 'Investigadora', d: 'Centro de Investigación en Enfermedades Infecciosas (CIENI), Instituto Nacional de Enfermedades Respiratorias (INER), Ciudad de México. Coordinó la logística de estudios multiinstitucionales, aumentando el reclutamiento de pacientes cerca de 70%, asesoró estudiantes, diseñó protocolos e instrumentos de recolección, gestionó y analizó bases de datos y preparó manuscritos.', m: 'Ene 2021 - Jun 2023' },
						{ t: 'Asesora de salud pública COVID-19', d: 'Dirección de Investigación Operativa Epidemiológica, Dirección General de Epidemiología (DGE), Ciudad de México.', m: 'Mar-Jun 2021' },
						{ t: 'Médica general, respuesta de emergencia COVID-19', d: 'Instituto Nacional de Enfermedades Respiratorias (INER), Ciudad de México.', m: 'Sep 2020' },
						{ t: 'Prácticas profesionales (Maestría en Epidemiología)', d: 'Dirección de Investigación Operativa Epidemiológica, DGE, Ciudad de México. Preparó informes institucionales y analizó la base de datos nacional de COVID-19 y los reportes de situación de la OMS.', m: 'Mar-Jun 2020' },
						{ t: 'Asistente de investigación', d: 'CIENI/INER. Gestionó la documentación de protocolos, reclutó candidatos a estudios y brindó consejería a pacientes con diagnóstico reciente de VIH.', m: 'Nov 2017 - Feb 2018' }
					]
				},
				{
					h: 'Formación clínica',
					entries: [
						{ t: 'Médica general', d: 'Centro de salud Estación San José, Fresnillo, Zacatecas. Atención primaria en una comunidad rural.', m: 'Ago 2016 - Jul 2017' },
						{ t: 'Internado médico de pregrado', d: 'Hospital General de Zona No. 1, Instituto Mexicano del Seguro Social (IMSS), Zacatecas.', m: 'Ago 2015 - Jul 2016' }
					]
				},
				{
					h: 'Servicio comunitario y voluntariado',
					entries: [
						{ t: 'Red de transmisión del VIH, presentación pública', d: 'Clínica Condesa: el papel de los sitios de encuentro en la transmisión del VIH en la Ciudad de México.', m: 'Ago 2025' },
						{ t: 'Médica voluntaria, Expedición Científica Comunitaria', d: 'Mexicali, Baja California. Reconocimiento (SDSU y Universidad Autónoma de Baja California).', m: 'May 2025' },
						{ t: 'Médica voluntaria (urgencias)', d: 'Hospital General Fresnillo Dr. José Haro Ávila, Zacatecas.', m: '2011 - 2015' },
						{ t: 'Médica voluntaria', d: 'Dispensario Médico Central de Abastos y Alma Obrera, Zacatecas. Atención primaria gratuita para poblaciones de bajos ingresos.', m: '2013' }
					]
				},
				{
					h: 'Distinciones y premios',
					entries: [
						{ t: 'Programa T32 ALIADOS', m: 'Abr 2026' },
						{ t: 'Beca Global Grant para estudios de posgrado, Club Rotario', m: 'Oct 2025' },
						{ t: 'Beca para estudios de posgrado en el extranjero, CONAHCYT', m: 'Oct 2024' },
						{ t: 'Candidata a Investigadora Nacional, Sistema Nacional de Investigadores (CONAHCYT)', m: 'Ene 2023' },
						{ t: 'Mención especial, tesis de licenciatura sobre redes de transmisión del VIH en la zona metropolitana de la Ciudad de México', m: 'Abr 2021' },
						{ t: '2.º lugar, Debate Político 2017 (fase estatal), INJUVE Zacatecas', m: 'Oct 2017' }
					]
				},
				{
					h: 'Habilidades técnicas',
					list: [
						'<strong>Estadística y datos</strong>: R / RStudio, STATA, SPSS, ATLAS.ti, REDCap',
						'<strong>Evidencia y literatura</strong>: PubMed, Cochrane Library, Scopus, SciELO, Epistemonikos, Health Evidence, Up to Date, BVS',
						'<strong>Herramientas y plataformas</strong>: Microsoft Office, BioRender, Canvas, Moodle, Google Classroom',
						'<strong>Modelos de lenguaje</strong>: ChatGPT, Claude, Gemini, NotebookLM'
					]
				},
				{
					h: 'Actividades extracurriculares',
					list: ['Piano clásico', 'Kung Fu estilo cinco animales (cinta azul)', 'Kickboxing', 'Taller de apreciación cinematográfica']
				}
			]
		}
	};

	const t = $derived(copy[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>
<h1>{t.title}</h1>
<p class="lead">{t.lead}</p>

{#each t.sections as sec}
	<h2>{sec.h}</h2>
	{#if sec.list}
		<ul class="cv-list">
			{#each sec.list as li}
				<li>{@html li}</li>
			{/each}
		</ul>
	{:else}
		{#each sec.entries as e}
			<div class="entry">
				<p class="entry-title">{e.t}</p>
				{#if e.d}<p class="entry-desc">{e.d}</p>{/if}
				{#if e.m}<span class="entry-meta">{e.m}</span>{/if}
			</div>
		{/each}
	{/if}
{/each}

<style>
	.lead {
		font-size: 1.2rem;
		line-height: 1.55;
		color: var(--ink-soft);
	}

	.dl {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		margin-top: calc(-1 * var(--space-4));
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

	.entry-meta {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--ink-faint);
		margin-top: 0.25rem;
	}

	.cv-list {
		margin: var(--space-2) 0 var(--space-4) var(--space-6);
	}

	.cv-list li {
		margin: 0.2rem 0;
	}
</style>
