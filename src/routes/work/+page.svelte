<script lang="ts">
	import WorkCard from '../../components/Card.svelte';
</script>

<main class="page-shell">
	<header class="page-header">
		<p class="eyebrow">Our work</p>
		<h1>Recent projects that balance beauty, durability, and resale value.</h1>
		<p class="page-subtitle">
			Every renovation is planned for long-term performance and a polished finish that feels effortless.
		</p>
	</header>
	<div class="card-list">
		<WorkCard
			id="gladwick-street"
			address="1507 Gladwick Street, Carson, CA"
			description="Complete renovation with modernized kitchen, updated bathrooms, new flooring throughout, and fresh exterior paint"
			status="Completed"
			year={2004}
			iUrl="/imgs/house.png"
		/>
		<WorkCard
			id="maple-avenue"
			address="2341 Maple Avenue, Long Beach, CA"
			description="Full structural upgrade including new roof, HVAC system, energy-efficient windows, and landscaping redesign"
			status="In Progress"
			year={2025}
			iUrl="/imgs/house.png"
		/>
		<WorkCard
			id="ocean-boulevard"
			address="876 Ocean Boulevard, Torrance, CA"
			description="Luxury flip featuring custom cabinetry, granite countertops, hardwood floors, and smart home integration"
			status="Completed"
			year={2025}
			iUrl="/imgs/house.png"
		/>
		<WorkCard
			id="pine-street"
			address="4521 Pine Street, Compton, CA"
			description="Ground-up restoration with foundation reinforcement, electrical rewiring, plumbing overhaul, and modern amenities"
			status="Planning"
			year={2026}
			iUrl="/imgs/house.png"
		/>
	</div>
</main>
