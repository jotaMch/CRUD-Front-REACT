import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import { createMemoryHistory } from 'history';

test('Click the button "contact" for func setForm', () => {
  const setFormMock = jest.fn();

  const { getByText } = render(
    <Router>
      <Header setForm={setFormMock} /> 
    </Router>
  );

  const contactButton = getByText('contact');
  fireEvent.click(contactButton);

  expect(setFormMock).toHaveBeenCalledWith('flex');
});


test('Click the button "About" for router initial ', () => {
  const setFormMock = jest.fn();
  const history = createMemoryHistory();

  const { getByText } = render(
    <Router history={history}>
      <Header setForm={setFormMock} />
    </Router>
  );

  const aboutButton = getByText('About');
  fireEvent.click(aboutButton);

  // Verifica se a navegação para a rota principal ocorreu
  expect(history.location.pathname).toBe('/');
});

