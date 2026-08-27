import type { PortfolioData } from '../types/portfolio';

export const enData: PortfolioData = {
	lang: 'en',
	htmlLang: 'en',
	seo: {
		title: '[Your Name] | [Your Role / Speciality]',
		description: 'Online resume and personal portfolio of [Your Name]. Software engineer focused on building robust and scalable digital products.',
		siteName: '[Your Name]',
		keywords: ['Software Engineer', 'Developer', 'Portfolio', 'Tech', 'TypeScript', 'SvelteKit']
	},
	profile: {
		name: '[Your Full Name]',
		role: '[Your Role / Area of Expertise]',
		email: 'your-email@example.com',
		location: 'São Paulo, Brazil',
		summary: 'Developer focused on creating well-structured digital products with clean code, reliable backend architectures, and fast user interfaces.',
		socialLinks: {
			linkedin: 'https://linkedin.com/in/your-username',
			github: 'https://github.com/your-username',
			twitter: 'https://twitter.com/your-username'
		}
	},
	navItems: [
		{ label: 'Home', href: '#home' },
		{ label: 'About', href: '#about' },
		{ label: 'Experience', href: '#experience' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Contact', href: '#contact' }
	],
	hero: {
		kicker: 'Available for web and software engineering projects',
		primaryAction: 'View Projects',
		secondaryAction: 'Get in Touch',
		actionsLabel: 'Primary actions',
		cardLabel: 'Stack used on this site',
		cardValue: 'SvelteKit • TypeScript • Modern CSS',
		cardAriaLabel: 'Project technical summary',
		imageAlt: 'Profile picture or workspace illustration',
		imagePlaceholderSrc: '/images/hero-placeholder.svg'
	},
	about: {
		kicker: 'About',
		title: 'About Me',
		paragraphs: [
			'Hello! I am a software engineer focused on turning complex challenges into clean, performant, and sustainable digital products.',
			'I have experience developing end-to-end applications, combining solid backend architecture with responsive, accessible frontend interfaces.',
			'I am continuously learning and exploring modern engineering practices to build scalable, high-quality software.'
		],
		highlights: [
			{ label: 'Primary Focus', value: 'Software Engineering & Architecture' },
			{ label: 'Approach', value: 'Clean Code, CI/CD & Automation' },
			{ label: 'Core Values', value: 'Performance, Accessibility & Reliability' }
		],
		skillsLabel: 'Skills & Technologies',
		skillGroups: [
			{
				title: 'Languages & Core',
				skills: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'HTML5/CSS3']
			},
			{
				title: 'Frontend & Frameworks',
				skills: ['Svelte / SvelteKit', 'React', 'Next.js', 'TailwindCSS', 'Vite']
			},
			{
				title: 'Backend & Cloud',
				skills: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS / Cloud']
			},
			{
				title: 'Tools & DevOps',
				skills: ['Git / GitHub Actions', 'CI/CD', 'Automated Testing', 'Linux', 'IaC']
			}
		]
	},
	experience: {
		kicker: 'Career',
		title: 'Work Experience',
		items: [
			{
				id: 'exp-1',
				role: 'Senior / Mid Software Engineer',
				company: '[Current Company Name]',
				companyLogoText: 'CC',
				website: 'https://example.com',
				period: '2023 — Present',
				location: 'Remote / Hybrid',
				summary: 'Developing and scaling cloud services, focusing on system reliability, clean architecture, and rapid feature delivery.',
				highlights: [
					'Led architectural design for distributed microservices.',
					'Implemented automated CI/CD pipelines reducing deployment cycles.',
					'Optimized database queries and API response times by 40%.'
				],
				skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
			},
			{
				id: 'exp-2',
				role: 'Software Developer',
				company: '[Previous Company Name]',
				companyLogoText: 'PC',
				website: 'https://example.com',
				period: '2021 — 2023',
				location: 'São Paulo, Brazil',
				summary: 'Built responsive web applications, working closely with product and design teams across the full lifecycle.',
				highlights: [
					'Created accessible and responsive user interfaces consuming REST & GraphQL endpoints.',
					'Refactored legacy modules increasing test coverage to 85%.'
				],
				skills: ['React', 'TypeScript', 'Python', 'TailwindCSS']
			}
		]
	},
	projects: {
		kicker: 'Portfolio',
		title: 'Featured Projects',
		contactLink: 'Want to talk about a project?',
		tagsLabel: 'Project tags',
		items: [
			{
				id: 'proj-1',
				name: '[Project Name 1]',
				type: 'Full-Stack Web Application',
				description: 'Comprehensive platform built to streamline user workflows and provide real-time data insights.',
				tags: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
				featured: true,
				links: [
					{ label: 'Live Demo', href: 'https://example.com/demo1' },
					{ label: 'GitHub Repository', href: 'https://github.com/your-username/project-1' }
				]
			},
			{
				id: 'proj-2',
				name: '[Project Name 2]',
				type: 'Serverless API & Microservice',
				description: 'High-performance distributed service for asynchronous task processing with observability and tracing.',
				tags: ['Node.js', 'AWS Lambda', 'DynamoDB', 'Docker'],
				featured: false,
				links: [
					{ label: 'Documentation', href: 'https://example.com/docs' },
					{ label: 'GitHub Repository', href: 'https://github.com/your-username/project-2' }
				]
			},
			{
				id: 'proj-3',
				name: '[Project Name 3]',
				type: 'Open Source CLI Tool',
				description: 'Command line utility designed to accelerate developer environment setup and code linting.',
				tags: ['Rust', 'CLI', 'Open Source'],
				featured: false,
				links: [
					{ label: 'GitHub Repository', href: 'https://github.com/your-username/project-3' }
				]
			}
		]
	},
	contact: {
		kicker: 'Contact',
		title: 'Let’s Connect',
		description: 'I am always open to discussing new opportunities, collaborating on innovative projects, or sharing ideas.',
		emailCta: 'Send an Email',
		emailLabel: 'Direct Email',
		socialLabel: 'Social Networks'
	},
	footer: {
		copyright: `© ${new Date().getFullYear()} [Your Name]. All rights reserved.`,
		credit: 'Engineered with SvelteKit & TypeScript.',
		backToTop: 'Back to top'
	}
};
