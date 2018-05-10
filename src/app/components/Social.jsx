import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faAngelList from '@fortawesome/fontawesome-free-brands/faAngellist';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';

const SocialPanel = styled.div`
    a svg {
        transition: color 0.5s ease;
        color: #ccc;
        padding-right: 10px;
        height: 25px;
        width: 25px !important;
    }
    a:hover svg {
        color: white;
    }
`;

class Social extends React.Component {
    render() {
        return (
            <SocialPanel>
                <a href="https://www.linkedin.com/in/johnnyxbell/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.github.com/johnnyxbell/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://angel.co/johnnyxbell" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faAngelList} />
                </a>
                <a href="https://www.twitter.com/johnnyxbell/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://blog.johnnybell.io" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faRss} />
                </a>
            </SocialPanel>
        );
    }
}

export default Social;
