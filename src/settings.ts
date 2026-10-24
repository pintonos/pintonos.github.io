interface Profile {
	fullName: string
	title: string
	credential: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Andreas Peintner',
	title: 'AI Engineering Lead',
	credential: 'PhD',
	institute: 'doc2me',
	author_name: 'Andreas Peintner',
	research_areas: [
		{
			title: 'Sequential Recommendation',
			description: 'Graph-based modeling of repeated intent and temporal user interactions.',
			field: 'recommendation',
		},
		{
			title: 'Music Information Retrieval',
			description: 'Nuanced emotion recognition and music recommendation via graph neural networks.',
			field: 'music',
		},
		{
			title: 'Graph Neural Networks',
			description: 'Efficient shortest-path search, contrastive learning, and hypergraph representations.',
			field: 'graph',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'a.peintner@gmx.net',
	linkedin: 'https://www.linkedin.com/in/andreas-peintner-phd-7566b3162/',
	x: '',
	bluesky: '',
	github: 'https://github.com/pintonos',
	gitlab: '',
	scholar: 'https://scholar.google.de/citations?user=HCKACzoAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0001-7337-524X',
}

export const template = {
	website_url: 'https://pintonos.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'peintner-light', // Themes are defined in src/styles/global.css
	darkTheme: 'peintner-dark',
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Andreas Peintner | AI Engineering Lead & PhD',
	default_description: 'Website of Andreas Peintner, AI Engineering Lead at doc2me (agentic AI for expert-generated healthcare video content) with a PhD in Computer Science. Research background in Sequential Recommendation, Graph Neural Networks, and Music Information Retrieval.',
	default_image: '/og-image.png',
}
