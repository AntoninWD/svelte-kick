import { twMerge as merge } from 'tailwind-merge';

type CSS = {
	[key: string]: string;
};
export const twMerge = (prevCSS: CSS, newCSS: CSS) => {
    if(Object.keys(newCSS).length === 0) return prevCSS;

	for (const key in newCSS) {
		const element = newCSS[key];
		prevCSS[key] = merge(prevCSS[key], element);
	}
    return prevCSS;
};
