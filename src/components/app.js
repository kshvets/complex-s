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
  dsn: 'https://d92fb8687e5a412e82fdb633297de767@o447782.ingest.sentry.io/5433563',
  release: "error-app@v2.0.0",
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
