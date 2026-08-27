<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data }: { data: PageData } = $props();
	let content = $derived(data.content);
</script>

<svelte:head>
	<title>{content.seo.title}</title>
	<meta name="description" content={content.seo.description} />
	
	<!-- OpenGraph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={content.seo.title} />
	<meta property="og:description" content={content.seo.description} />
	<meta property="og:site_name" content={content.seo.siteName} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={content.seo.title} />
	<meta name="twitter:description" content={content.seo.description} />
	
	<!-- Alternates i18n -->
	<link rel="alternate" hreflang="pt-BR" href="/pt/" />
	<link rel="alternate" hreflang="en" href="/en/" />
	<link rel="alternate" hreflang="x-default" href="/pt/" />
</svelte:head>

<Navbar
	name={content.profile.name}
	items={content.navItems}
	currentLang={content.lang}
/>

<main>
	<Hero content={content.hero} profile={content.profile} />
	<About content={content.about} />
	<Experience content={content.experience} />
	<Projects content={content.projects} />
	<Contact content={content.contact} profile={content.profile} />
</main>

<Footer content={content.footer} profile={content.profile} />
