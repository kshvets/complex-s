import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import style from './style.css';

// Code-splitting is automated for `routes` directory
import Undefined from '../routes/undefined'
import UndefinedOnClick from '../routes/undefined-on-click';
import NotSupportedFeature from '../routes/not-supported-feature';
import CORS from '../routes/cors';
import TypeError from '../routes/type-error';
import HandledError from '../routes/handled-error';



import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://601c5393f21f40de9250cf38c8c0d473@o447782.ingest.sentry.io/5433439',
  release: "error-app@v1.0.1",
});

const App = () => (
	<div id="app" class={style.app}>
		<div className={style.navigation}>
			<Header />
		</div>
		<div class={style.content}>
			<Router>
				<Undefined path="/" />
				<UndefinedOnClick path="/s-test/undefined-on-click" />
				<NotSupportedFeature path="/s-test/not-supported-feature" />
				<CORS path="/s-test/cors" />
				<TypeError path="/s-test/type-error" />
				<HandledError path="/s-test/handled-error" />
			</Router>
		</div>
	</div>
)

export default App;
