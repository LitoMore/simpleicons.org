export const siteUrl = 'https://simpleicons.org';

export const pages = [
	{
		path: '/',
		title: 'Simple Icons',
		description:
			'Browse, customize, and download free SVG icons for popular brands.',
		image: '/og.png',
		imageAlt:
			'The Simple Icons logo surrounded by a grid of colorful brand icons.',
	},
	{
		path: '/preview',
		title: 'SVG Icon Previewer | Simple Icons',
		description:
			'Choose a brand icon or upload your own SVG. Preview it at different sizes, adjust its color, and download the SVG or a PNG preview.',
		image: '/social/preview.jpg',
		imageAlt:
			'Icon Previewer: three sizes of the GitHub icon on an alignment grid.',
	},
	{
		path: '/3d',
		title: '3D Magnet Generator | Simple Icons',
		description:
			'Design a 3D-printable magnet from a brand icon. Adjust the size and colors, preview the model, and export it as an STL or 3MF file.',
		image: '/social/3d.jpg',
		imageAlt:
			'3D Magnet Generator: a blue Octocat print beside a round silver magnet.',
	},
	{
		path: '/cdn',
		title: 'Simple Icons CDN | SVG Embed Code Generator',
		description:
			'Choose a brand icon, set its light and dark mode colors, and copy a CDN URL or a ready-to-use HTML or Markdown snippet.',
		image: '/social/cdn.jpg',
		imageAlt:
			'Simple Icons CDN: one GitHub icon appears in three browser windows in different colors.',
	},
	{
		path: '/og',
		title: 'Open Graph Image Generator | Simple Icons',
		description:
			'Create an Open Graph image with a grid of brand icons. Set the canvas dimensions, icon size, and spacing, then download the image for your link previews.',
		image: '/social/og.jpg',
		imageAlt:
			'Open Graph Generator: a stack of sharing cards with a colorful grid of brand icons.',
	},
];

export function findPage(pathname: string) {
	return pages.find(
		(page) => page.path === (pathname.replace(/\/$/, '') || '/'),
	);
}

export function pageMetaTags(page: (typeof pages)[number]) {
	const url = siteUrl + page.path;
	return [
		{name: 'description', content: page.description},
		{property: 'og:title', content: page.title},
		{property: 'og:description', content: page.description},
		{property: 'og:url', content: url},
		{property: 'og:image', content: siteUrl + page.image},
		{property: 'og:image:alt', content: page.imageAlt},
		{name: 'twitter:title', content: page.title},
		{name: 'twitter:description', content: page.description},
		{name: 'twitter:url', content: url},
		{name: 'twitter:image', content: siteUrl + page.image},
		{name: 'twitter:image:alt', content: page.imageAlt},
	];
}
