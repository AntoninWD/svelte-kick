<script>
	import { Link } from '../../index';

	const Style = {
		base: 'flex items-center justify-between p-6'
	};
</script>

<header>
	<nav class={Style.base}>
		<Link to="/">
			<span>Svelte Kick</span>
		</Link>

		<div>
			<Link to="/about">About</Link>
			<Link to="/pricing">Pricing</Link>
		</div>
		<div>
			<Link to="/signin" secondary>Sign in</Link>
			<Link to="/signup" primary>Sign up</Link>
		</div>
	</nav>
</header>
