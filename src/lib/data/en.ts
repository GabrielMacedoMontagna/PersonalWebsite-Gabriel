import type { PortfolioData } from '../types/portfolio';

export const enData: PortfolioData = {
	lang: 'en',
	htmlLang: 'en',
	seo: {
		title: 'Gabriel Montagna | AI Engineer & Computer Engineering',
		description:
			'Online resume and portfolio of Gabriel de Macedo Cavassani Montagna. AI Engineer specializing in enterprise GenAI platforms, cloud infrastructures (AWS/GCP), Data Engineering, and ML research.',
		siteName: 'Gabriel Montagna',
		keywords: [
			'Gabriel Montagna',
			'Gabriel de Macedo Cavassani Montagna',
			'AI Engineer',
			'Generative AI',
			'Machine Learning',
			'Data Engineering',
			'Unicamp',
			'MBZUAI',
			'Aleon',
			'Python',
			'AWS',
			'Google Cloud'
		]
	},
	profile: {
		name: 'Gabriel Montagna',
		role: 'AI Engineer & Computer Engineering Student',
		email: 'gabrielmacedomontagna@hotmail.com',
		phone: '+55 (16) 98145-8548',
		location: 'Campinas, Brazil',
		summary:
			'Driven AI Engineer combining hands-on experience in enterprise GenAI platforms, cloud infrastructures (AWS/Google Cloud), and Data Engineering at Aleon with elite research training from Unicamp and MBZUAI, in Abu Dhabi. Seeking to apply advanced skills in Python, system design, and Machine Learning to build robust, production-ready AI models and end-to-end intelligent architectures.',
		socialLinks: {
			linkedin: 'https://www.linkedin.com/in/gabriel-montagna-15083025a/',
			github: 'https://github.com/GabrielMacedoMontagna'
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
		kicker: 'AI Engineer • GenAI & Data • Researcher',
		primaryAction: 'View Projects',
		secondaryAction: 'Get in Touch',
		actionsLabel: 'Primary actions',
		cardLabel: 'Current Focus',
		cardValue: 'Enterprise GenAI • Cloud Platforms • ML & Robotics',
		cardAriaLabel: 'Technical focus summary',
		imageAlt: 'Profile picture of Gabriel Montagna',
		imagePlaceholderSrc: '/images/ProfilePic2.jpeg'
	},
	about: {
		kicker: 'About',
		title: 'About Me',
		paragraphs: [
			'I am an AI Engineer and Computer Engineering undergraduate at Unicamp (currently ranked 17th out of 101 students with a GPA of 0.8780/1.0 — 3.5/4.0), dedicated to building robust, production-ready AI models and end-to-end intelligent architectures.',
			'At Aleon, I engineer enterprise-grade Generative AI platforms and optimize proprietary solutions across Data Engineering and Cloud Infrastructures (AWS and Google Cloud), delivering scalable intelligent automations and high-impact business value.',
			'My experience bridges cutting-edge academic research and production software engineering — including a fully funded global fellowship at MBZUAI in Abu Dhabi (UGRIP 2026) focusing on Deep Learning & Robotics, IMU sensor data synthesis at FEEC/Unicamp (AIMS Group), software development at Apple Developer Academy, and power electronics middleware at the Eldorado Research Institute.'
		],
		highlights: [
			{ label: 'Education', value: 'B.S. in Computer Engineering — Unicamp (2023 - 2027)' },
			{ label: 'Academic Standing', value: 'Ranked 17th / 101 • GPA: 0.8780 (3.5/4.0)' },
			{ label: 'Global Fellowship', value: 'UGRIP 2026 Fellow — MBZUAI (Abu Dhabi)' },
			{ label: 'Languages', value: 'English (IELTS 8.0) • Spanish • Portuguese' }
		],
		skillsLabel: 'Skills & Technologies',
		skillGroups: [
			{
				title: 'Programming Languages',
				skills: ['Python (Advanced)', 'Terraform', 'C', 'Java', 'RISC-V Assembly', 'Swift', 'TypeScript', 'SQL']
			},
			{
				title: 'AI & Machine Learning',
				skills: ['Generative AI', 'Deep Learning', 'Neural Networks (RNNs)', 'Multimodal Signal Processing', 'IMU Data Synthesis', 'Robotics']
			},
			{
				title: 'Cloud & DevOps',
				skills: ['AWS', 'Google Cloud', 'Docker', 'Linux-based systems', 'Git', 'CI/CD', 'IaC (Terraform)']
			},
			{
				title: 'Data & Systems Engineering',
				skills: ['Data Engineering', 'System Design', 'MQTT', 'SQLite', 'PostgreSQL', 'Middleware Integration']
			},
			{
				title: 'Languages',
				skills: ['English (Advanced - IELTS 8.0)', 'Spanish (Intermediate)', 'Portuguese (Native)']
			}
		]
	},
	experience: {
		kicker: 'Career & Research',
		title: 'Professional & Research Experience',
		items: [
			{
				id: 'exp-aleon',
				role: 'AI Engineering Intern',
				company: 'Aleon',
				companyLogoText: 'AL',
				website: 'https://aleon.com.br',
				period: 'Jul/2026 — Present',
				location: 'Remote',
				summary:
					'Selected to join a specialized tech team at Aleon, an innovative company focused on solving complex business challenges through applied Artificial Intelligence.',
				highlights: [
					'Engaging in high-impact corporate AI projects, focusing on the development and optimization of proprietary solutions across Data Engineering and Generative AI.',
					'Contributing to the deployment of scalable AI platforms for major industry players utilizing cloud infrastructures like AWS and Google Cloud.',
					'Assisting in translating complex data architectures into actionable business insights and intelligent automations, directly impacting clients\' operational efficiency and driving fast ROI.'
				],
				skills: ['Generative AI', 'Data Engineering', 'AWS', 'Google Cloud', 'Python', 'System Design']
			},
			{
				id: 'exp-mbzuai',
				role: 'Research Intern (UGRIP 2026)',
				company: 'MBZUAI (Mohamed bin Zayed University of AI)',
				companyLogoText: 'MB',
				website: 'https://mbzuai.ac.ae',
				period: 'Jun/2026 — Jul/2026',
				location: 'Abu Dhabi, UAE',
				summary:
					'Selected for the UGRIP 2026 (Undergraduate Research Internship Program), a highly competitive global fellowship at one of the world\'s top-ranked AI institutions.',
				highlights: [
					'Engaging in high-impact AI research under the mentorship of world-renowned faculty, focusing on advanced Machine Learning and Robotics.',
					'Contributing to projects at the intersection of Deep Learning and Multimodal Signal Processing.',
					'Awarded a fully funded research fellowship, covering all program-related costs, based on academic merit.'
				],
				skills: ['Deep Learning', 'Machine Learning', 'Robotics', 'Multimodal Signal Processing', 'Python']
			},
			{
				id: 'exp-feec',
				role: 'Undergraduate Researcher',
				company: 'FEEC — Unicamp (AIMS Group)',
				companyLogoText: 'UN',
				website: 'https://www.feec.unicamp.br',
				period: 'Aug/2025 — Aug/2026',
				location: 'Campinas, Brazil',
				summary:
					'Member of the AIMS (Artificial Intelligence for Multimodal Signal Processing) research group at the School of Electrical and Computer Engineering (FEEC/Unicamp).',
				highlights: [
					'Conducted undergraduate research on machine learning-based approaches for IMU (Inertial Measurement Unit) data synthesis in the context of autonomous robotics.',
					'Investigated neural network architectures for sensor simulation and multimodal signal processing.'
				],
				skills: ['Machine Learning', 'IMU Data Synthesis', 'Autonomous Robotics', 'Signal Processing', 'Python', 'Neural Networks (RNNs)']
			},
			{
				id: 'exp-apple',
				role: 'Software Development Student',
				company: 'Apple Developer Academy | Campinas',
				companyLogoText: 'AP',
				website: 'https://developer.apple.com',
				period: 'Feb/2025 — Aug/2025',
				location: 'Campinas, Brazil',
				summary:
					'Selected for the 25/26 cohort of Software Development students in partnership with Apple.',
				highlights: [
					'Gained deep insights into Apple\'s proprietary creative process and Challenge-Based Learning (CBL) problem-solving methodologies.',
					'Developed proficiency in Swift and iOS ecosystem development, creating user-centric native software applications.'
				],
				skills: ['Swift', 'iOS Ecosystem', 'Challenge-Based Learning', 'Software Engineering', 'System Design']
			},
			{
				id: 'exp-eldorado',
				role: 'Summer Intern — Hardware Design Dept. (DHD)',
				company: 'Eldorado Research Institute',
				companyLogoText: 'EL',
				website: 'https://www.eldorado.org.br',
				period: 'Jan/2025 — Mar/2025',
				location: 'Campinas, Brazil',
				summary:
					'Interned within the Hardware Design Department (DHD), building middleware to bridge Power Electronics measurement systems with user interfaces.',
				highlights: [
					'Built a Python-based middleware to bridge Power Electronics measurement data with a front-end user interface.',
					'Deployed MQTT protocol communication using Docker containers and implemented database management & manipulation using SQLite.'
				],
				skills: ['Python', 'MQTT', 'Docker', 'SQLite', 'Middleware', 'Linux']
			}
		]
	},
	projects: {
		kicker: 'Portfolio & Research',
		title: 'Featured Projects & Research',
		contactLink: 'Want to talk about a project?',
		tagsLabel: 'Project tags',
		featuredLabel: 'Featured',
		items: [
			{
				id: 'proj-imu-robotics',
				name: 'IMU Data Synthesis for Autonomous Robotics',
				type: 'AI & Robotics Research',
				description:
					'Machine learning framework developed at FEEC/Unicamp (AIMS Group) for synthesizing high-fidelity IMU sensor data, accelerating autonomous robotics simulation and perception.',
				tags: ['Python', 'Machine Learning', 'Robotics', 'Signal Processing', 'Neural Networks (RNNs)'],
				featured: true,
				links: [
					{ label: 'GitHub Profile', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-enterprise-genai',
				name: 'Enterprise GenAI & Cloud Intelligence Platform',
				type: 'Cloud & Generative AI',
				description:
					'End-to-end corporate AI architecture developed at Aleon, integrating LLMs, robust data engineering pipelines, and scalable cloud deployments across AWS and Google Cloud.',
				tags: ['Generative AI', 'AWS', 'Google Cloud', 'Terraform', 'Python', 'Data Engineering'],
				featured: true,
				links: [
					{ label: 'GitHub Profile', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-eldorado-middleware',
				name: 'Power Electronics Telemetry Middleware',
				type: 'IoT & Systems Engineering',
				description:
					'Python middleware developed at Eldorado Research Institute bridging power electronics measurement data to web interfaces via Dockerized MQTT broker and SQLite storage.',
				tags: ['Python', 'Docker', 'MQTT', 'SQLite', 'Linux', 'System Design'],
				featured: true,
				links: [
					{ label: 'GitHub Profile', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-multimodal-dl',
				name: 'Multimodal Deep Learning & Robotics Research',
				type: 'Deep Learning Fellowship',
				description:
					'AI research conducted during the UGRIP 2026 fellowship at MBZUAI (Abu Dhabi), exploring advanced neural networks, multimodal signals, and autonomous systems.',
				tags: ['Deep Learning', 'Multimodal AI', 'Robotics', 'Python', 'PyTorch'],
				featured: false,
				links: [
					{ label: 'GitHub Profile', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			}
		]
	},
	contact: {
		kicker: 'Contact',
		title: 'Let’s Connect',
		description:
			'I am always open to discussing new opportunities in AI Engineering, Machine Learning research, enterprise cloud architectures, or innovative collaborations.',
		emailCta: 'Send an Email',
		emailLabel: 'Direct Email',
		phoneCta: 'Call / WhatsApp',
		phoneLabel: 'Phone & WhatsApp',
		socialLabel: 'Social Networks'
	},
	footer: {
		copyright: `© ${new Date().getFullYear()} Gabriel Montagna. All rights reserved.`,
		credit: 'Engineered with SvelteKit & TypeScript.',
		backToTop: 'Back to top'
	}
};
