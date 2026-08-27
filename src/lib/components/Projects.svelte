<script lang="ts">
	import type { ProjectsContent } from '$lib/types/portfolio';

	let {
		content
	}: {
		content: ProjectsContent;
	} = $props();
</script>

<section class="section projects-section" id="projects">
	<div class="container">
		<div class="projects-header">
			<div>
				<span class="kicker">{content.kicker}</span>
				<h2 class="section-title">{content.title}</h2>
			</div>
			<a href="#contact" class="header-link">{content.contactLink} →</a>
		</div>

		<div class="projects-grid">
			{#each content.items as project}
				<article class="project-card card {project.featured ? 'featured' : ''}">
					<div class="project-header">
						<span class="project-type">{project.type}</span>
						{#if project.featured}
							<span class="featured-badge">{content.featuredLabel || 'Featured'}</span>
						{/if}
					</div>

					<h3 class="project-name">{project.name}</h3>
					<p class="project-desc">{project.description}</p>

					<div class="project-tags" aria-label={content.tagsLabel}>
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>

					{#if project.links && project.links.length > 0}
						<div class="project-links">
							{#each project.links as link}
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									class="project-link"
								>
									{link.label}
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
									</svg>
								</a>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
		flex-wrap: wrap;
	}

	.header-link {
		color: var(--text-accent);
		font-weight: 500;
		font-size: 0.95rem;
		transition: transform var(--transition);
		margin-bottom: 1.75rem;
	}

	.header-link:hover {
		transform: translateX(4px);
		text-decoration: underline;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 1.75rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project-card.featured {
		border-color: rgba(56, 189, 248, 0.35);
		background: linear-gradient(180deg, rgba(19, 29, 51, 0.85) 0%, rgba(15, 23, 42, 0.75) 100%);
	}

	.project-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.project-type {
		font-size: 0.8rem;
		font-family: var(--font-mono);
		color: var(--text-accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.featured-badge {
		background: rgba(56, 189, 248, 0.15);
		color: var(--text-accent);
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		padding: 0.2rem 0.5rem;
		border-radius: var(--radius-sm);
	}

	.project-name {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.project-desc {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.65;
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1.5rem;
	}

	.project-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-subtle);
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-primary);
		transition: color var(--transition);
	}

	.project-link:hover {
		color: var(--text-accent);
	}

	@media (max-width: 640px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
