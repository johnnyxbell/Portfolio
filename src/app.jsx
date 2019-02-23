import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import * as Sentry from '@sentry/browser';
import ReactGA from 'react-ga';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Gudea:400,400i,700']
    }
});

Sentry.init({
    dsn: 'https://a9b4d602eefd4f0aa25f531cacec41dd@sentry.io/1324764'
});

ReactGA.initialize('UA-73328361-1');
ReactGA.pageview(window.location.pathname + window.location.search);

//components
import AppIndex from './app/components/appIndex';

ReactDOM.render(<AppIndex />, document.getElementById('app'));
