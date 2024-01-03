import { BadgeTheme } from '../components/Badge';

export function getRandomBadgeTheme(): BadgeTheme {
	const themesArray = Object.values(BadgeTheme);
	const randomIndex = Math.floor(Math.random() * themesArray.length);
	return themesArray[randomIndex];
}
