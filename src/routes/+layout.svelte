<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex-1 flex flex-col p-4 w-full">
		{@render children()}
	</main>

	<footer class="flex flex-col justify-center items-center p-3">
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>
