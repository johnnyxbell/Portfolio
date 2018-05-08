import React from 'react';
import styled from 'styled-components';

const SkillsPanel = styled.div`
      min-height: 250px;
      background: green;
`;
class Skills extends React.Component {

    render() {
        return (
            <SkillsPanel>
                Skills
            </SkillsPanel>
        );
    }
}

export default Skills;