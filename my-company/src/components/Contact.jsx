import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    return (
        <div style={{ padding: '2rem' }}>
        <h1>Contact Us</h1>
        <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ margin: '0.5rem 0', padding: '0.5rem' }}
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ margin: '0.5rem 0', padding: '0.5rem' }}
            />
            <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ margin: '0.5rem 0', padding: '0.5rem' }}
            />
            <button
            type="button"
            style={{ padding: '0.5rem', backgroundColor: '#282c34', color: 'white', border: 'none' }}
            >
            Submit
            </button>
        </form>
        </div>
    );
};

export default Contact;
