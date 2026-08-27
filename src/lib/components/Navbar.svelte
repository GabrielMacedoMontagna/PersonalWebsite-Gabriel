<script lang="ts">
	import type { NavItem, SupportedLanguage } from '$lib/types/portfolio';

	let {
		name = 'Portfólio',
		items = [],
		currentLang = 'pt'
	}: {
		name?: string;
		items?: NavItem[];
		currentLang?: SupportedLanguage;
	} = $props();

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="navbar">
	<div class="container nav-content">
		<a href="#{currentLang === 'pt' ? 'home' : 'home'}" class="brand" onclick={closeMobileMenu}>
			<span class="brand-badge">&lt;/&gt;</span>
			<span class="brand-name">{name}</span>
		</a>

		<nav class="nav-links desktop-only" aria-label="Navegação principal">
			{#each items as item}
				<a href={item.href} class="nav-link">{item.label}</a>
			{/each}
		</nav>

		<div class="nav-actions">
			<div class="lang-switcher" aria-label="Seletor de idioma">
				<a
					href="/pt/"
					class="lang-btn {currentLang === 'pt' ? 'active' : ''}"
					aria-label="Versão em Português"
				>
					PT
				</a>
				<span class="lang-divider">/</span>
				<a
					href="/en/"
					class="lang-btn {currentLang === 'en' ? 'active' : ''}"
					aria-label="English version"
				>
					EN
				</a>
			</div>

			<button
				class="mobile-toggle"
				onclick={toggleMobileMenu}
				aria-label="Abrir menu de navegação"
				aria-expanded={mobileMenuOpen}
			>
				<span class="hamburger-line {mobileMenuOpen ? 'open' : ''}"></span>
			</button>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="mobile-menu">
			<nav class="mobile-nav-links">
				{#each items as item}
					<a href={item.href} class="mobile-nav-link" onclick={closeMobileMenu}>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(10, 14, 26, 0.85);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-subtle);
		padding: 1rem 0;
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-weight: 700;
		font-size: 1.15rem;
		color: var(--text-primary);
	}

	.brand-badge {
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		color: var(--text-accent);
		font-family: var(--font-mono);
		font-size: 0.85rem;
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-link {
		color: var(--text-secondary);
		font-size: 0.95rem;
		font-weight: 500;
		transition: color var(--transition);
	}

	.nav-link:hover {
		color: var(--text-accent);
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.lang-switcher {
		display: inline-flex;
		align-items: center;
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-full);
		padding: 0.25rem 0.6rem;
		font-size: 0.8rem;
		font-weight: 700;
		font-family: var(--font-mono);
	}

	.lang-btn {
		color: var(--text-muted);
		padding: 0.15rem 0.35rem;
		border-radius: var(--radius-sm);
		transition: color var(--transition);
	}

	.lang-btn.active {
		color: var(--text-accent);
	}

	.lang-divider {
		color: var(--border-subtle);
		margin: 0 0.1rem;
	}

	.mobile-toggle {
		display: none;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		color: var(--text-primary);
	}

	.mobile-menu {
		display: none;
		background: var(--bg-secondary);
		border-bottom: 1px solid var(--border-subtle);
		padding: 1.5rem;
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.mobile-nav-link {
		font-size: 1.1rem;
		color: var(--text-secondary);
	}

	@media (max-width: 768px) {
		.desktop-only {
			display: none;
		}

		.mobile-toggle {
			display: block;
		}

		.mobile-menu {
			display: block;
		}
	}
</style>
