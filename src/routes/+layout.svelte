<script lang="ts">
	import '../app.css';
	import { Header, Footer, Background } from '../components/index';
</script>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
	<Background />
	<Header />
	<main class="grow">
		<slot />
	</main>
	<Footer />
</div>
