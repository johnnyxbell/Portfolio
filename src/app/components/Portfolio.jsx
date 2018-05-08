import React from 'react';
import styled from 'styled-components';

const PortfolioPanel = styled.div`
      min-height: 250px;
      background: #00a0d2;
`;

class Portfolio extends React.Component {

    render() {
        return (
            <PortfolioPanel>
                Portfolio
            </PortfolioPanel>
        );
    }
}

export default Portfolio;