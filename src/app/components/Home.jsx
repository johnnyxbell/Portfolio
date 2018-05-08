import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/bg.jpg';

const HomePanel = styled.div`
    position: relative;
    background: url(${backgroundImage}) no-repeat center center fixed; ;
    background-size: cover;
    height:100vh;
`;

class Home extends React.Component {

    render() {
        return (
            <HomePanel>
                Home
            </HomePanel>
        );
    }
}

export default Home;