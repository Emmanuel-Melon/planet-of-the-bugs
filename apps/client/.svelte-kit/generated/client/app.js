export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [0];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/about/[slug=slug]": [5],
		"/authored": [8],
		"/authored/edit": [9],
		"/auth": [6],
		"/auth/new-user": [7],
		"/chat": [10],
		"/courses": [11],
		"/courses/[slug]": [12,[],[2]],
		"/courses/[slug]/[lesson]": [13,[],[2]],
		"/explore": [14],
		"/issues": [15],
		"/notifications": [16],
		"/profile": [17],
		"/settings": [18]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';