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
	<div class="container hero-container">
		<div class="hero-main">
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

			<div class="hero-media">
				<div class="image-frame">
					<img
						src={content.imagePlaceholderSrc || '/images/hero-placeholder.svg'}
						alt={content.imageAlt}
						class="hero-img"
						loading="eager"
					/>
					<div class="image-glow"></div>
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
		</div>
	</div>
</section>

<style>
	.hero-section {
		padding: 5rem 0 4rem;
		position: relative;
	}

	.hero-main {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3.5rem;
		align-items: center;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
	}

	.hero-name {
		font-size: 3.25rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.15;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.hero-role {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--text-accent);
		margin-bottom: 1.25rem;
	}

	.hero-summary {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 2rem;
		max-width: 600px;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.hero-media {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-frame {
		position: relative;
		width: 100%;
		max-width: 420px;
		border-radius: var(--radius-lg);
		overflow: hidden;
		border: 1px solid var(--border-card);
		background: var(--bg-surface);
		box-shadow: var(--shadow-lg);
	}

	.hero-img {
		width: 100%;
		height: auto;
		object-fit: cover;
		aspect-ratio: 4 / 3;
	}

	.image-glow {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, transparent 60%, rgba(10, 14, 26, 0.8) 100%);
		pointer-events: none;
	}

	.hero-card {
		position: absolute;
		bottom: -1.75rem;
		right: 0rem;
		display: flex;
		align-items: flex-start;
		gap: 0.85rem;
		background: rgba(19, 29, 51, 0.9);
		backdrop-filter: blur(16px);
		border: 1px solid var(--border-active);
		border-radius: var(--radius-md);
		padding: 1rem 1.25rem;
		box-shadow: var(--shadow-md);
		max-width: 280px;
	}

	.card-status-dot {
		width: 10px;
		height: 10px;
		background: #22c55e;
		border-radius: 50%;
		box-shadow: 0 0 10px #22c55e;
		margin-top: 0.35rem;
		flex-shrink: 0;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.card-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.card-value {
		font-size: 0.875rem;
		color: var(--text-primary);
		font-weight: 600;
	}

	.card-location {
		font-size: 0.775rem;
		color: var(--text-accent);
	}

	@media (max-width: 900px) {
		.hero-main {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.hero-name {
			font-size: 2.5rem;
		}

		.hero-media {
			order: -1;
		}

		.hero-card {
			position: static;
			margin-top: 1rem;
			width: 100%;
			max-width: 100%;
		}
	}
</style>
