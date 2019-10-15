import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
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
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                    { /* Name Input */ }
                    <label className="contact-name" htmlFor="contact-name">Name</label>
                    <input
                        onChange={ e => this.setState=({ name: e.target.value })}
                        name="name"
                        className="contact-name"
                        type="text"
                        placeholder="Your Name"
                        value={this.state.name}
                        required
                    />

                    { /* Email Input */ }
                    <label className="contact-email" htmlFor="contact-email">Email</label>
                    <input
                        onChange={ e => this.setState({ email: e.target.value })}
                        name="email"
                        className="contact-email"
                        type="text"
                        placeholder="you@email.com"
                        value={this.state.email}
                        required
                    />

                    { /* Message Input */ }
                    <label className="contact-message" htmlFor="message-input">Message</label>
                    <textarea
                        onChange={ e => this.setState({ message: e.target.value })}
                        name="message"
                        className="message-input"
                        type="text"
                        placeholder="Please write your message here"
                        value={this.state.message}
                        required
                    />

                    { /* Buttons */ }
                    <button type="submit" className="contact-submit-button">{ this.state.buttonText }</button>
                </form>
            </div>

        );
    }
}

export default ContactForm;