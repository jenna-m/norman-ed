// Not yet fully functioning; still need to add name and email fields

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
        message: '',
        formSubmitted: false
    };

    handleCancel = this.handleCancel.bind(this);
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    static sender = 'sender@example.com';

    handleCancel() {
        this.setState({
            message: ''
        });
      }
    
    handleChange(event) {
    this.setState({
        message: event.target.value
    });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: template,
            REACT_APP_EMAILJS_USERID: user,
        } = this.props.env;

        this.sendMessage(
            template,
            this.sender,
            receiverEmail,
            this.state.message,
            user
        );

        this.setState({
            formSubmitted: true
        });
    }

    sendMessage(templateId, senderEmail, receiverEmail, message, user) {
        window.emailjs.send('default_service', templateId, {
            senderEmail, receiverEmail, message
        },
        user
        )
        .then(res => {
            this.setState({
                formEmailSent: true
            });
        })
        // Error handling
        .catch(err => console.error('Failed to send message. Error: ', err));
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <textarea 
                    className="text-input"
                    id="message-entry"
                    name="message-entry"
                    onChange={this.handleChange}
                    placeholder="Enter your message here"
                    required
                    value={this.state.message}
                />
                <div className="button-group">
                    <button className="button-cancel" onClick={this.handleCancel}>
                        Cancel
                    </button>
                    <input type="submit" value="Submit" className="button-submit" />
                </div>
            </form>
        );
    }
}

ContactForm.propTypes = {
    env: PropTypes.object.isRequired
};