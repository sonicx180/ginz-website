<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/b2a6bb7e3b.js" crossorigin="anonymous"></script>
	<link rel="icon" type="image/x-icon" href="/imgs/favicon.ico" />
	<link rel="image/png" type="image/png" sizes="500x500" href="/imgs/ginz-logo.png" />
	<title>Ginz & Associates Inc</title>
</svelte:head>
<Navbar />
{@render children()}
<Footer />
