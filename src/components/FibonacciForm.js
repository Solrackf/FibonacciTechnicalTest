import React from 'react';
import { useDispatch } from 'react-redux';
import { generateSeries, setError } from '../features/fibonacciSlice';

const FibonacciForm = () => {
  const dispatch = useDispatch();

  const handleGenerate = () => {
    const now = new Date();
    const x = now.getMinutes();
    const y = now.getSeconds();
    const n = now.getSeconds();
    if (x < 0 || y < 0 || n < 0) {
      dispatch(setError('Invalid input'));
    } else {
      dispatch(generateSeries({ x, y, n }));
    }
  };

  return <button onClick={handleGenerate} className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>
    Generar Serie Fibonacci
    </button>;
};

export default FibonacciForm;
