<script>
	import Hero from '../components/Hero.svelte';
</script>

<main>
	<Hero />
	<div class="hr"></div>
	<div class="content">
		<section>
			<h2>We flip, you move</h2>
			<p>
				Ginz &amp; Associates transforms dated properties into modern, move-in-ready homes. From
				structural reinforcements and mechanical upgrades to premium kitchens, baths, and exteriors,
				we manage each phase so you get predictable timelines and polished results.
			</p>
			<p>
				With dozens of full-property flips delivered, we focus on curb appeal, energy efficiency,
				and livable layouts that lift both home value and neighborhood pride.
			</p>
			<p>
				Our teams coordinate architects, engineers, and specialty trades so every plan is specific,
				permitted, and executable. We stage and style with market data in mind, helping buyers
				picture life on day one and giving investors confidence in resale velocity.
			</p>
			<p>
				Materials are selected for longevity and maintenance ease—durable flooring, balanced
				lighting, efficient HVAC, and weather-ready exteriors—so families get comfort and owners get
				fewer surprises over the life of the home.
			</p>
			<a href="/about" class="cta">Learn more about us &rarr;</a>
		</section>
		<section>
			<h2>See some of our work</h2>
			<p>
				Recent projects include whole-home rehabs with new roofs and siding, custom kitchen and bath
				redesigns with elevated finishes, and smart, energy-efficient upgrades that keep operating
				costs down.
			</p>
			<ul>
				<li>Full-gut renovations with structural and mechanical improvements</li>
				<li>Kitchen and bath reimagined with premium surfaces and fixtures</li>
				<li>Exterior refreshes—roofing, siding, landscaping, and hardscapes</li>
				<li>Investor-ready plans with clear scopes, budgets, and schedules</li>
				<li>Energy-efficiency packages: windows, insulation, HVAC, smart controls</li>
				<li>Permitting, inspections, and closeout managed end-to-end</li>
			</ul>
		</section>
	</div>
</main>

<style>
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
		max-width: 1600px;
		margin: 3rem auto 4rem;
		padding: 0 2rem;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		background-color: rgba(225, 239, 230, 0.04);
		border: 1px solid rgba(225, 239, 230, 0.12);
		border-top: 3px solid var(--accent-clr);
		border-radius: 4px;
		padding: 2rem 2.5rem;
	}

	section h2 {
		color: var(--accent-clr);
		font-size: clamp(1.3rem, 2.5vw, 2rem);
		text-decoration: none;
	}

	section p {
		text-align: left;
		line-height: 1.75;
		font-size: clamp(0.9rem, 1.4vw, 1.1rem);
		opacity: 0.88;
		margin: 0;
	}

	ul {
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	ul li {
		font-size: clamp(0.9rem, 1.4vw, 1.1rem);
		line-height: 1.5;
		padding-left: 1.5rem;
		position: relative;
		text-align: left;
	}

	ul li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--accent-clr);
	}

	.cta {
		display: inline-block;
		margin-top: 0.25rem;
		padding: 0.6rem 1.4rem;
		background-color: var(--accent-clr);
		color: var(--primary-clr);
		font-weight: var(--bld-ft-wght);
		font-size: 1rem;
		border-radius: 3px;
		align-self: flex-start;
		transition: opacity 0.2s ease;
	}

	.cta:hover {
		opacity: 0.82;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		.content {
			grid-template-columns: 1fr;
			padding: 0 1.25rem;
			margin: 2rem auto 3rem;
		}
	}

	@media screen and (max-width: 400px) {
		.content {
			padding: 0 0.5rem;
		}
	}
</style>
