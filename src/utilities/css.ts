import { twMerge as merge } from 'tailwind-merge';

type CSS = {
	[key: string]: string;
};
export const twMerge = (prevCSS: CSS, newCSS: CSS) => {
	for (const key in newCSS) {
		const element = newCSS[key];
		prevCSS[key] = merge(prevCSS[key], element);
	}
    return prevCSS;
};
