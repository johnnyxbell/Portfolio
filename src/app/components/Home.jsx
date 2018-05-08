import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/bg.jpg';

const HomePage = styled.div`
    position: relative;
    background: url(${backgroundImage}) no-repeat center center fixed; ;
    background-size: cover;
    height:100vh;
`;

class Home extends React.Component {

    render() {
        return (
            <HomePage>
                Home
            </HomePage>
        );
    }
}

export default Home;