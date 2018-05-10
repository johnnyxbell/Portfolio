import React from 'react';
import styled from 'styled-components';
import Nike from '../assets/images/nikestore.jpg';
import Sassandbide from '../assets/images/sassandbide.jpg';
import SportsGirl from '../assets/images/sportsgirl.jpg';
import Sussan from '../assets/images/sussan.jpg';
import FoyerLive from '../assets/images/foyerlive.jpg';
import MakePeaceIsland from '../assets/images/makepeaceisland.jpg';

const PortfolioPanel = styled.div`
    min-height: 250px;
    background: #2a2a2a;
    font-size: 25px;
    padding: 50px 0;
    position: relative;
\`;
`;

/*const PortfolioWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    color: #ccc;
    font-size: 22px;
    padding: 13px 0 50px 0;
    position: relative;
    line-height: 30px;
`;*/

const PortfolioItems = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-left: 1%;
    margin-right: 1%;
`;

const PortfolioItem = styled.div`
    flex-basis: 31.3333333333%;
    margin: 1%;
    @media (max-width: 1024px) and (min-width: 415px) {
        flex-basis: 48%;
    }

    @media (max-width: 414px) and (min-width: 374px) {
        flex-basis: 98%;
    }
    img {
        width: 100%;
        -webkit-filter: grayscale(0);
        opacity: 1;
        &:hover {
            transition: all 0.25s ease-in-out;
            filter: gray;
            -webkit-filter: grayscale(100%);
            opacity: 0.7;
        }
    }
`;

class Portfolio extends React.Component {
    render() {
        return (
            <PortfolioPanel>
                <PortfolioItems>
                    <PortfolioItem>
                        <img src={Nike} alt="Nike Store Australia" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <img src={Sassandbide} alt="Sass and Bide Worldwide" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <img src={SportsGirl} alt="Sportsgirl Australia" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <img src={Sussan} alt="Susan Australia" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <img src={FoyerLive} alt="Foyerlive WorldWide" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <img src={MakePeaceIsland} alt="Makepeace Island" />
                    </PortfolioItem>
                </PortfolioItems>
            </PortfolioPanel>
        );
    }
}

export default Portfolio;
