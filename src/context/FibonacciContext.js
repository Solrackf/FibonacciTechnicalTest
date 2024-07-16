import React, { createContext, useState } from 'react';

export const FibonacciContext = createContext();

export const FibonacciProvider = ({ children }) => {
  const [series, setSeries] = useState([]);

  const addSeries = (newSeries) => {
    setSeries([...series, newSeries]);
  };

  return (
    <FibonacciContext.Provider value={{ series, addSeries }}>
      {children}
    </FibonacciContext.Provider>
  );
};
