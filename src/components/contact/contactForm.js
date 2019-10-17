import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as yup from 'yup';

// EmailJS template params
let template_params = {
    'senderEmail': 'senderEmail_value',
    'senderName': 'senderName_value',
    'message': 'message_value'
}
 
// EmailJS consts
const service_id = 'default_service';
const template_id = 'normanedcontactform';
const emailJSUserID = 'user_cVacpT4HoGWc7Omos0X8P'

// Yup schema
const schema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(70, 'Name cannot be over 70 characters')
        .required('Name is required'),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    message: yup.string()
        .min(10, 'Message must be at least 10 characters')
        .max(600, 'Message cannot be over 600 characters')
        .required('Message is required')
});

export const legendMessage = {
    default: 'Contact',
    messageSent: 'Message sent!',
    messageSentError: 'Error sending message'
}

// Submit method
const handleSubmit = async (values, actions, setLegend) => {
    const { name, email, message } = values;
    const { setStatus, setSubmitting, setErrors, resetForm } = actions;

    template_params['senderName'] = name;
    template_params['senderEmail'] = email;
    template_params['message'] = message;

    try {
        await emailjs.send(service_id, template_id, template_params, emailJSUserID);

        resetForm();
        setLegend(legendMessage.messageSent)
    }
    catch(error) {
        setSubmitting(false);
        setErrors(JSON.stringify(error));
        setStatus({
            msg: legendMessage.messageSentError
        });
        setLegend(legendMessage.messageSentError)
    }
}

export const ContactForm = () => {
    const [legend, setLegend] = useState(legendMessage.default);

    const handleBlur = () => {
        setLegend(legendMessage.default)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    name: '',
                    email: '',
                    message: ''
                }}
                validationSchema = {schema}
                onSubmit = {(values, actions) => handleSubmit(values, actions, setLegend)}
                >
                    {({ errors }) => (
                    <Form id="contact-form" role="form">
                        <fieldset>
                            <h1>{ legend }</h1>
                            { /* Name Input */ }
                            <label for name="name">Name</label>
                            <Field
                                type="name"
                                name="name"
                                placeholder="Your name"
                                onBlur={handleBlur}
                            />
                            <ErrorMessage
                                name="name"
                                component="span"
                            />

                            { /* Email Input */ }
                            <label for name="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your email"
                                onBlue={handleBlur}
                            />
                            <ErrorMessage
                                name="email"
                                component="span"
                            />

                            { /* Message Input */ }
                            <label for name="message">Message</label>
                            <Field
                                type="message"
                                name="message"
                                placeholder="Your message"
                                component="textarea"
                                onBlue={handleBlur}
                            />
                            <ErrorMessage
                                name="message"
                                component="span"
                            />

                            <button
                                id="submit"
                                name="submit"
                                type="submit"
                            >
                                Send
                            </button>
                        </fieldset>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;