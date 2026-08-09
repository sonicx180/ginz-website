<header class="site-header">
	<nav class="navbar page-shell">
		<a class="brand" href="/">
			<img src="/imgs/ginz-logo.png" alt="Logo of Ginz & Associates" />
			<div>
				<span class="brand-name">Ginz & Associates</span>
				<span class="brand-subtitle">Construction & Renovation</span>
			</div>
		</a>
		<div class="links">
			<a href="/"><i class="fa-solid fa-house"></i> Home</a>
			<a href="/about"><i class="fa-solid fa-scroll"></i> About</a>
			<a href="/work"><i class="fa-solid fa-hammer"></i> Work</a>
			<a href="/contact"><i class="fa-solid fa-phone"></i> Contact</a>
		</div>
	</nav>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		padding: 1rem 0;
		background: rgba(8, 17, 29, 0.72);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.brand img {
		width: 56px;
		height: 56px;
		object-fit: contain;
		border-radius: 14px;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
	}

	.brand-name {
		display: block;
		font-size: 1rem;
		font-weight: 700;
		color: var(--secondary-clr);
	}

	.brand-subtitle {
		display: block;
		font-size: 0.74rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(247, 241, 232, 0.72);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.links a {
		padding: 0.65rem 0.95rem;
		border-radius: 999px;
		color: rgba(247, 241, 232, 0.82);
		font-size: 0.95rem;
		font-weight: 600;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.links a:hover {
		background: rgba(242, 180, 72, 0.14);
		color: var(--accent-clr);
	}

	@media screen and (max-width: 640px) {
		.site-header {
			padding: 0.85rem 0;
		}

		.navbar {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.75rem;
		}

		.brand {
			gap: 0.65rem;
		}

		.brand img {
			width: 46px;
			height: 46px;
		}

		.brand-name {
			font-size: 0.95rem;
		}

		.brand-subtitle {
			font-size: 0.68rem;
		}

		.links {
			width: 100%;
			justify-content: space-between;
			gap: 0.35rem;
		}

		.links a {
			padding: 0.5rem 0.7rem;
			font-size: 0.84rem;
		}
	}
</style>
