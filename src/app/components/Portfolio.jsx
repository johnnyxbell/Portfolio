import React from 'react';
import styled from 'styled-components';
import Nike from '../assets/images/nikestore.jpg';
import Sassandbide from '../assets/images/sassandbide.jpg';
import SportsGirl from '../assets/images/sportsgirl.jpg';
import Githunt from '../assets/images/githunt.png';
import ScanTool from '../assets/images/scantool.jpg';
import ddc from '../assets/images/ddc.jpg';
import ReduxLogo from '../assets/images/tech/redux.png';
import SassLogo from '../assets/images/tech/sass.png';
import StyledLogo from '../assets/images/tech/styled.png';
import WebpackLogo from '../assets/images/tech/webpack.png';
import ReactLogo from '../assets/images/tech/react.png';
import ApolloLogo from '../assets/images/tech/apollo.png';
import GraphQlLogo from '../assets/images/tech/graphql.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMagento from '@fortawesome/fontawesome-free-brands/faMagento';

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

const Tools = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    z-index:1;
    img {
        width:30px!important;
        height: 30px;
        margin-top: 1px;
        padding: 0 5px;
    }
`;

const Description = styled.div`
    bottom: 3%;
    left: 3%;
    z-index:5;
    color: #6b6b6b;
    background: #f7f7f9;
    padding: 5px 15px;
    margin-top: -7px;
    a {
        transition: all 0.5s ease;
        color:#575757;
        &:hover {
            color: #969696;
        }
    }
    h3 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
    }
`;

const PortfolioItem = styled.div`
    flex-basis: 31.3333333333%;
    margin: 1%;
    position: relative;
    @media (max-width: 1024px) and (min-width: 415px) {
        flex-basis: 48%;
    }

    @media (max-width: 414px) and (min-width: 320px) {
        flex-basis: 98%;
    }

    svg {
        width: 30px !important;
        height: 30px !important;
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
                        <a href ="https://www.doctor.com/solutions/universal-scheduling" target="_blank" rel="noopener noreferrer">
                            <img src={ddc} alt="Doctor.com" />
                        </a>
                        <Tools>
                            <img src={ReactLogo} alt="react"/>
                            <img src={ReduxLogo} alt="redux"/>
                            <img src={WebpackLogo} alt="webpack"/> 
                            <img src={StyledLogo} alt="styled components"/> 
                        </Tools>
                        <Description>
                            <a href ="https://www.doctor.com/solutions/universal-scheduling" target="_blank" rel="noopener noreferrer">
                                <h3>Doctor.com Provider Admin</h3>
                            </a>
                            <p>A dashboard for healthcare providers to manage their listings, reviews, and appointments.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href ="https://www.doctor.com/solutions/universal-scheduling" target="_blank" rel="noopener noreferrer">
                            <img src={ddc} alt="Doctor.com" />
                        </a>
                        <Tools>
                            <img src={ReactLogo} alt="react"/>
                            <img src={ReduxLogo} alt="redux"/>
                            <img src={WebpackLogo} alt="webpack"/> 
                            <img src={StyledLogo} alt="styled components"/> 
                        </Tools>
                        <Description>
                            <a href ="https://www.doctor.com/solutions/universal-scheduling" target="_blank" rel="noopener noreferrer">
                                <h3>Doctor.com Provider Admin</h3>
                            </a>
                            <p>A dashboard for healthcare providers to manage their listings, reviews, and appointments.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="https://www.doctor.com/scan-v3" target="_blank" rel="noopener noreferrer">
                            <img src={ScanTool} alt="Scantool Doctor.com" />
                        </a>
                        <Tools>
                            <img src={ReactLogo} alt="react"/>
                            <img src={ReduxLogo} alt="redux"/>
                            <img src={WebpackLogo} alt="webpack"/>
                            <img src={SassLogo} alt="Sass"/> 
                        </Tools>
                        <Description>
                            <a href ="https://www.doctor.com/scan-v3" target="_blank" rel="noopener noreferrer">
                                <h3>Doctor.com Scan tool</h3>
                            </a>
                            <p>A powerful scan tool will that will assess doctors online presence and reputation across the web.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="https://github.com/johnnyxbell/githunt" target="_blank" rel="noopener noreferrer">
                            <img src={Githunt} alt="Githunt" />
                        </a>
                        <Tools>
                            <img src={ReactLogo} alt="react"/>
                            <img src={GraphQlLogo} alt="graphql"/>
                            <img src={ApolloLogo} alt="apollo"/>
                            <img src={WebpackLogo} alt="webpack"/> 
                            <img src={StyledLogo} alt="styled components"/> 
                        </Tools>
                        <Description>
                            <a href ="https://github.com/johnnyxbell/githunt" target="_blank" rel="noopener noreferrer">
                                <h3>GitHunt</h3>
                            </a>
                            <p>An open source tool that lets you search repos on github, returns relevant data and the latest 5 issues.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://nikestore.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={Nike} alt="Nike Store Australia" />{' '}
                        </a>
                        <Tools>
                            <FontAwesomeIcon icon={faMagento} color="#f26322" />
                        </Tools>
                        <Description>
                        <a href="http://nikestore.com.au" target="_blank" rel="noopener noreferrer">
                                <h3>Nike Store Australia</h3>
                            </a>
                            <p>An e-commerce site for Nike Australia <em>(The magento build of this site is no longer live)</em>.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://sassandbide.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={Sassandbide} alt="Sass and Bide Worldwide" />
                        </a>
                        <Tools>
                            <FontAwesomeIcon icon={faMagento} color="#f26322" />
                        </Tools>
                        <Description>
                            <a href="http://sassandbide.com.au" target="_blank" rel="noopener noreferrer">
                                <h3>Sass and Bide</h3>
                            </a>
                            <p>An e-commerce site for Australian womans high end brand Sass and Bide.</p>
                        </Description>
                    </PortfolioItem>
                    <PortfolioItem>
                        <a href="http://sportsgirl.com.au" target="_blank" rel="noopener noreferrer">
                            <img src={SportsGirl} alt="Sportsgirl Australia" />
                        </a>
                        <Tools>
                            <FontAwesomeIcon icon={faMagento} color="#f26322" />
                        </Tools>
                        <Description>
                            <a href ="http://sportsgirl.com.au" target="_blank" rel="noopener noreferrer">
                                <h3>Sportsgirl</h3>
                            </a>
                            <p>An e-commerce site for Australian womans clothing brand Sportsgirl.</p>
                        </Description>
                    </PortfolioItem>
                </PortfolioItems>
            </PortfolioPanel>
        );
    }
}

export default Portfolio;
