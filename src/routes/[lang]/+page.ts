import { getContent, supportedLanguages } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return supportedLanguages.map((lang) => ({ lang }));
};

export const load: PageLoad = ({ params }) => {
	const content = getContent(params.lang);
	return {
		lang: params.lang,
		content
	};
};
