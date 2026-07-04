<script>
	import { locale } from '$lib/i18n.svelte.js';

	// Curated from Vanessa Dávila Conn's CV. Grouped as the CV groups them.
	const firstAuthor = [
		{
			title:
				'Characteristics and growth of the genetic HIV transmission network of Mexico City during 2020',
			authors:
				'Dávila-Conn V, García-Morales C, Matías-Florentino M, López-Ortiz E, Paz-Juárez HE, Beristain-Barreda Á, Cárdenas-Sandoval M, Tapia-Trejo D, López-Sánchez DM, Becerril-Rodríguez M, García-Esparza P, Macías-González I, Iracheta-Hernández P, Weaver S, Wertheim JO, Reyes-Terán G, González-Rodríguez A, Ávila-Ríos S',
			journal: 'J Int AIDS Soc',
			year: '2021',
			url: 'https://doi.org/10.1002/jia2.25836'
		},
		{
			title:
				'Seroepidemiology of SARS-CoV-2 in healthcare personnel working at the largest tertiary COVID-19 referral hospitals in Mexico City',
			authors:
				'Dávila-Conn V, Soto-Nava M, Caro-Vega YN, Paz-Juárez HE, García-Esparza P, Tapia-Trejo D, Pérez-García M, Belaunzarán-Zamudio PF, Reyes-Terán G, Sierra-Madero JG, Galindo-Fraga A, Ávila-Ríos S',
			journal: 'PLoS One',
			year: '2022',
			url: 'https://doi.org/10.1371/journal.pone.0264964'
		},
		{
			title:
				'SARS-CoV-2 antibody prevalence and titers in persons living with HIV cared for at a large tertiary reference center in Mexico City',
			authors:
				'Soto-Nava M, Dávila-Conn V, Venancio-Rocha JP, García-Esparza P, Tapia-Trejo D, Hernández-Juan R, Zarza-Sánchez E, Murakami-Ogasawara A, Ávila-Ríos S',
			journal: 'Virol J',
			year: '2023',
			url: 'https://doi.org/10.1186/s12985-023-02261-2',
			equalFirst: true
		}
	];

	const contributing = [
		{
			title:
				'Characterization of Post COVID-19 pneumo-hematocele in the largest COVID-19 center in Mexico City',
			authors:
				'Castrillo-Hernández GE, Pimienta-Ibarra AS, Barrientos-Morales EG, Solares-Espinoza AG, Dávila-Conn V, Hérnandez-Cárdenas CM, Castorena-Maldonado AR, Bolaños FV, Juárez-Armenta AL',
			journal: 'J Cardiothorac Surg',
			year: '2026',
			url: 'https://doi.org/10.1186/s13019-026-04218-2'
		},
		{
			title:
				'Challenges in HIV care at a tertiary hospital repurposed for COVID-19: an observational study (2019-2022)',
			authors:
				'Romero-Mora KA, Gómez-Palacio-Schjetnan M, Dávila-Conn V, García-Delgado CA, Cervantes-Valenzuela M, Alvarado-de la Barrera C, Schulz-Medina SE, Ávila-Ríos S',
			journal: 'BMC Infect Dis',
			year: '2025',
			url: 'https://doi.org/10.1186/s12879-025-12357-5'
		},
		{
			title:
				'HIV molecular network in Mexico City (2021-2022): Understanding transmission dynamics through the role of newly diagnosed cases',
			authors:
				'Schulz-Medina SE, Tapia-Trejo D, Matías-Florentino M, López-Sánchez DM, García-Morales C, Monreal-Flores J, Beristain-Barreda Á, Cárdenas-Sandoval M, Becerril-Rodríguez M, Del Arenal-Sánchez S, Quiroz-Morales V, Weaver S, Wertheim JO, Cruz-Flores RA, Reyes-Terán G, González-Rodríguez A, Ávila-Ríos S, Dávila-Conn V',
			journal: 'HIV Med',
			year: '2025',
			url: 'https://doi.org/10.1111/hiv.70029'
		},
		{
			title:
				'Characterization of People Living with HIV Who Inject Drugs in Mexico City: Importance for Transmission and Detection',
			authors:
				'Gutiérrez-Velilla E, Schulz-Medina SE, Dávila-Conn VM, Caballero-Suárez NP, Ávila-Ríos S',
			journal: 'AIDS Patient Care STDS',
			year: '2025',
			url: 'https://doi.org/10.1089/apc.2024.0235'
		},
		{
			title:
				'Characterization of HIV epitopes restricted by the Amerindian B*39:02 subtype using synthetic peptides that encompass described HLA-associated polymorphisms',
			authors:
				'Soto-Nava M, Valenzuela-Ponce H, Cervantes-Valenzuela M, Felix-Soto L, Sosa-Flores C, Flores-Andrade X, Dávila-Conn V, Ávila-Ríos S',
			journal: 'Human Immunology',
			year: '2024',
			url: 'https://doi.org/10.1016/j.humimm.2024.111025'
		},
		{
			title: 'Auto-tune: Selecting the distance threshold for inferring HIV transmission clusters',
			authors:
				'Weaver S, Dávila-Conn V, Ji D, Verdonk H, Ávila-Ríos S, Leigh Brown AJ, Wertheim JO, Kosakovsky Pond SL',
			journal: 'Front Bioinform',
			year: '2024',
			url: 'https://doi.org/10.3389/fbinf.2024.1400003'
		},
		{
			title: 'HIV Pretreatment Drug Resistance Trends in Mexico City, 2017-2020',
			authors:
				'García-Morales C, Tapia-Trejo D, Matías-Florentino M, Quiroz-Morales VS, Dávila-Conn V, Beristain-Barreda Á, Cárdenas-Sandoval M, Becerril-Rodríguez M, Iracheta-Hernández P, Macías-González I, García-Mendiola R, Guzmán-Carmona A, Zarza-Sánchez E, Cruz RA, González-Rodríguez A, Reyes-Terán G, Ávila-Ríos S',
			journal: 'Pathogens',
			year: '2021',
			url: 'https://doi.org/10.3390/pathogens10121587'
		}
	];

	const books = [
		{
			title:
				'Fundamentos para la interpretación de resultados de un metaanálisis clásico',
			authors: 'Dávila-Conn V',
			journal:
				'In: La metría de la información-conocimiento y los datos en la búsqueda de evidencias científicas. UNAM, Ciudad de México',
			year: '2025',
			meta: 'ISBN 978-607-642-193-2',
			role: 'Author'
		},
		{
			title: 'Information metrics, systematic reviews, and meta-analysis',
			authors: 'Gorbea-Portal S, Piña-Pozas M, Dávila Conn V',
			journal: 'Commemorative Editions, UNAM, Ciudad de México',
			year: '2023',
			url: 'https://ru.iibi.unam.mx/jspui/handle/IIBI_UNAM/713',
			role: 'Author'
		},
		{
			title:
				'COVID-19 Research and Information Metrics: Different Approaches to the Pandemic',
			authors: 'UNAM book repository',
			journal: 'Instituto de Investigaciones Bibliotecológicas y de la Información, UNAM',
			url: 'https://ru.iibi.unam.mx/jspui/handle/IIBI_UNAM/227',
			role: 'Reviewer'
		}
	];

	const conferences = [
		{
			title:
				'The Role of Interpersonal Factors in Breast Cancer Screening in U.S. Hispanic/Latina Women: Findings from the HCHS/SOL Sociocultural Ancillary Study',
			venue: '41st Epidemiology Research Exchange',
			place: 'San Diego, US',
			year: '2026',
			kind: 'Poster'
		},
		{
			title:
				'Ego-Network Characteristics of Individuals Diagnosed with Gonorrhea and Chlamydia in Southern Nevada',
			venue: 'International Network for Social Network Analysis (Sunbelt)',
			place: 'Paris, FR',
			year: '2024',
			kind: 'Poster'
		},
		{
			title: 'Drug Resistance Mutation Prevalence in HCV circulating in Mexico City',
			venue: '10th CIENI/INER-Capasits Oaxaca HIV Meeting',
			place: 'Oaxaca, MX',
			year: '2023',
			kind: 'Oral'
		},
		{
			title: 'Role of injection drug users in the HIV transmission network in Mexico City',
			venue: '30th International Dynamics & Evolution of Human Viruses',
			place: 'Heidelberg, DE',
			year: '2023',
			kind: 'Poster'
		},
		{
			title:
				'SARS-CoV-2 antibody prevalence and titers in people living with HIV cared for at a large tertiary reference center in Mexico City',
			venue: '29th International Dynamics & Evolution of Human Viruses',
			place: 'San Diego, CA',
			year: '2022',
			kind: 'Poster'
		},
		{
			title:
				'Evaluation of blood transfusion products in the General Hospital No. 1 IMSS Zacatecas, according to the Official Mexican Norm and related guidelines',
			venue: 'XXIX Medical Conference, Universidad Autónoma de Zacatecas, 2nd place',
			place: 'Zacatecas, MX',
			year: '2017',
			kind: 'Poster'
		},
		{
			title:
				'Computer visual syndrome and its consequences in the administrative staff of the Campus Siglo XXI',
			venue: 'Research Methodology Forum, Universidad Autónoma de Zacatecas, 1st place',
			place: 'Zacatecas, MX',
			year: '2011',
			kind: 'Poster'
		}
	];

	function formatAuthors(authors) {
		return authors.replace(/(Dávila[-\s]?Conn(?:\s+VM?)?|Davila[-\s]?Conn(?:\s+V)?)/g, '<strong>$1</strong>');
	}

	const labels = {
		en: {
			eyebrow: 'Publications',
			title: 'Publications',
			intro: 'Peer-reviewed papers, books, and selected conference work. A live list is also on ',
			first: 'Scientific papers · First author',
			contrib: 'Scientific papers · Contributing author',
			booksH: 'Books & chapters',
			confH: 'Conference presentations',
			equalNote: 'Equal first-author contribution'
		},
		es: {
			eyebrow: 'Publicaciones',
			title: 'Publicaciones',
			intro: 'Artículos revisados por pares, libros y trabajos seleccionados de congresos. También hay una lista en ',
			first: 'Artículos científicos · Primera autora',
			contrib: 'Artículos científicos · Coautora',
			booksH: 'Libros y capítulos',
			confH: 'Presentaciones en congresos',
			equalNote: 'Contribución equitativa como primera autora'
		}
	};

	const roleLabel = {
		Author: { en: 'Author', es: 'Autora' },
		Reviewer: { en: 'Reviewer', es: 'Revisora' }
	};
	const kindLabel = {
		Poster: { en: 'Poster', es: 'Cartel' },
		Oral: { en: 'Oral', es: 'Oral' }
	};

	const t = $derived(labels[locale.current]);
</script>

<p class="eyebrow">{t.eyebrow}</p>

<h1>{t.title}</h1>

<p>
	{t.intro}<a href="https://scholar.google.com/scholar?q=Vanessa+D%C3%A1vila-Conn">Google Scholar</a>.
</p>

<h2>{t.first}</h2>
{#each firstAuthor as pub}
	<div class="pub">
		<span class="pub-title">
			{#if pub.url}<a href={pub.url}>{pub.title}</a>{:else}{pub.title}{/if}
		</span>
		<span class="pub-authors">{@html formatAuthors(pub.authors)}</span>
		<span class="pub-meta">
			<span class="pub-journal">{pub.journal}</span>
			<span class="pub-year">({pub.year})</span>
			{#if pub.equalFirst}<span class="pub-badge">{t.equalNote}</span>{/if}
		</span>
	</div>
{/each}

<h2>{t.contrib}</h2>
{#each contributing as pub}
	<div class="pub">
		<span class="pub-title">
			{#if pub.url}<a href={pub.url}>{pub.title}</a>{:else}{pub.title}{/if}
		</span>
		<span class="pub-authors">{@html formatAuthors(pub.authors)}</span>
		<span class="pub-meta">
			<span class="pub-journal">{pub.journal}</span>
			<span class="pub-year">({pub.year})</span>
		</span>
	</div>
{/each}

<h2>{t.booksH}</h2>
{#each books as pub}
	<div class="pub">
		<span class="pub-title">
			{#if pub.url}<a href={pub.url}>{pub.title}</a>{:else}{pub.title}{/if}
		</span>
		<span class="pub-authors">{@html formatAuthors(pub.authors)}</span>
		<span class="pub-meta">
			<span class="pub-journal">{pub.journal}</span>
			{#if pub.year}<span class="pub-year">({pub.year})</span>{/if}
			{#if pub.meta}<span class="pub-year">· {pub.meta}</span>{/if}
			<span class="pub-badge">{roleLabel[pub.role][locale.current]}</span>
		</span>
	</div>
{/each}

<h2>{t.confH}</h2>
{#each conferences as c}
	<div class="pub">
		<span class="pub-title">{c.title}</span>
		<span class="pub-authors">{c.venue}, {c.place}</span>
		<span class="pub-meta">
			<span class="pub-badge">{kindLabel[c.kind][locale.current]}</span>
			<span class="pub-year">({c.year})</span>
		</span>
	</div>
{/each}

<style>
	.pub {
		margin-bottom: var(--space-4);
		padding-bottom: var(--space-3);
		border-bottom: 1px solid var(--rule);
	}

	.pub-title {
		display: block;
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 1.05rem;
		line-height: 1.35;
	}

	.pub-title a {
		color: var(--ink);
		text-decoration: none;
	}

	.pub-title a:hover {
		color: var(--signal);
	}

	.pub-authors {
		display: block;
		margin-top: 0.3rem;
		font-size: 0.9rem;
		color: var(--ink-soft);
		line-height: 1.5;
	}

	.pub-authors :global(strong) {
		color: var(--ink);
		font-weight: 700;
	}

	.pub-meta {
		display: block;
		margin-top: 0.2rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-faint);
	}

	.pub-journal {
		font-style: normal;
		color: var(--accent);
	}

	.pub-year {
		margin-left: 0.35rem;
	}

	.pub-badge {
		display: inline-block;
		margin-left: 0.5rem;
		padding: 0.1rem 0.45rem;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: var(--muted-tint);
		border-radius: var(--radius);
		color: var(--accent);
	}
</style>
