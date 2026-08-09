<script>
	import { concurrent } from 'svelte-typewriter';
</script>

<div class="hero page-shell section-card">
	<div class="hero-copy">
		<p class="eyebrow">Quality flipped homes, built to last</p>
		<h1>Turning dated properties into polished, market-ready homes.</h1>
		<p class="hero-text" use:concurrent={{ interval: 100 }}>
			Engineering &amp; contractor work with a sharp eye for finish, flow, and value.
		</p>
		<div class="hero-actions">
			<a href="/work" class="button button-primary">Browse our projects</a>
			<a href="/contact" class="button button-secondary">Book a consultation</a>
		</div>
		<div class="hero-metrics">
			<div>
				<strong>40+</strong>
				<span>renovations delivered</span>
			</div>
			<div>
				<strong>100%</strong>
				<span>project oversight</span>
			</div>
			<div>
				<strong>24/7</strong>
				<span>site coordination</span>
			</div>
		</div>
	</div>

	<div class="hero-visual">
		<img src="/imgs/contractor-icon.png" alt="Icon of a contractor holding tools" />
		<div class="hero-badge">Licensed • insured • local</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 2rem;
		padding: 2rem 2.25rem;
		margin: 2rem auto 2.5rem;
		align-items: center;
	}

	.hero-copy {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hero h1 {
		font-size: clamp(2rem, 4vw, 3.3rem);
		margin: 0;
	}

	.hero-text {
		max-width: 620px;
		font-size: clamp(1rem, 1.25vw + 0.8rem, 1.1rem);
		color: rgba(247, 241, 232, 0.82);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.hero-metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.85rem;
		margin-top: 0.4rem;
	}

	.hero-metrics div {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding: 0.9rem 1rem;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
	}

	.hero-metrics strong {
		font-size: 1.05rem;
		color: var(--accent-clr);
	}

	.hero-metrics span {
		font-size: 0.82rem;
		color: rgba(247, 241, 232, 0.72);
		text-transform: uppercase;
		letter-spacing: 0.12em;
	}

	.hero-visual {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem;
		border-radius: 24px;
		background: radial-gradient(circle at top, rgba(242, 180, 72, 0.2), rgba(242, 180, 72, 0.06));
		min-height: 340px;
	}

	.hero img {
		width: min(100%, 320px);
		object-fit: contain;
	}

	.hero-badge {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		padding: 0.6rem 0.9rem;
		border-radius: 999px;
		background: rgba(8, 17, 29, 0.72);
		border: 1px solid rgba(255, 255, 255, 0.08);
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--secondary-clr);
	}

	@media screen and (max-width: 880px) {
		.hero {
			grid-template-columns: 1fr;
			padding: 1.5rem;
		}

		.hero-visual {
			min-height: 240px;
		}
	}

	@media screen and (max-width: 560px) {
		.hero {
			padding: 1.25rem;
			margin: 1rem auto 1.75rem;
			gap: 1.25rem;
		}

		.hero h1 {
			font-size: clamp(1.75rem, 7vw, 2.35rem);
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.hero-actions .button {
			justify-content: center;
			width: 100%;
		}

		.hero-metrics {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			min-height: 220px;
			padding: 1rem;
		}

		.hero-badge {
			font-size: 0.72rem;
			padding: 0.55rem 0.75rem;
		}
	}
</style>
