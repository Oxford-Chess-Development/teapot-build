import * as regexes from './regexes';

export function isMobile(): boolean {
	let str: string = navigator.userAgent || navigator.vendor || '';
	if (regexes.mobile[0].test(str)) return true;
	if (regexes.mobile[1].test(str.substr(0, 4))) return true;
	return false;
}