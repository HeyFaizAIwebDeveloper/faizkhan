"use client";

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      const intervalId = setInterval(() => {
        const currentTime = moment.tz('Asia/Kolkata').format('hh:mm:ss A');
        setCurrentTime(currentTime);
      }, 1000); // update every 1 second
  
      return () => clearInterval(intervalId);
    }, []);
    
  return (
    <footer className=' text-xs font-light flex flex-col  md:flex-row md:justify-between py-4  space-y-2.5 md:space-y-0' >
        <p>Designed and developed by Faiz Khan</p>
        <p>Lucknow : {currentTime}</p>
        <p>©️ 2024 All RIGHTS ARE RESERVED</p>

    </footer>
  );
}

export default Footer;
