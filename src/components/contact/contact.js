import React from 'react';
import ContactForm from './contactForm';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <div className="form-container">
                    <ContactForm/>
                </div>
            </div>
        );
    }
}

export default Contact;