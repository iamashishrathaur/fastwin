"use client"

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [cookie, setCookie] = useState("");

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  useEffect(() => {
    const retrievedCookie = getCookie('jwt'); // Replace 'yourCookieName' with the actual name of your cookie
    console.log('All Cookies:', document.cookie);
    console.log('Retrieved Cookie:', retrievedCookie);

    if (retrievedCookie) {
      setCookie(retrievedCookie);
    }
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      <p>Cookie: {cookie}</p>
    </div>
  );
};

export default Page;

