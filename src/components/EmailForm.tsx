'use client';

import React from 'react';

export default function SendEmailButton() {
  const sendEmail = async () => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'aimahusnain@gmail.com',
        message: 'This is a test email from tahaamindob2013@gmail.com',
      }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      const result = await response.json();
      alert(`Failed to send email: ${result.error}`);
    }
  };

  return (
    <button onClick={sendEmail}>Send Email</button>
  );
}
