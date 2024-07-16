import React from 'react';
import { useSelector } from 'react-redux';

const FibonacciList = () => {
  const series = useSelector((state) => state.fibonacci.series);
  const history = useSelector((state) => state.fibonacci.history);

  return (
    <section className='w-full'>
      <section className='py-4'>
        <h2>Serie Fibonacci:</h2>
        <div>{series.join(', ')}</div>
      </section>
      <h2>Historial:</h2>
      <ul className='w-full overflow-y-scroll'>
        {history.map((entry, index) => (
          <li key={index}>{entry.time}:<br/> {entry.series.join(', ')}</li>
        ))}
      </ul>
    </section>
  );
};

export default FibonacciList;
