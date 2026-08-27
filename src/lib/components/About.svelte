<script lang="ts">
	import type { AboutContent } from '$lib/types/portfolio';

	let {
		content
	}: {
		content: AboutContent;
	} = $props();
</script>

<section class="section about-section" id="about">
	<div class="container">
		<div class="about-grid">
			<div class="about-bio">
				<span class="kicker">{content.kicker}</span>
				<h2 class="section-title">{content.title}</h2>

				<div class="about-paragraphs">
					{#each content.paragraphs as paragraph}
						<p class="about-paragraph">{paragraph}</p>
					{/each}
				</div>

				<div class="highlights-grid" aria-label="Destaques">
					{#each content.highlights as highlight}
						<div class="highlight-card">
							<span class="highlight-label">{highlight.label}</span>
							<strong class="highlight-value">{highlight.value}</strong>
						</div>
					{/each}
				</div>
			</div>

			<div class="about-skills">
				<div class="skills-card">
					<h3 class="skills-heading">{content.skillsLabel}</h3>

					<div class="skill-groups">
						{#each content.skillGroups as group}
							<div class="skill-group">
								<h4 class="skill-group-title">{group.title}</h4>
								<div class="skill-tags">
									{#each group.skills as skill}
										<span class="tag">{skill}</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 3.5rem;
		align-items: start;
	}

	.about-paragraphs {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		margin-bottom: 2.25rem;
	}

	.about-paragraph {
		font-size: 1.05rem;
		color: var(--text-secondary);
		line-height: 1.75;
	}

	.highlights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
	}

	.highlight-card {
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.highlight-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-muted);
	}

	.highlight-value {
		font-size: 0.95rem;
		color: var(--text-primary);
	}

	.skills-card {
		background: var(--bg-card);
		border: 1px solid var(--border-card);
		border-radius: var(--radius-lg);
		padding: 2rem;
		backdrop-filter: blur(12px);
	}

	.skills-heading {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-subtle);
	}

	.skill-groups {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.skill-group-title {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-accent);
		margin-bottom: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (max-width: 900px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}
	}
</style>
