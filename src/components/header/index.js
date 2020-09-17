import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link activeClassName={style.active} href="/s-test/undefined-on-click">Undefined on click error</Link>
		<Link activeClassName={style.active} href="/s-test/not-supported-feature">Not supported feature error</Link>
		<Link activeClassName={style.active} href="/s-test/cors">CORS request error</Link>
		<Link activeClassName={style.active} href="/s-test/type-error">Type error</Link>
		<Link activeClassName={style.active} href="/s-test/handled-error">Handled error</Link>
	</header>
);

export default Header;
