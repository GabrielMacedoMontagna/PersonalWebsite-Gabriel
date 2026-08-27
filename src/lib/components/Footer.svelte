<script lang="ts">
	import type { FooterContent, Profile } from '$lib/types/portfolio';

	let {
		content,
		profile
	}: {
		content: FooterContent;
		profile: Profile;
	} = $props();
</script>

<footer class="footer">
	<div class="container footer-container">
		<div class="footer-info">
			<p class="copyright">{content.copyright.replace('[Seu Nome]', profile.name).replace('[Your Name]', profile.name)}</p>
			<p class="credit">{content.credit}</p>
		</div>

		<a href="#home" class="back-to-top" aria-label={content.backToTop}>
			<span>{content.backToTop}</span>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M12 19V5M5 12l7-7 7 7" />
			</svg>
		</a>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 0;
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-primary);
		margin-top: auto;
	}

	.footer-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.footer-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.copyright {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	.credit {
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.back-to-top {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
		transition: color var(--transition), transform var(--transition);
	}

	.back-to-top:hover {
		color: var(--text-accent);
		transform: translateY(-2px);
	}
</style>
