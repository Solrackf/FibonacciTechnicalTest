import fibonacciReducer, { generateSeries } from './fibonacciSlice';

test('Estado inicial', () => {
  expect(fibonacciReducer(undefined, {})).toEqual({
    series: [],
    history: [],
    status: 'idle',
    error: null,
  });
});

test('Esto debería generar la serie con la hora 15:49:08', () => {
  const previousState = {
    series: [],
    history: [],
    status: 'idle',
    error: null,
  };

  const expectedSeries = [241, 149, 92, 57, 35, 22, 13, 9, 4];

  expect(fibonacciReducer(previousState, generateSeries({ x: 49, y: 8, n: 8 }))).toEqual({
    series: expectedSeries,
    history: [{ series: expectedSeries, time: expect.any(String) }],
    status: 'idle',
    error: null,
  });
});
