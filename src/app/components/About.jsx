import React from 'react';
import styled from 'styled-components';

const AboutPanel = styled.div`
      min-height: 250px;
      background: grey;
`;

class About extends React.Component {

    render() {
        return (
            <AboutPanel>
                About
            </AboutPanel>
        );
    }
}

export default About;