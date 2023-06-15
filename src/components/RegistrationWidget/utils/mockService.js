export function mockService(callback, minDelay = 1000, maxDelay = 3000) {
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  setTimeout(() => {
    const result = 'Mock service response';
    callback(result);
  }, delay);
}
