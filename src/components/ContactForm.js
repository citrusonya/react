import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        email: '',
        emailError: null,
        offer: '',
        offerError: null
    };

    emailChangeHandler = event => {
        const email = event.target.value;
        this.setState({
            email,
            emailError: !email
        });
    };

    offerChangeHandler = event => {
        const offer = event.target.value;
        this.setState({
            offer,
            offerError: !offer
        });
    };

    submitHandler = event => {
        event.preventDefault();

        const { email, offer } = this.state;

        if (email && offer) {
            this.setState({
                email: '',
                emailError: false,
                offer: '',
                offerError: false
            });
            this.props.onSubmit();
            return;
        }

        this.setState({
            emailError: !email,
            offerError: !offer
        });
    };

    render() {
        const { email, emailError, offer, offerError } = this.state;

        return (
            <form className='container w-50 mt-3' onSubmit={ this.submitHandler }>
                <div className='mb-3'>
                    <input className='form-control'
                        value={ email }
                        onChange={ this.emailChangeHandler }
                        placeholder='Email address'
                    />
                    { emailError ? (
                        <div className='border border-danger alert alert-danger' role='alert'>Required field</div>
                    ) : null }
                </div>
                <div className='mb-3'>
                    <textarea className='form-control'
                        rows='5'
                        value={ offer }
                        onChange={ this.offerChangeHandler }
                        placeholder='Some text'
                    />
                    { offerError ? (
                        <div className='border border-danger alert alert-danger' role='alert'>Required field</div>
                    ) : null }
                </div>
                <button className='btn btn-primary btn-primary--send' type='submit'>
                    Send
                </button>
            </form>
        );
    }
}

export default ContactForm;
