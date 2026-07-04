// Lightweight bilingual state (English / Spanish).
// Prerendered HTML is English; on the client we read the saved choice
// (or the browser language) and switch reactively.

let current = $state('en');

export const locale = {
	get current() {
		return current;
	}
};

function persist(l) {
	try {
		localStorage.setItem('lang', l);
		document.documentElement.lang = l;
	} catch {
		/* ignore */
	}
}

export function setLang(l) {
	current = l === 'es' ? 'es' : 'en';
	persist(current);
}

export function initLang() {
	let l = 'en';
	try {
		const saved = localStorage.getItem('lang');
		if (saved === 'en' || saved === 'es') {
			l = saved;
		} else if (navigator.language && navigator.language.toLowerCase().startsWith('es')) {
			l = 'es';
		}
	} catch {
		/* ignore */
	}
	current = l;
	try {
		document.documentElement.lang = l;
	} catch {
		/* ignore */
	}
}
