export type SupportedLanguage = 'pt' | 'en';

export interface SocialLinks {
	linkedin?: string;
	github?: string;
	twitter?: string;
	instagram?: string;
	youtube?: string;
	[key: string]: string | undefined;
}

export interface Profile {
	name: string;
	role: string;
	email: string;
	location: string;
	summary: string;
	socialLinks: SocialLinks;
}

export interface NavItem {
	label: string;
	href: string;
	isExternal?: boolean;
}

export interface HeroContent {
	kicker: string;
	primaryAction: string;
	secondaryAction: string;
	actionsLabel: string;
	cardLabel: string;
	cardValue: string;
	cardAriaLabel: string;
	imageAlt: string;
	imagePlaceholderSrc?: string;
}

export interface HighlightItem {
	label: string;
	value: string;
}

export interface SkillGroup {
	title: string;
	skills: string[];
}

export interface AboutContent {
	kicker: string;
	title: string;
	paragraphs: string[];
	highlights: HighlightItem[];
	skillsLabel: string;
	skillGroups: SkillGroup[];
}

export interface ExperienceItem {
	id: string;
	role: string;
	company: string;
	companyLogoText?: string;
	companyLogoSrc?: string;
	companyLogoAlt?: string;
	website?: string;
	period: string;
	location: string;
	summary: string;
	highlights?: string[];
	skills?: string[];
}

export interface ExperienceContent {
	kicker: string;
	title: string;
	items: ExperienceItem[];
}

export interface ProjectLink {
	label: string;
	href: string;
}

export interface ProjectItem {
	id: string;
	name: string;
	type: string;
	description: string;
	tags: string[];
	links?: ProjectLink[];
	featured?: boolean;
	thumbnailPlaceholder?: string;
}

export interface ProjectsContent {
	kicker: string;
	title: string;
	contactLink: string;
	tagsLabel: string;
	items: ProjectItem[];
}

export interface ContactContent {
	kicker: string;
	title: string;
	description: string;
	emailCta: string;
	emailLabel: string;
	socialLabel: string;
}

export interface FooterContent {
	copyright: string;
	credit: string;
	backToTop: string;
}

export interface SeoContent {
	title: string;
	description: string;
	siteName: string;
	keywords?: string[];
}

export interface PortfolioData {
	lang: SupportedLanguage;
	htmlLang: string;
	seo: SeoContent;
	navItems: NavItem[];
	profile: Profile;
	hero: HeroContent;
	about: AboutContent;
	experience: ExperienceContent;
	projects: ProjectsContent;
	contact: ContactContent;
	footer: FooterContent;
}
