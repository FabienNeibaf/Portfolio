import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';
import Toast from './Toast';

emailjs.init('user_4osATFQVjKl2Z0155XrqM');

const Error = ({ msg }) => (
  <div>
    {msg ? <p className="error">{msg}</p> : null}
  </div>
);

const initalState = {
  email: '',
  message: '',
  toastMsg: null,
  errors: { email: null, message: null },
};

const Contact = () => {
  const [state, setState] = useState(initalState);

  const showToast = (msg) => {
    setState((prevState) => ({ ...prevState, toastMsg: msg }));
    setTimeout(() => setState(initalState), 3000);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: value === '' ? 'This field is required' : null,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = state;

    if (email === '' || message === '') {
      setState((prevState) => ({
        ...prevState,
        errors: {
          email: email === '' ? 'This field is required' : null,
          message: message === '' ? 'This field is required' : null,
        },
      }));
    } else {
      const templateParams = {
        reply_to: email,
        from_email: email,
        message,
      };

      emailjs.send('gmail', 'template_moSKSqTG', templateParams)
        .then(() => showToast('Email sent'))
        .catch(() => showToast('An error occured'));
    }
  };

  return (
    <section id="Contact">
      <h2 className="title">Let&apos;s discuss about your next project</h2>
      {state.toastMsg ? <Toast msg={state.toastMsg} /> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <Error msg={state.errors.email} />
        </label>
        <label htmlFor="message">
          <span>Message</span>
          <textarea
            name="message"
            value={state.message}
            placeholder="Write me a message"
            onChange={handleChange}
          />
          <Error msg={state.errors.message} />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

Error.defaultProps = {
  msg: null,
};

Error.propTypes = {
  msg: PropTypes.string,
};

export default Contact;
