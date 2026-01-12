<script lang="ts">
	interface Props {
		address: string;
		description: string;
		status: string;
		year: number;
		iUrl: string;
	}
	let {
		address = "1010 Lorem Ipsum Avenue, Lorem, Ipsum, 00000",
		year = 2026,
		description = 'A beautiful house',
        status = "In Progress",
		iUrl = '/imgs/house.png'
	}: Props = $props();
</script>

<div class="work-card">
	<img src={iUrl} alt={description} class="house-img" />
	<h2>{address}</h2>
	<h3>Year of creation</h3>
	<time> {year}</time>
	<p>{description}</p>
    <span> Status : {status}</span>
</div>

<style>
	.work-card {
        width:25%;
		border: 2px dashed var(--light-clr);
		border-radius: 5px;
        padding:5px;
	}
    .house-img {
        object-fit: contain;
        width:100%;
    }
</style>
