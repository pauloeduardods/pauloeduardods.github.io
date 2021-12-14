import React from 'react';
// import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import App from '../App';

test('renders learn react link', async () => {
  renderWithRouter(<App />);
  // const { history } = renderWithRouter(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // history.push('/aaaa');
  // console.log(JSON.stringify(history, null, '\t'));
  // const llinkElement = await screen.findByText('Not found');
  // expect(llinkElement).toBeInTheDocument();
});
