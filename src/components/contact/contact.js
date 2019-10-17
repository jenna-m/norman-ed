import React from 'react';
import ContactForm from './contactForm';
import { env } from '../../config';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <ContactForm env={env} />
            </div>
        );
    }
}

export default Contact;