import React from 'react';
import styled from 'styled-components';
import Nike from '../assets/images/nikestore.jpg';
import Sassandbide from '../assets/images/sassandbide.jpg';
import SportsGirl from '../assets/images/sportsgirl.jpg';
import Sussan from '../assets/images/sussan.jpg';
import ScanTool from '../assets/images/scantool.jpg';
import ScanToolVid from '../assets/videoes/scantool.mp4';
import MakePeaceIsland from '../assets/images/makepeaceisland.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faReact from '@fortawesome/fontawesome-free-brands/faReact';
import faMagento from '@fortawesome/fontawesome-free-brands/faMagento';
import faWordpress from '@fortawesome/fontawesome-free-brands/faWordpress';

const PortfolioPanel = styled.div`
    min-height: 250px;
    background: #2a2a2a;
    font-size: 25px;
    padding: 50px 0;
    position: relative;
`;

const PortfolioItems = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-left: 1%;
    margin-right: 1%;
`;

const PortfolioItem = styled.div`
    flex-basis: 31.3333333333%;
    margin: 1%;
    position: relative;
    @media (max-width: 1024px) and (min-width: 415px) {
        flex-basis: 48%;
    }

    @media (max-width: 414px) and (min-width: 374px) {
        flex-basis: 98%;
    }

    &:hover video {
        opacity: 1;
    }
    svg {
        position: absolute;
        bottom: 4%;
        right: 4%;
        width: 35px !important;
        height: 35px !important;
        //color: #61dafb;
    }
    video {
        position: absolute;
        top: 29%;
        left: 16.5%;
        width: 67%;
        height: auto;
        opacity: 0;
        transition: all 0.25s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
    img {
        width: 100%;
        -webkit-filter: grayscale(0);
        opacity: 1;
        &:hover {
            transition: all 0.25s ease-in-out;
            filter: gray;
            -webkit-filter: grayscale(100%);
            opacity: 1;
        }
    }
`;

class Portfolio extends React.Component {
    render() {
        return (
            <PortfolioPanel>
                <PortfolioItems>
                    <PortfolioItem>
                        <img src={ScanTool} alt="Scantool Doctor.com" />
                        <video width="640" height="388" autoPlay loop>
                            <source src={ScanToolVid} type="video/mp4" />
                        </video>
                        <FontAwesomeIcon icon={faReact} color="#61dafb" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://nikestore.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={Nike} alt="Nike Store Australia" />{' '}
                        </a>
                        <FontAwesomeIcon icon={faMagento} color="#f26322" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://sassandbide.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={Sassandbide} alt="Sass and Bide Worldwide" />
                        </a>
                        <FontAwesomeIcon icon={faMagento} color="#f26322" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://sportsgirl.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={SportsGirl} alt="Sportsgirl Australia" />
                        </a>
                        <FontAwesomeIcon icon={faMagento} color="#f26322" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://sussan.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={Sussan} alt="Susan Australia" />
                        </a>
                        <FontAwesomeIcon icon={faMagento} color="#f26322" />
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://makepeaceisland.com" target="_blank" rel="noopener noreferrer">
                            <img src={MakePeaceIsland} alt="Makepeace Island" />
                        </a>
                        <FontAwesomeIcon icon={faWordpress} color="#21759b" />
                    </PortfolioItem>
                </PortfolioItems>
            </PortfolioPanel>
        );
    }
}

export default Portfolio;
