<script lang="ts">
	import { twMerge } from '../../utilities/css';
	export let to: string; // url to link to
	export let css: {
		[key: string]: string;
	} = {};
	export let secondary: boolean = false;
	export let primary: boolean = false;

	const Style = twMerge(
		{
			wrapper: `py-1 px-2 mx-2 lg:text-lg transition-base rounded ${
				secondary && 'shadow border border-white text-white hover:bg-white hover:border-main-500'
			}
			${primary && 'shadow bg-main-500 text-white hover:bg-main-600'}
			`
		},
		{ ...css }
	);

</script>

<a href={to} class={Style.wrapper}><slot /></a>
