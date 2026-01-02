<script>
	import Hero from '../components/Hero.svelte';
</script>

<main>
	<Hero />
	<div class="hr"></div>
	<div class="content">
		<section>
			<h2>We flip, You move</h2>
			<p>
				Leveraging years of industry expertise, we have successfully transformed over a dozen
				properties into high-value homes.
			</p>

			<a href="/about" class="cta"> Learn more about us</a>
		</section>
		<section>
			<h3>See some of our work below</h3>
		</section>
	</div>
</main>

<style>
	.content {
		text-align: center;
	}
	.cta {
		color: var(--dark-clr);
		font-weight: var(--bld-ft-wght);
	}
</style>
