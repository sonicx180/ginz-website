<script lang="ts">
	interface Props {
		address: string;
		description: string;
		status: string;
		year: number;
		iUrl: string;
		id: string | number;
	}

	let {
		address = '1010 Lorem Ipsum Avenue, Lorem, Ipsum, 00000',
		year = 2026,
		description = 'A beautiful house',
		status = 'In Progress',
		iUrl = '/imgs/house.png',
		id = 1010
	}: Props = $props();

	const linkHref = `/work/${id}`;
</script>

<a class="work-card" href={linkHref}>
	<div class="house-img-wrap">
		<img src={iUrl} alt={description} class="house-img" />
		<span class="status-pill">{status}</span>
	</div>
	<div class="card-body">
		<p class="card-meta">{year} • Renovation</p>
		<h3>{address}</h3>
		<p>{description}</p>
		<span class="card-link">View project details</span>
	</div>
</a>

<style>
	.work-card {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		border: 1px solid var(--border-color);
		border-radius: var(--radius-lg);
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.025));
		box-shadow: var(--shadow);
		transition: transform 0.2s ease, border-color 0.2s ease;
	}

	.work-card:hover {
		transform: translateY(-4px);
		border-color: var(--accent-clr);
		text-decoration: none;
	}

	.house-img-wrap {
		position: relative;
		aspect-ratio: 4 / 3;
		overflow: hidden;
	}

	.house-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.status-pill {
		position: absolute;
		top: 1rem;
		left: 1rem;
		padding: 0.4rem 0.7rem;
		border-radius: 999px;
		background: rgba(8, 17, 29, 0.78);
		border: 1px solid rgba(255, 255, 255, 0.1);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent-clr);
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		padding: 1.2rem;
	}

	.card-meta {
		color: var(--accent-clr);
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.card-body h3 {
		font-size: 1.15rem;
		color: var(--secondary-clr);
	}

	.card-body p {
		color: rgba(247, 241, 232, 0.82);
		font-size: 0.97rem;
	}

	.card-link {
		margin-top: 0.25rem;
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--accent-clr);
	}
</style>
