import React from 'react';
import styled from 'styled-components';
import AboutBg from '../assets/images/aboutusbg.jpg';
import ReactLogo from '../assets/images/tech/react.png';
import ReduxLogo from '../assets/images/tech/redux.png';
import WebpackLogo from '../assets/images/tech/webpack.png';
import GraphQLlogo from '../assets/images/tech/graphql.png';
import ApolloLogo from '../assets/images/tech/apollo.png';
import StyledLogo from '../assets/images/tech/styled.png';
import NodeLogo from '../assets/images/tech/node.png';
import BabelLogo from '../assets/images/tech/babel.png';
import FlowLogo from '../assets/images/tech/flow.png';
import JestLogo from '../assets/images/tech/jest.png';
import YarnLogo from '../assets/images/tech/yarn.png';
import AngularLogo from '../assets/images/tech/angular.png';
import JSLogo from '../assets/images/tech/js.png';
import SassLogo from '../assets/images/tech/sass.png';
import GitLogo from '../assets/images/tech/git.png';

const AboutPanel = styled.div`
    position: relative;
    background: url(${AboutBg}) no-repeat center center fixed;
    background-size: cover;
    width:100vw;
    min-height: 250px;
`;

const AboutInfo = styled.div`
    min-height: 250px;
    max-width: 1200px;
    margin: 0 auto;
    color: #333f4c;
    font-size: 25px;
    padding: 50px 0;
    @media (max-width: 1200px) and (min-width: 374px) {
        padding: 50px;
    }
    position: relative;
    a {
        transition: opacity 0.5s ease;
        color: #333f4c;
        opacity: 0.7;
    }
    a:hover {
        opacity: 1;
    }
    strong {
        font-weight: 500;
    }
`;

const AboutInfoCurrent = styled.div`
    color: #333f4c;
    font-size: 25px;
    @media (max-width: 769px) and (min-width: 374px) {
        font-size: 18px;
    }
    padding: 50px 0;
    position: relative;
    &:before {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #333f4c;
        content: '';
        position: absolute;
        top: 20px;
    }
    &:after {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #333f4c;
        content: '';
        position: absolute;
        bottom: 20px;
    }
`;

const AboutInfoPast = styled.div`
    color: #333f4c;
    font-size: 22px;
    @media (max-width: 769px) and (min-width: 374px) {
        font-size: 18px;
    }
    padding: 13px 0 50px 0;
    position: relative;
    line-height: 30px;
    &:after {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #333f4c;
        content: '';
        position: absolute;
        bottom: 20px;
    }
`;

const Skills = styled.div`
    color: #333f4c;
    font-size: 22px;
    @media (max-width: 769px) and (min-width: 374px) {
        font-size: 18px;
    }
    padding: 13px 0 50px 0;
    position: relative;
    line-height: 30px;
    &:after {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #333f4c;
        content: '';
        position: absolute;
        bottom: 30px;
    }
`;

const SkillsUl = styled.ul`
    margin: 20px 0;
    padding: 0;
`;

const SkillsLi = styled.li`
    color: #333f4c;
    opacity: 0.7;
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid #333f4c;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 16px;
    @media (max-width: 769px) and (min-width: 374px) {
        font-size: 14px;
    }
    transition: background 0.3s ease;
    &:hover {
        background: #333f4c;
        color: white;
        cursor: default;
    }
`;

class About extends React.Component {
    render() {
        const mySkills = [
            'React.js',
            'Redux',
            'Webpack',
            'Styled Components',
            'GraphQL',
            'Node',
            'Express',
            'Babel',
            'Flow',
            'Jest',
            'Yarn',
            'NPM',
            'Angular',
            'javaScript',
            'SCSS',
            'GIT',
            'JSON',
            'Responsive',
            'E Commerce',
            'Skateboarding',
            'Watching Hockey',
            'Going to Gigs',
            '... Plus many more'
        ];
        const listMySkills = mySkills.map(mySkills => <SkillsLi key={mySkills}>{mySkills}</SkillsLi>);

        return (
            <AboutPanel>
                <AboutInfo>
                    <AboutInfoCurrent>
                        Currently working at{' '}
                        <a href="http://doctor.com" target="_blank" rel="noopener noreferrer">
                            Doctor.com
                        </a>{' '}
                        in <strong>Cupertino, CA</strong>.
                    </AboutInfoCurrent>
                    <AboutInfoPast>
                        Hey there, I've been coding the internet for the past 10 years, working all over the world, but
                        am now happy to call the Bay Area home. Over that time I've managed people, been a tech lead,
                        and am now loving being an individual contributor. <br /> In the past I've worked for{' '}
                        <a href="http://foyerlive.com" target="_blank" rel="noopener noreferrer">
                            FoyerLive
                        </a>{' '}
                        in <strong>San Francisco CA</strong>, &amp; {' '}
                        <a href="http://www.officeworks.com.au/" target="_blank" rel="noopener noreferrer">
                            Officeworks
                        </a>,{' '}
                        <a href="http://dt.com.au/" target="_blank" rel="noopener noreferrer">
                            DT Digital
                        </a>,{' '}
                        <a href="http://ie.com.au/" target="_blank" rel="noopener noreferrer">
                            IE Digital
                        </a>{' '}
                        in <strong>Melbourne AU</strong>.
                    </AboutInfoPast>
                    <Skills>
                        Tech Used:
                        <p>
                            <img src={JSLogo} width="50px" alt='Javascript logo'/>
                            <img src={ReactLogo} width="50px" alt='React logo'/>
                            <img src={ReduxLogo} width="50px" alt='Redux logo'/>
                            <img src={WebpackLogo} width="50px" alt='Webpack logo'/>
                            <img src={GraphQLlogo} width="50px" alt='GraphQL logo'/>
                            <img src={ApolloLogo} width="50px" alt='Apollo logo'/>
                            <img src={StyledLogo} width="50px" alt='Styled Components logo'/>
                            <img src={NodeLogo} width="50px" alt='Node logo'/>
                            <img src={BabelLogo} width="50px" alt='babel logo'/>
                            <img src={FlowLogo} width="50px" alt='Flow logo'/>
                            <img src={JestLogo} width="50px" alt='Jest logo'/>
                            <img src={YarnLogo} width="50px" alt='Yarn logo'/>
                            <img src={AngularLogo} width="50px" alt='Angular logo'/>
                            <img src={SassLogo} width="50px" alt='Sass logo'/>
                            <img src={GitLogo} width="50px" alt='Git logo'/>
                        </p>
                    </Skills>
                    <Skills>
                        My skills include:
                        <SkillsUl>{listMySkills}</SkillsUl>
                    </Skills>
                </AboutInfo>
            </AboutPanel>
        );
    }
}

export default About;
