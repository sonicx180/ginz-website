<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b2a6bb7e3b.js" crossorigin="anonymous"></script>
</svelte:head>
<Navbar />
{@render children()}
