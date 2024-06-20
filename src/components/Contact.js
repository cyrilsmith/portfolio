import React, { useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contacts', formData)
      .then(response => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };

  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translate3d(100px,0,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { tension: 200, friction: 20 }
  });

  return (
    <animated.section style={slideIn} id="contact" className="p-8 bg-gray-100">
      <h2 className="text-4xl mb-4 font-bold">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
      </form>
    </animated.section>
  );
}

export default Contact;
