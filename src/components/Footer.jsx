import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Message submitted: ${message}`);
  };

  return (
    <></>
  );
};

export default Footer;
