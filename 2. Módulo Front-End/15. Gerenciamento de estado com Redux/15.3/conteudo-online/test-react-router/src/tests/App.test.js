import renderWithRouter from '/renderWithRouter'
import { fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('teste da aplicação toda', () => {
  it('Verifica se, após a renderização, aparece a página inicial', () => {
    const { getByText } = renderWithRouter(<App />);

    const home = getByText(/Você está na página inicial/i);
    expect(home).toBeInDocument();
  });

  it('Verifica se reinderiza o componente About', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/i);
    expect(aboutAll).toBeInDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });
});