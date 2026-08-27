import type { PortfolioData } from '../types/portfolio';

export const ptData: PortfolioData = {
	lang: 'pt',
	htmlLang: 'pt-BR',
	seo: {
		title: '[Seu Nome] | [Seu Cargo / Especialidade]',
		description: 'Portfólio profissional e currículo online de [Seu Nome]. Especialista em desenvolvimento de software, arquitetura e soluções tecnológicas.',
		siteName: '[Seu Nome]',
		keywords: ['Software Engineer', 'Developer', 'Portfólio', 'Tech', 'TypeScript', 'SvelteKit']
	},
	profile: {
		name: '[Seu Nome Completo]',
		role: '[Seu Cargo / Área de Atuação]',
		email: 'seu-email@exemplo.com',
		location: 'São Paulo, Brasil',
		summary: 'Desenvolvedor focado na construção de produtos digitais robustos, eficientes e escaláveis. Apaixonado por código limpo, boa arquitetura e soluções inovadoras.',
		socialLinks: {
			linkedin: 'https://linkedin.com/in/seu-usuario',
			github: 'https://github.com/seu-usuario',
			twitter: 'https://twitter.com/seu-usuario'
		}
	},
	navItems: [
		{ label: 'Início', href: '#home' },
		{ label: 'Sobre', href: '#about' },
		{ label: 'Experiência', href: '#experience' },
		{ label: 'Projetos', href: '#projects' },
		{ label: 'Contato', href: '#contact' }
	],
	hero: {
		kicker: 'Disponível para novos projetos e oportunidades',
		primaryAction: 'Ver Projetos',
		secondaryAction: 'Entrar em Contato',
		actionsLabel: 'Ações principais',
		cardLabel: 'Stack deste site',
		cardValue: 'SvelteKit • TypeScript • CSS Moderno',
		cardAriaLabel: 'Resumo técnico do projeto',
		imageAlt: 'Foto de perfil ou imagem ilustrativa de trabalho',
		imagePlaceholderSrc: '/images/hero-placeholder.svg'
	},
	about: {
		kicker: 'Sobre',
		title: 'Sobre Mim',
		paragraphs: [
			'Olá! Sou um engenheiro de software focado em transformar problemas complexos em produtos digitais elegantes, performáticos e sustentáveis.',
			'Tenho experiência no desenvolvimento de sistemas ponta a ponta, combinando arquitetura sólida no backend com interfaces limpas, ágeis e acessíveis no frontend.',
			'Estou sempre em constante aprendizado, explorando novas tecnologias e melhores práticas de engenharia de software para entregar valor consistente.'
		],
		highlights: [
			{ label: 'Foco Principal', value: 'Engenharia de Software & Arquitetura' },
			{ label: 'Metodologia', value: 'Código Limpo, CI/CD & Automação' },
			{ label: 'Valores', value: 'Performance, Acessibilidade e Segurança' }
		],
		skillsLabel: 'Habilidades & Tecnologias',
		skillGroups: [
			{
				title: 'Linguagens & Core',
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
				title: 'Ferramentas & Práticas',
				skills: ['Git / GitHub Actions', 'CI/CD', 'Testes Automatizados', 'Linux', 'IaC']
			}
		]
	},
	experience: {
		kicker: 'Trajetória',
		title: 'Experiência Profissional',
		items: [
			{
				id: 'exp-1',
				role: 'Engenheiro de Software Sênior / Pleno',
				company: '[Nome da Empresa Atual]',
				companyLogoText: 'EA',
				website: 'https://exemplo.com',
				period: '2023 — Presente',
				location: 'Remoto / Híbrido',
				summary: 'Atuação no desenvolvimento e manutenção de plataformas escaláveis, com foco em alta disponibilidade e performance.',
				highlights: [
					'Liderança técnica no desenho de arquitetura de microsserviços.',
					'Implementação de pipelines de integração contínua (CI/CD) reduzindo o tempo de deploy.',
					'Otimização de rotas e banco de dados, melhorando o tempo de resposta em 40%.'
				],
				skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
			},
			{
				id: 'exp-2',
				role: 'Desenvolvedor de Software',
				company: '[Nome da Empresa Anterior]',
				companyLogoText: 'EB',
				website: 'https://exemplo.com',
				period: '2021 — 2023',
				location: 'São Paulo, SP',
				summary: 'Criação de soluções web completas, participando ativamente do ciclo de vida de desenvolvimento de software.',
				highlights: [
					'Desenvolvimento de interfaces modernas e responsivas consumindo APIs REST/GraphQL.',
					'Refatoração de código legado aumentando a cobertura de testes automatizados para 85%.'
				],
				skills: ['React', 'TypeScript', 'Python', 'TailwindCSS']
			}
		]
	},
	projects: {
		kicker: 'Portfólio',
		title: 'Projetos em Destaque',
		contactLink: 'Quer conversar sobre um projeto?',
		tagsLabel: 'Tags do projeto',
		items: [
			{
				id: 'proj-1',
				name: '[Nome do Projeto 1]',
				type: 'Aplicação Web Full-Stack',
				description: 'Plataforma completa desenvolvida para automatizar processos e oferecer métricas em tempo real aos usuários.',
				tags: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'TailwindCSS'],
				featured: true,
				links: [
					{ label: 'Demo Online', href: 'https://exemplo.com/demo1' },
					{ label: 'Código no GitHub', href: 'https://github.com/seu-usuario/projeto-1' }
				]
			},
			{
				id: 'proj-2',
				name: '[Nome do Projeto 2]',
				type: 'API & Infraestrutura Serverless',
				description: 'Serviço de alta performance para processamento distribuído de dados com monitoramento e observabilidade integrados.',
				tags: ['Node.js', 'AWS Lambda', 'DynamoDB', 'Docker'],
				featured: false,
				links: [
					{ label: 'Documentação', href: 'https://exemplo.com/docs' },
					{ label: 'Código no GitHub', href: 'https://github.com/seu-usuario/projeto-2' }
				]
			},
			{
				id: 'proj-3',
				name: '[Nome do Projeto 3]',
				type: 'Biblioteca Open Source / CLI',
				description: 'Ferramenta de linha de comando para acelerar o setup e linting de projetos de desenvolvimento.',
				tags: ['Rust', 'CLI', 'Open Source'],
				featured: false,
				links: [
					{ label: 'Repositório GitHub', href: 'https://github.com/seu-usuario/projeto-3' }
				]
			}
		]
	},
	contact: {
		kicker: 'Contato',
		title: 'Vamos Conversar?',
		description: 'Estou sempre aberto a trocar ideias, colaborar em projetos desafiadores ou discutir novas oportunidades.',
		emailCta: 'Enviar um E-mail',
		emailLabel: 'E-mail direto',
		socialLabel: 'Redes Sociais'
	},
	footer: {
		copyright: `© ${new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.`,
		credit: 'Construído com SvelteKit & TypeScript.',
		backToTop: 'Voltar ao topo'
	}
};
