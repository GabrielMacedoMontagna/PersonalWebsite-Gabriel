<script lang="ts">
	import type { ExperienceContent } from '$lib/types/portfolio';

	let {
		content
	}: {
		content: ExperienceContent;
	} = $props();
</script>

<section class="section experience-section" id="experience">
	<div class="container">
		<span class="kicker">{content.kicker}</span>
		<h2 class="section-title">{content.title}</h2>

		<div class="experience-timeline">
			{#each content.items as exp}
				<article class="experience-card card">
					<div class="card-header">
						<div class="company-info">
							{#if exp.companyLogoSrc}
								<img src={exp.companyLogoSrc} alt={exp.companyLogoAlt || exp.company} class="company-logo-img" />
							{:else}
								<div class="company-logo-placeholder">
									{exp.companyLogoText || exp.company.slice(0, 2).toUpperCase()}
								</div>
							{/if}

							<div class="title-group">
								<h3 class="role-title">{exp.role}</h3>
								<div class="company-meta">
									{#if exp.website}
										<a href={exp.website} target="_blank" rel="noopener noreferrer" class="company-link">
											{exp.company}
											<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
											</svg>
										</a>
									{:else}
										<span class="company-name">{exp.company}</span>
									{/if}
									<span class="separator">•</span>
									<span class="location">{exp.location}</span>
								</div>
							</div>
						</div>

						<div class="period-badge">
							{exp.period}
						</div>
					</div>

					<p class="exp-summary">{exp.summary}</p>

					{#if exp.highlights && exp.highlights.length > 0}
						<ul class="exp-highlights">
							{#each exp.highlights as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}

					{#if exp.skills && exp.skills.length > 0}
						<div class="exp-skills">
							{#each exp.skills as skill}
								<span class="tag">{skill}</span>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.experience-timeline {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		margin-top: 2rem;
	}

	.experience-card {
		position: relative;
	}

	.card-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.company-info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.company-logo-placeholder {
		width: 48px;
		height: 48px;
		background: var(--bg-surface);
		border: 1px solid var(--border-active);
		color: var(--text-accent);
		border-radius: var(--radius-md);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-family: var(--font-mono);
		font-size: 1rem;
		flex-shrink: 0;
	}

	.company-logo-img {
		width: 48px;
		height: 48px;
		object-fit: contain;
		border-radius: var(--radius-md);
		background: #ffffff;
		padding: 4px;
		flex-shrink: 0;
	}

	.title-group {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.role-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.company-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.company-link {
		color: var(--text-accent);
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-weight: 500;
	}

	.company-link:hover {
		text-decoration: underline;
	}

	.separator {
		color: var(--text-muted);
	}

	.period-badge {
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		padding: 0.35rem 0.75rem;
		border-radius: var(--radius-full);
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--text-secondary);
		white-space: nowrap;
	}

	.exp-summary {
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.exp-highlights {
		margin-left: 1.25rem;
		margin-bottom: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		color: var(--text-secondary);
		font-size: 0.95rem;
	}

	.exp-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
	}

	@media (max-width: 640px) {
		.card-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.period-badge {
			align-self: flex-start;
		}
	}
</style>
