import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
  }
`;

class AppIndex extends React.Component {

    render() {
        return (
            <div>
                <Home/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        );
    }
}

export default AppIndex;
