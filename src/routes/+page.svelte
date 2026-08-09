<script>
	import Hero from '../components/Hero.svelte';
</script>

<main class="page-shell">
	<Hero />
	<div class="hr"></div>
	<section class="intro-grid grid-2">
		<article class="section-card panel">
			<p class="eyebrow">Why homeowners choose us</p>
			<h2>We flip, you move.</h2>
			<p>
				Ginz &amp; Associates transforms dated properties into modern, move-in-ready homes. We manage
				each phase so you get predictable timelines, polished finishes, and fewer surprises.
			</p>
			<p>
				From structural repairs and new systems to premium kitchens, baths, and exterior work, our
				team keeps the project cohesive from day one to the final walkthrough.
			</p>
			<a href="/about" class="button button-primary">Learn more about us</a>
		</article>
		<article class="section-card panel">
			<p class="eyebrow">What we deliver</p>
			<ul class="list-check">
				<li>Full-gut renovations with structural and mechanical improvements</li>
				<li>Kitchen and bath redesigns with elevated finishes and fixtures</li>
				<li>Exterior refreshes with roofing, siding, landscaping, and hardscapes</li>
				<li>Investor-ready plans with clear scopes, budgets, and schedules</li>
			</ul>
		</article>
	</section>
</main>

<style>
	.intro-grid {
		margin: 2.2rem 0 3rem;
	}

	.panel {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
	}

	.panel h2 {
		color: var(--accent-clr);
	}

	.panel p {
		color: rgba(247, 241, 232, 0.82);
	}
</style>
