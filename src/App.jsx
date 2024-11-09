import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hmf0nyx', // Replace with your EmailJS service ID
        'template_6926u79', // Replace with your EmailJS template ID
        form.current,
        'FFxVo3bdJA9c2l1-b' // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log('Email sent successfully!');
          e.target.reset(); // Clear the form upon success
        },
        (error) => {
          console.log('Email send failed...', error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="text-center">
          <img
            className="w-20 h-20 mx-auto rounded-full mb-4 bg-gray-200"
            src="images/Ellipse.png"
            alt="Profile"
          />
          <h1 className="text-2xl font-bold text-blue-700">Welcome to LongShoreMan Friend!</h1>
          <p className="text-gray-500 mt-1">Send a message to inform the staff of your arrival</p>
        </div>

        <form ref={form} className="mt-6" onSubmit={sendEmail}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="user_name"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
            <label htmlFor="subject" className="block text-gray-700 font-semibold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              name="user_subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your subject"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-12 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSignupForm;
