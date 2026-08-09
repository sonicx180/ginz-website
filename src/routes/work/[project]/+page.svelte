<script>
	import { page } from '$app/stores';
</script>

<main class="page-shell">
	<header class="page-header">
		<p class="eyebrow">Project spotlight</p>
		<h1>{$page.params.project?.replace(/-/g, ' ') ?? 'Project'}</h1>
		<p class="page-subtitle">
			A closer look at one of our recent renovations, from the initial walkthrough to the final reveal.
		</p>
	</header>
	<section class="section-card panel">
		<p>
			This project page is ready for a richer case study with before-and-after details, scope notes, and
			finishes. For now, it shares the route context and keeps the experience aligned with the rest of the
			site.
		</p>
		<a href="/work" class="button button-primary">Back to projects</a>
	</section>
</main>

<style>
	.panel {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
	}

	.panel p {
		color: rgba(247, 241, 232, 0.82);
	}
</style>
