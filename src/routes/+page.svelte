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
			<a href="/about" class="cta">Learn more about us</a>
		</section>
		<section>
			<h2>See some of our work below</h2>
			<p>
				Recent projects include whole-home rehabs with new roofs and siding, custom kitchen and bath
				redesigns with elevated finishes, and smart, energy-efficient upgrades that keep operating
				costs down.
			</p>
			<p>
				We document scopes before demo, provide weekly photo logs, and keep schedules visible so
				stakeholders know exactly what is happening and when. That transparency keeps surprises low
				and momentum high through inspections and punch lists.
			</p>
			<ul>
				<li>Full-gut renovations with structural and mechanical improvements</li>
				<li>Kitchen and bath reimagined with premium surfaces and fixtures</li>
				<li>Exterior refreshes—roofing, siding, landscaping, and hardscapes</li>
				<li>Investor-ready plans with clear scopes, budgets, and schedules</li>
				<li>Energy-efficiency packages: windows, insulation, HVAC balancing, smart controls</li>
				<li>Permitting, inspections, and closeout managed end-to-end</li>
			</ul>
		</section>
	</div>
</main>

<style>
	.content {
		text-align: center;
		padding: 2rem;
	}
	.content p {
		margin: 0 3rem 1rem;
	}
	.content h2 {
		/* adding underline for good "effect" */
		text-decoration: underline;
	}
	.cta {
		color: var(--accent-clr);
		font-weight: var(--bld-ft-wght);
	}

	ul {
		padding-left: 0;
		font-size: 1.5rem;
	}

	ul li {
		list-style-position: inside;
	}

	@media screen and (max-width:400px) {
		.content {
			padding:0;
		}
	}
</style>
