<script lang="ts">
	import { twMerge } from '../../utilities/css';
	export let to: string; // url to link to
	export let css: {
		[key: string]: string;
	};

	const Style = twMerge(
		{
			base: 'text-gray-600'
		},
		{ ...css }
	);
	console.log(Style);
</script>

<a href={to} class={Style.base}>Company</a>
