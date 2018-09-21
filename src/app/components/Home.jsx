import React from 'react';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import backgroundImage from '../assets/images/bg.jpg';
import Profile from '../assets/images/profile.jpg';
import Social from './Social';

const Bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-15px);}
  60% {transform: translateY(-7px);}

`;

const HomePanel = styled.div`
    position: relative;
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
`;

const SocialPanel = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    @media (max-width: 414px) and (min-width: 320px) {
        position: initial;
        width: 245px;
        margin: auto;
        padding-top: 20px;
        opacity: 0.7;   
        top: auto;
        right: auto;
    }
`;

const Bio = styled.div`
    max-width: 700px;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    text-align: center;
`;

const ProfilePic = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 100px;
    border: 5px solid white;
    box-shadow: #ccc 0px 0px 7px;
`;

const BioText = styled.p`
    color: #ccc;
    text-align: center;
    font-size: 2.5rem;
    @media (max-width: 769px) and (min-width: 320px) {
        font-size: 25px;
    }
    font-weight: 300;
    margin: 20px;
    padding: 0;
    strong {
        color: white;
    }
`;

const ScrollDown = styled.div`
    svg {
        position: absolute;
        bottom: 10px;
        left: 50%;
        margin-left: -1rem;
        transform: translate(-50%);
        color: #fff;
        font-size: 2rem;
        opacity: 0.3;
        height: 35px !important;
        width: 35px !important;
        animation: ${Bounce} 2s infinite;
    }
`;

class Home extends React.Component {
    render() {
        return (
            <HomePanel>
                <SocialPanel>
                    <Social />
                </SocialPanel>
                <Bio>
                    <ProfilePic src={Profile} alt="Johnny Bell Profile Pic" />
                    <BioText>
                        G’day mates, I’m Johnny 👋🏻 <br />a <strong>frontend engineer</strong> from{' '}
                        <strong>Australia.</strong> Working with the awesome team at <strong>Stackshare</strong> in{' '}
                        <strong>San Francisco</strong>.
                    </BioText>
                </Bio>
                <ScrollDown>
                    <FontAwesomeIcon icon={faAngleDown} />
                </ScrollDown>
            </HomePanel>
        );
    }
}

export default Home;
