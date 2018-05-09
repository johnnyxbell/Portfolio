import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/bg.jpg';
import Profile from '../assets/images/profile.jpg';

const HomePanel = styled.div`
    position: relative;
    background: url(${backgroundImage}) no-repeat center center fixed; ;
    background-size: cover;
    height:100vh;
`;

const Bio = styled.div`
    max-width: 800px;
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
    font-size: 2.8rem;
    font-weight: 300;
    margin: 20px;
    padding: 0;
    strong {
    color: white;
    }
`;

class Home extends React.Component {

    render() {
        return (
            <HomePanel>
                <Bio>
                    <ProfilePic src={Profile} alt='Johnny Bell Profile Pic' />
                    <BioText>
                    Hi, I'm Johnny Bell, a 31 year old <strong>frontend engineer</strong> from <strong>Australia.</strong> Working with the awesome team at <strong>Doctor.com</strong> in <strong>Silicon Valley</strong>.
                    </BioText>
                </Bio>
            </HomePanel>
        );
    }
}

export default Home;