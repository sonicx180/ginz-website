<script>
</script>

<main>
	<h1>Contact Us</h1>
	<div class="content">
		<section>
			<h2>Get in touch</h2>
			<p>
				We're happy to discuss your next project, answer questions, or set up a walkthrough. Reach
				out by phone or email and we'll get back to you promptly.
			</p>
			<div class="contact-item">
				<span class="label">Phone</span>
				<a href="tel:+1-213-361-9181" class="cta">1-213-361-9181 &rarr;</a>
			</div>
			<div class="contact-item">
				<span class="label">Email</span>
				<a href="mailto:ginz.associates@gmail.com" class="cta">ginz.associates@gmail.com &rarr;</a>
			</div>
		</section>
		<section>
			<h2>What to expect</h2>
			<ul>
				<li>Quick response within one business day</li>
				<li>Free initial consultation on your property</li>
				<li>Clear scope and budget breakdown upfront</li>
				<li>No pressure—just straight answers</li>
			</ul>
		</section>
	</div>
</main>

<style>
	h1 {
		text-align:center;
	}
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
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

	.contact-item {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.label {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		opacity: 0.55;
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
