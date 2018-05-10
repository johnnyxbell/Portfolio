import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import 'babel-polyfill';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-73328361-1');
ReactGA.pageview(window.location.pathname + window.location.search);

//components
import AppIndex from './app/components/appIndex';

ReactDOM.render(<AppIndex />, document.getElementById('app'));
