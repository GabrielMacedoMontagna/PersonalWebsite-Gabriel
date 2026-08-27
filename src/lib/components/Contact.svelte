<script lang="ts">
	import type { ContactContent, Profile } from '$lib/types/portfolio';

	let {
		content,
		profile
	}: {
		content: ContactContent;
		profile: Profile;
	} = $props();
</script>

<section class="section contact-section" id="contact">
	<div class="container">
		<div class="contact-box card">
			<span class="kicker">{content.kicker}</span>
			<h2 class="section-title">{content.title}</h2>
			<p class="contact-description">{content.description}</p>

			<div class="contact-actions">
				<div class="primary-contacts">
					<a href="mailto:{profile.email}" class="button primary email-button">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect width="20" height="16" x="2" y="4" rx="2" />
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
						</svg>
						<span>{content.emailCta}</span>
					</a>

					{#if profile.phone}
						<a
							href="https://wa.me/{profile.phone.replace(/[^0-9]/g, '')}"
							target="_blank"
							rel="noopener noreferrer"
							class="button secondary phone-button"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							<span>{profile.phone}</span>
						</a>
					{/if}
				</div>

				<div class="social-links" aria-label={content.socialLabel}>
					{#if profile.socialLinks.linkedin}
						<a
							href={profile.socialLinks.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="social-button"
							aria-label="LinkedIn"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect width="4" height="12" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
							<span>LinkedIn</span>
						</a>
					{/if}

					{#if profile.socialLinks.github}
						<a
							href={profile.socialLinks.github}
							target="_blank"
							rel="noopener noreferrer"
							class="social-button"
							aria-label="GitHub"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
								<path d="M9 18c-4.51 2-5-2-7-2" />
							</svg>
							<span>GitHub</span>
						</a>
					{/if}

					{#if profile.socialLinks.twitter}
						<a
							href={profile.socialLinks.twitter}
							target="_blank"
							rel="noopener noreferrer"
							class="social-button"
							aria-label="Twitter / X"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
								<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
							</svg>
							<span>Twitter</span>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact-box {
		text-align: center;
		padding: 4rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(180deg, rgba(19, 29, 51, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
		border-color: var(--border-active);
	}

	.contact-description {
		font-size: 1.15rem;
		color: var(--text-secondary);
		max-width: 600px;
		line-height: 1.7;
		margin-bottom: 2.5rem;
	}

	.contact-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	.primary-contacts {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25rem;
		align-items: center;
	}

	.email-button,
	.phone-button {
		font-size: 1.05rem;
		padding: 0.9rem 2.25rem;
	}

	.social-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.social-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		background: var(--bg-surface);
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-weight: 500;
		transition: all var(--transition);
	}

	.social-button:hover {
		color: var(--text-accent);
		border-color: var(--border-active);
		transform: translateY(-2px);
	}

	@media (max-width: 640px) {
		.contact-box {
			padding: 2.5rem 1.25rem;
		}

		.social-links {
			width: 100%;
			flex-direction: column;
		}

		.social-button {
			justify-content: center;
		}
	}
</style>
