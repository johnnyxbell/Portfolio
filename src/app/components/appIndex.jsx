import React from 'react';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    font-family: 'gudea', sans-serif;
  }
`;

class AppIndex extends React.Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default AppIndex;
