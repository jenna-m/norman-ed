import React from 'react';
import ContactForm from './contactForm';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <div className="form-container">
                    <ContactForm env={this.props.env} />
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    env: PropTypes.object.isRequired
};

export default Contact;