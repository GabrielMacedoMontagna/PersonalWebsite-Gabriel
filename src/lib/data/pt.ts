import type { PortfolioData } from '../types/portfolio';

export const ptData: PortfolioData = {
	lang: 'pt',
	htmlLang: 'pt-BR',
	seo: {
		title: 'Gabriel Montagna | Engenheiro de IA & Eng. de Computação',
		description:
			'Portfólio profissional e currículo de Gabriel de Macedo Cavassani Montagna. Engenheiro de IA com foco em plataformas GenAI corporativas, infraestruturas em nuvem (AWS/GCP), Engenharia de Dados e pesquisa em Machine Learning.',
		siteName: 'Gabriel Montagna',
		keywords: [
			'Gabriel Montagna',
			'Gabriel de Macedo Cavassani Montagna',
			'Engenheiro de IA',
			'AI Engineer',
			'IA Generativa',
			'Machine Learning',
			'Engenharia de Dados',
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
		role: 'Engenheiro de IA & Graduando em Eng. de Computação',
		email: 'gabrielmacedomontagna@hotmail.com',
		phone: '+55 (16) 98145-8548',
		location: 'Campinas, Brasil',
		summary:
			'Engenheiro de IA dedicado, combinando experiência prática em plataformas corporativas de GenAI, infraestrutura em nuvem (AWS/Google Cloud) e Engenharia de Dados na Aleon com formação de pesquisa de ponta pela Unicamp e MBZUAI, em Abu Dhabi. Busco aplicar conhecimentos avançados em Python, design de sistemas e Machine Learning para construir modelos de IA robustos e prontos para produção, além de arquiteturas inteligentes de ponta a ponta.',
		socialLinks: {
			linkedin: 'https://www.linkedin.com/in/gabriel-montagna-15083025a/',
			github: 'https://github.com/GabrielMacedoMontagna'
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
		kicker: 'Engenheiro de IA • Dados & GenAI • Pesquisador',
		primaryAction: 'Ver Projetos',
		secondaryAction: 'Entrar em Contato',
		actionsLabel: 'Ações principais',
		cardLabel: 'Foco Atual',
		cardValue: 'GenAI Corporativa • Plataformas em Nuvem • ML & Robótica',
		cardAriaLabel: 'Resumo do foco técnico',
		imageAlt: 'Foto de perfil de Gabriel Montagna',
		imagePlaceholderSrc: '/images/ProfilePic2.jpeg'
	},
	about: {
		kicker: 'Sobre',
		title: 'Sobre Mim',
		paragraphs: [
			'Sou Engenheiro de IA e graduando em Engenharia de Computação pela Unicamp (atualmente 17º colocado entre 101 alunos da turma, com CR/GPA de 0,8780/1,0 — 3.5/4.0), com foco em construir modelos de inteligência artificial robustos, prontos para produção e arquiteturas inteligentes escaláveis.',
			'Na Aleon, atuo no desenvolvimento de plataformas corporativas de Inteligência Artificial Generativa e na otimização de soluções em Engenharia de Dados e Nuvem (AWS e Google Cloud), transformando arquiteturas complexas em automações inteligentes de alto retorno sobre investimento (ROI).',
			'Minha trajetória une pesquisa científica de alto nível e engenharia de software aplicada — incluindo fellowship internacional com bolsa integral no MBZUAI em Abu Dhabi (UGRIP 2026) em Deep Learning e Robótica, pesquisa em síntese de dados IMU na FEEC/Unicamp (Grupo AIMS), formação no Apple Developer Academy e engenharia de middleware no Instituto de Pesquisas Eldorado.'
		],
		highlights: [
			{ label: 'Formação', value: 'Engenharia de Computação — Unicamp (2023 - 2027)' },
			{ label: 'Desempenho Acadêmico', value: '17º/101 da turma • CR 0,8780 (3.5/4.0)' },
			{ label: 'Bolsa Internacional', value: 'Fellow UGRIP 2026 — MBZUAI (Abu Dhabi)' },
			{ label: 'Idiomas', value: 'Inglês (IELTS 8.0) • Espanhol • Português' }
		],
		skillsLabel: 'Habilidades & Tecnologias',
		skillGroups: [
			{
				title: 'Linguagens de Programação',
				skills: ['Python (Avançado)', 'Terraform', 'C', 'Java', 'Assembly RISC-V', 'Swift', 'TypeScript', 'SQL']
			},
			{
				title: 'Inteligência Artificial & ML',
				skills: ['IA Generativa', 'Deep Learning', 'Redes Neurais (RNNs)', 'Processamento de Sinais Multimodais', 'Síntese de Dados IMU', 'Robótica']
			},
			{
				title: 'Nuvem & DevOps',
				skills: ['AWS', 'Google Cloud', 'Docker', 'Sistemas Linux', 'Git', 'CI/CD', 'IaC (Terraform)']
			},
			{
				title: 'Sistemas & Engenharia de Dados',
				skills: ['Engenharia de Dados', 'System Design', 'MQTT', 'SQLite', 'PostgreSQL', 'Integração de Middleware']
			},
			{
				title: 'Idiomas',
				skills: ['Inglês (Avançado - IELTS 8.0)', 'Espanhol (Intermediário)', 'Português (Nativo)']
			}
		]
	},
	experience: {
		kicker: 'Carreira & Pesquisa',
		title: 'Experiência Profissional e de Pesquisa',
		items: [
			{
				id: 'exp-aleon',
				role: 'Estagiário de Engenharia de IA',
				company: 'Aleon',
				companyLogoText: 'AL',
				website: 'https://aleon.com.br',
				period: 'Jul/2026 — Presente',
				location: 'Remoto',
				summary:
					'Selecionado para integrar equipe técnica especializada na Aleon, empresa inovadora focada em resolver desafios de negócios complexos por meio de Inteligência Artificial aplicada.',
				highlights: [
					'Atuação em projetos corporativos de IA de alto impacto, com foco no desenvolvimento e otimização de soluções proprietárias em Engenharia de Dados e IA Generativa.',
					'Contribuição na implementação de plataformas de IA escaláveis para grandes players da indústria utilizando infraestruturas de nuvem como AWS e Google Cloud.',
					'Apoio na tradução de arquiteturas de dados complexas em insights de negócios acionáveis e automações inteligentes, impactando diretamente a eficiência operacional e o ROI dos clientes.'
				],
				skills: ['IA Generativa', 'Engenharia de Dados', 'AWS', 'Google Cloud', 'Python', 'System Design']
			},
			{
				id: 'exp-mbzuai',
				role: 'Estagiário de Pesquisa (UGRIP 2026)',
				company: 'MBZUAI (Mohamed bin Zayed University of AI)',
				companyLogoText: 'MB',
				website: 'https://mbzuai.ac.ae',
				period: 'Jun/2026 — Jul/2026',
				location: 'Abu Dhabi, Emirados Árabes Unidos',
				summary:
					'Selecionado para o UGRIP 2026 (Undergraduate Research Internship Program), programa altamente competitivo de fellowship global em uma das principais instituições de IA do mundo.',
				highlights: [
					'Desenvolvimento de pesquisa de alto impacto em IA sob mentoria de corpo docente de renome mundial, com foco em Machine Learning avançado e Robótica.',
					'Contribuição em projetos na interseção de Deep Learning e Processamento de Sinais Multimodais.',
					'Contemplado com bolsa de pesquisa integral (fully funded), cobrindo todos os custos do programa com base em mérito acadêmico.'
				],
				skills: ['Deep Learning', 'Machine Learning', 'Robótica', 'Processamento de Sinais Multimodais', 'Python']
			},
			{
				id: 'exp-feec',
				role: 'Pesquisador de Iniciação Científica',
				company: 'FEEC — Unicamp (Grupo AIMS)',
				companyLogoText: 'UN',
				website: 'https://www.feec.unicamp.br',
				period: 'Ago/2025 — Ago/2026',
				location: 'Campinas, SP',
				summary:
					'Membro do grupo de pesquisa AIMS (Artificial Intelligence for Multimodal Signal Processing) na Faculdade de Engenharia Elétrica e de Computação da Unicamp.',
				highlights: [
					'Condução de pesquisa científica de graduação sobre abordagens baseadas em Machine Learning para síntese de dados de sensores IMU (unidades de medição inercial) no contexto de robótica autônoma.',
					'Investigação de modelos de redes neurais para geração e aumento de dados de sinais de sensores multimodais.'
				],
				skills: ['Machine Learning', 'Síntese de Dados IMU', 'Robótica Autônoma', 'Processamento de Sinais', 'Python', 'Redes Neurais (RNNs)']
			},
			{
				id: 'exp-apple',
				role: 'Bolsista em Desenvolvimento de Software',
				company: 'Apple Developer Academy | Campinas',
				companyLogoText: 'AP',
				website: 'https://developer.apple.com',
				period: 'Fev/2025 — Ago/2025',
				location: 'Campinas, SP',
				summary:
					'Selecionado para a turma 25/26 de capacitação em desenvolvimento de software em parceria com a Apple.',
				highlights: [
					'Imersão profunda no processo criativo proprietário da Apple e metodologias de resolução de problemas baseadas em desafios (Challenge-Based Learning - CBL).',
					'Desenvolvimento de proficiência em Swift e no ecossistema de desenvolvimento iOS, criando aplicações robustas e focadas na experiência do usuário.'
				],
				skills: ['Swift', 'Ecossistema iOS', 'Challenge-Based Learning', 'Engenharia de Software', 'System Design']
			},
			{
				id: 'exp-eldorado',
				role: 'Estagiário de Férias — Depto. de Design de Hardware (DHD)',
				company: 'Instituto de Pesquisas Eldorado',
				companyLogoText: 'EL',
				website: 'https://www.eldorado.org.br',
				period: 'Jan/2025 — Mar/2025',
				location: 'Campinas, SP',
				summary:
					'Estágio no Departamento de Design de Hardware (DHD), construindo soluções de middleware e comunicação para dados de medição em eletrônica de potência.',
				highlights: [
					'Construção de middleware em Python para integrar dados de medição de Eletrônica de Potência a uma interface de usuário.',
					'Implementação e deploy de protocolo MQTT utilizando contêineres Docker e gerenciamento/manipulação de banco de dados SQLite.'
				],
				skills: ['Python', 'MQTT', 'Docker', 'SQLite', 'Middleware', 'Sistemas Linux']
			}
		]
	},
	projects: {
		kicker: 'Portfólio & Pesquisa',
		title: 'Projetos em Destaque & Pesquisa',
		contactLink: 'Quer conversar sobre um projeto?',
		tagsLabel: 'Tags do projeto',
		featuredLabel: 'Destaque',
		items: [
			{
				id: 'proj-imu-robotics',
				name: 'Síntese de Dados IMU para Robótica Autônoma',
				type: 'Pesquisa em IA & Robótica',
				description:
					'Sistema de pesquisa baseado em Machine Learning desenvolvido na FEEC/Unicamp (Grupo AIMS) para síntese de dados de sensores inerciais (IMU), acelerando o treinamento e simulação em robótica autônoma.',
				tags: ['Python', 'Machine Learning', 'Robótica', 'Processamento de Sinais', 'Redes Neurais (RNNs)'],
				featured: true,
				links: [
					{ label: 'Perfil no GitHub', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-enterprise-genai',
				name: 'Plataforma Corporativa de GenAI & Nuvem',
				type: 'Nuvem & IA Generativa',
				description:
					'Arquitetura corporativa ponta a ponta desenvolvida na Aleon, integrando modelos de linguagem (LLMs), pipelines de dados e microsserviços escaláveis em AWS e Google Cloud.',
				tags: ['IA Generativa', 'AWS', 'Google Cloud', 'Terraform', 'Python', 'Engenharia de Dados'],
				featured: true,
				links: [
					{ label: 'Perfil no GitHub', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-eldorado-middleware',
				name: 'Middleware de Telemetria para Eletrônica de Potência',
				type: 'Sistemas & Middleware IoT',
				description:
					'Middleware em Python construído no Instituto de Pesquisas Eldorado para conectar telemetria de hardware a dashboards web via broker MQTT em Docker e persistência em SQLite.',
				tags: ['Python', 'Docker', 'MQTT', 'SQLite', 'Linux', 'System Design'],
				featured: true,
				links: [
					{ label: 'Perfil no GitHub', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			},
			{
				id: 'proj-multimodal-dl',
				name: 'Pesquisa em Deep Learning Multimodal & Robótica',
				type: 'Pesquisa / Fellowship MBZUAI',
				description:
					'Projeto de pesquisa desenvolvido durante o fellowship UGRIP 2026 no MBZUAI (Abu Dhabi), explorando redes neurais profundas, sinais multimodais e percepção robótica.',
				tags: ['Deep Learning', 'IA Multimodal', 'Robótica', 'Python', 'PyTorch'],
				featured: false,
				links: [
					{ label: 'Perfil no GitHub', href: 'https://github.com/GabrielMacedoMontagna' }
				]
			}
		]
	},
	contact: {
		kicker: 'Contato',
		title: 'Vamos Conversar?',
		description:
			'Estou sempre aberto a discutir novas oportunidades em Engenharia de IA, pesquisa em Machine Learning, arquiteturas em nuvem corporativas ou parcerias e projetos inovadores.',
		emailCta: 'Enviar um E-mail',
		emailLabel: 'E-mail direto',
		phoneCta: 'Ligar / WhatsApp',
		phoneLabel: 'Telefone & WhatsApp',
		socialLabel: 'Redes Sociais'
	},
	footer: {
		copyright: `© ${new Date().getFullYear()} Gabriel Montagna. Todos os direitos reservados.`,
		credit: 'Construído com SvelteKit & TypeScript.',
		backToTop: 'Voltar ao topo'
	}
};
