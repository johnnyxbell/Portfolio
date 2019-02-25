import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Gudea', sans-serif;
    font-display: auto;
  }`;

class AppIndex extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </React.Fragment>
        );
    }
}

export default AppIndex;
