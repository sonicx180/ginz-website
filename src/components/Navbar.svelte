<script>
</script>

<nav class="navbar">
	<span class="icon">
		<img src="/imgs/ginz-logo.png" alt="Logo of Ginz & Associates" />
	</span>
	<div class="links">
		<a href="/"><i class="fa-solid fa-house"></i> Home </a>
		<a href="/about"> <i class="fa-solid fa-scroll"></i> About</a>
		<a href="/work"> <i class="fa-solid fa-hammer"></i> Work</a>
		<a href="/contact"> <i class="fa-solid fa-phone"></i> Contact</a>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.links > a {
		margin: 0 10px;
		font-size: 1.2rem;
		color: var(--accent-clr);
	}
	.links > a:hover {
		color: var(--secondary-clr);
	}

	.icon img {
		width: 8vw;
		object-fit: contain;
	}
</style>
