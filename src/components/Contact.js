import React, { useState } from 'react';
import './style.css'; // Make sure to import your CSS file

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Optionally clear the form after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank you, {name}! Your message has been sent.</h2>
                    <p>Email: {email}</p>
                    <p>Message: {message}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <h2>Contact Us</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
