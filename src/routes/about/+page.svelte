<script>
</script>

<main>
	<div class="content">
		<section>
			<h2>Who we are</h2>
			<p>
				Founded by Godfrey Nzeogu, Ginz &amp; Associates is based in SoCal and built on the belief
				that every rundown property can become a home worth living in. We don't just slap on fresh
				paint—we rebuild, redesign, and make sure every corner works the way it should.
			</p>
			<p>
				From updated kitchens to solid foundations, we handle the full renovation so buyers can
				move in without the headache of fixing anything themselves.
			</p>
			<p>
				Every flip we take on is another step toward revitalizing the neighborhoods we serve.
			</p>
		</section>
		<section>
			<h2>What drives us</h2>
			<ul>
				<li>Turning neglected properties into move-in-ready homes</li>
				<li>Rebuilding from the foundation up—structural and cosmetic</li>
				<li>Revitalizing SoCal neighborhoods one flip at a time</li>
				<li>Transparent process with no surprises for buyers or investors</li>
				<li>Quality craftsmanship that lasts beyond the sale</li>
			</ul>
			<a href="/contact" class="cta">Get in touch &rarr;</a>
		</section>
	</div>
</main>

<style>
	.content {
	
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
