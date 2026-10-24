interface Profile {
	fullName: string
	title: string
	institute: string
	author_name: string
	research_areas: { title: string; description: string; field: string }[]
}

export const profile: Profile = {
	fullName: 'Andreas Peintner',
	title: 'AI Engineer / PhD Candidate',
	institute: 'University of Innsbruck & doc2me',
	author_name: 'Andreas Peintner',
	research_areas: [
		{
			title: 'Sequential Recommendation',
			description: 'Graph-based modeling of repeated intent and temporal user interactions.',
			field: 'computer-science',
		},
		{
			title: 'Music Information Retrieval',
			description: 'Nuanced emotion recognition and music recommendation via graph neural networks.',
			field: 'computer-science',
		},
		{
			title: 'Graph Neural Networks',
			description: 'Efficient shortest-path search, contrastive learning, and hypergraph representations.',
			field: 'computer-science',
		},
		{
			title: 'Machine Learning in Production',
			description: 'Scalable deep learning architectures, cloud deployment, and CTR model compression.',
			field: 'computer-science',
		},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'a.peintner@gmx.net',
	linkedin: 'https://www.linkedin.com/in/andreas-peintner-7566b3162/',
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
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Andreas Peintner | AI Engineer & PhD Candidate',
	default_description: 'Academic website of Andreas Peintner. Research in Sequential Recommendation, Graph Neural Networks, and Music Information Retrieval.',
	default_image: '/favicon.png',
}
