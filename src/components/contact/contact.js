import React from 'react';
import axios from 'axios';
import ContactForm from './contactForm';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            buttonText: 'Submit'
        };
    }

    formSubmit = (e) => {
        e.preventDefault();

        this.setState({
            buttonText: 'Submitting...'
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
            console.log('Message not sent.')
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            buttonText: 'Message Sent'
        });
    }

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