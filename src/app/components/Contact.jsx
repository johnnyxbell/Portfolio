import React from 'react';
import styled from 'styled-components';

const ContactPanel = styled.div`
      min-height: 250px;
      background: #1f3237;
`;

class Contact extends React.Component {

    render() {
        return (
            <ContactPanel>
                Contact
            </ContactPanel>
        );
    }
}

export default Contact;