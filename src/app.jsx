import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
/*eslint-disable*/
import Styles from './app/assets/css/styles.css';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';

Sentry.init({
    dsn: 'https://a9b4d602eefd4f0aa25f531cacec41dd@sentry.io/1324764'
});
ReactGA.initialize('UA-73328361-1');
ReactGA.pageview(window.location.pathname + window.location.search);

//components
import AppIndex from './app/components/appIndex';

ReactDOM.render(<AppIndex />, document.getElementById('app'));
