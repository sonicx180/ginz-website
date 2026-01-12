<script lang="ts">
	import WorkCard from '../../components/Card.svelte';
    
</script>

<main>
	<h1>Our Work</h1>

	<div class="card-container">
		<WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
	</div>
</main>

<style>
	main {
		text-align: center;
	}
    .card-container {
        display:flex;
        justify-content: space-between;
        flex-wrap:wrap;
    }
</style>

