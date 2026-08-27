<script lang="ts">
	import type { HeroContent, Profile } from '$lib/types/portfolio';

	let {
		content,
		profile
	}: {
		content: HeroContent;
		profile: Profile;
	} = $props();
</script>

<section class="hero-section" id="home">
	<!-- Background image with shaded gradient overlays -->
	<img
		src={content.imagePlaceholderSrc || '/images/hero-placeholder.svg'}
		alt={content.imageAlt}
		class="hero-image"
		loading="eager"
	/>
	<div class="hero-overlay" aria-hidden="true"></div>

	<div class="container hero-container">
		<div class="hero-content">
			<span class="kicker">{content.kicker}</span>
			<h1 class="hero-name">{profile.name}</h1>
			<h2 class="hero-role">{profile.role}</h2>
			<p class="hero-summary">{profile.summary}</p>

			<div class="hero-actions" aria-label={content.actionsLabel}>
				<a href="#projects" class="button primary">
					{content.primaryAction}
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a href="#contact" class="button secondary">
					{content.secondaryAction}
				</a>
			</div>
		</div>

		<aside class="hero-card" aria-label={content.cardAriaLabel}>
			<div class="card-status-dot"></div>
			<div class="card-text">
				<span class="card-label">{content.cardLabel}</span>
				<strong class="card-value">{content.cardValue}</strong>
				<span class="card-location">{profile.location}</span>
			</div>
		</aside>
	</div>
</section>

<style>
	.hero-section {
		position: relative;
		min-height: 85vh;
		display: flex;
		align-items: center;
		padding: 7rem 0 5rem;
		overflow: hidden;
		border-bottom: 1px solid var(--border-subtle);
	}

	.hero-image {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 75% center;
		z-index: 0;
		filter: brightness(0.85) contrast(1.05);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
		background: 
			/* Gradiente Horizontal: opaco à esquerda (atrás do texto) e transparente à direita */
			linear-gradient(90deg, #0a0e1a 0%, rgba(10, 14, 26, 0.96) 38%, rgba(10, 14, 26, 0.6) 65%, rgba(10, 14, 26, 0.2) 100%),
			/* Gradiente Vertical: transição suave para as bordas superior e inferior */
			linear-gradient(180deg, rgba(10, 14, 26, 0.3) 0%, rgba(10, 14, 26, 0.1) 40%, rgba(10, 14, 26, 0.95) 98%);
	}

	.hero-container {
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
	}

	.hero-content {
		max-width: 680px;
	}

	.hero-name {
		font-size: 3.5rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.15;
		color: var(--text-primary);
		margin-bottom: 0.6rem;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
	}

	.hero-role {
		font-size: 1.6rem;
		font-weight: 600;
		color: var(--text-accent);
		margin-bottom: 1.35rem;
		letter-spacing: -0.01em;
	}

	.hero-summary {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.75;
		margin-bottom: 2.25rem;
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
	}

	.hero-card {
		display: flex;
		align-items: flex-start;
		gap: 0.85rem;
		background: rgba(19, 29, 51, 0.85);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-active);
		border-radius: var(--radius-md);
		padding: 1.25rem 1.5rem;
		box-shadow: var(--shadow-lg);
		max-width: 300px;
		margin-left: 2rem;
		flex-shrink: 0;
	}

	.card-status-dot {
		width: 10px;
		height: 10px;
		background: #22c55e;
		border-radius: 50%;
		box-shadow: 0 0 12px #22c55e;
		margin-top: 0.35rem;
		flex-shrink: 0;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.card-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 600;
	}

	.card-value {
		font-size: 0.9rem;
		color: var(--text-primary);
		font-weight: 600;
		line-height: 1.4;
	}

	.card-location {
		font-size: 0.8rem;
		color: var(--text-accent);
		font-weight: 500;
	}

	@media (max-width: 960px) {
		.hero-section {
			min-height: 75vh;
			padding: 5rem 0 3.5rem;
		}

		.hero-image {
			object-position: 65% center;
		}

		.hero-overlay {
			background: 
				linear-gradient(180deg, rgba(10, 14, 26, 0.8) 0%, rgba(10, 14, 26, 0.92) 55%, var(--bg-primary) 98%),
				linear-gradient(90deg, rgba(10, 14, 26, 0.95) 0%, rgba(10, 14, 26, 0.7) 100%);
		}

		.hero-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 2.5rem;
		}

		.hero-name {
			font-size: 2.65rem;
		}

		.hero-role {
			font-size: 1.35rem;
		}

		.hero-card {
			margin-left: 0;
			width: 100%;
			max-width: 100%;
		}
	}
</style>
