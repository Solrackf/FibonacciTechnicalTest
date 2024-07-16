import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='Clock' className='w-full p-6'>
      <h1 className='text-white font-semibold text-center text-3xl
        md:text-left md:font-bold
      '>La hora actual es:</h1>
      <p className='text-6xl py-5 px-0 text-center font-black
      md:text-[8rem] md:text-right'>
        {time.toLocaleTimeString()}
      </p>
    </section>
  )
};

export default Clock;
