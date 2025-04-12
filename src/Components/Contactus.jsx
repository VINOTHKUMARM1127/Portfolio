import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('vinothkumarm1127', 'temp1127', form.current, {
        publicKey: 'sPqSnFHboBAhwkjun',
      })
      .then(
        () => {
          alert('Mail Send');
          form.current.reset();
        },
        (error) => {
            alert('Mail Did not Send');
        },
      );
  };

  return (
    <section>
    <div className="text-center text-[2em] font-bold mt-6 mb-12">Contact Us</div>
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl space-y-4 text-black"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      <div>
        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea
          name="message"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
        />
      </div>
  
      <input
        type="submit"
        value="Send"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
      />
    </form>
    </section>
  );
  
};