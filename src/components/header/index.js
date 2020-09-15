import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<Link activeClassName={style.active} href="/undefined-on-click">Undefined on click error</Link>
		<Link activeClassName={style.active} href="/not-supported-feature">Not supported feature error</Link>
		<Link activeClassName={style.active} href="/cors">CORS request error</Link>
		<Link activeClassName={style.active} href="/type-error">Type error</Link>
		<Link activeClassName={style.active} href="/handled-error">Handled error</Link>
	</header>
);

export default Header;
