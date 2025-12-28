<script>
	import Hero from '../components/Hero.svelte';
</script>

<Hero />
<div class="hr"></div>
<main>
	<section>
		<h2>We flip, You move</h2>
		<p>
			Leveraging years of industry expertise, we have successfully transformed over a dozen
			properties into high-value homes.
		</p>

		<a href="/about" class = "cta"> Learn more about us</a>
	</section>
	<h3>See some of our work below</h3>
</main>

<style>
	main {
		text-align: center;
	}
	.cta {
		color:var(--dark-clr);
		font-weight: var(--bld-ft-wght);
	}
</style>
