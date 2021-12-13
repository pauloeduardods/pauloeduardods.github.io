import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

const renderWithRouter = (ui) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={ history }>{ui}</Router>,
    ),
    history,
  };
};

export default renderWithRouter;
