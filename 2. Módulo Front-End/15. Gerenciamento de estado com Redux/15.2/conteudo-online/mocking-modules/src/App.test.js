import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

test('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke)
  });

  const { findByText } = render(<App />);
  await findByText('Whiteboards... are remarkable.');
});