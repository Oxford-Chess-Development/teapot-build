export function capitalise(str: string): string {
	if (!str) return str;
	return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

export function randBetween(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
