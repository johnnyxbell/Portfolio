import React from 'react';
import styled from 'styled-components';
import Social from './Social';
import ContactBg from '../assets/images/contactusbg.jpg';

const ContactPanel = styled.div`
    position: relative;
    background: url(${ContactBg}) no-repeat center center fixed;
    background-size: cover;
    width:100vw;
    color: #333f4c;
    font-size: 25px;
    padding: 50px 0;
    @media (max-width: 1200px) and (min-width: 374px) {
        padding: 50px;
    }
    position: relative;
    a {
        transition: opacity 0.5s ease;
        color: #ccc;
        opacity: 0.7;
    }
    a:hover {
        opacity: 1;
    }
    strong {
        font-weight: 500;
    }
\`;
`;

const ContactInfo = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    color: #ccc;
    font-size: 22px;
    @media (max-width: 769px) and (min-width: 374px) {
        font-size: 18px;
    }
    padding: 13px 0 50px 0;
    position: relative;
    line-height: 30px;
    &:before {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #ccc;
        content: '';
        position: absolute;
        top: 0px;
    }
    &:after {
        display: block;
        height: 1px;
        width: 3vw;
        background-color: #ccc;
        content: '';
        position: absolute;
        bottom: 10px;
    }
`;

class Contact extends React.Component {
    render() {
        return (
            <ContactPanel>
                <ContactInfo>
                    <p>
                        For new projects, ideas, job opportunities or anything you’d like to discuss, email me at{' '}
                        <a href="mailto:hi@johnnybell.io">hi@johnnybell.io</a>
                    </p>
                    <p>
                        +1 415 937 3187 🇺🇸<br />
                        +61 438 326 315 🇦🇺
                    </p>
                    <Social />
                </ContactInfo>
            </ContactPanel>
        );
    }
}

export default Contact;
