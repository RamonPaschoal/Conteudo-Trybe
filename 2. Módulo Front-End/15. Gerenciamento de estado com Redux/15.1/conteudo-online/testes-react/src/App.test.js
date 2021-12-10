import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do e-mail', () => {
  beforeEach(() => { // Utilizando o beforeEach, não é necessário reenderizar todos os testes. Só é preciso usar o 'screen' antes de chamar a função.
    render(<App />)
  })
  it('Verifica que há um input de email na tela', () => {
    // 1ª Etapa - Acessar os elementos na sua tela:
    // const { getByLabelText } = render(<App />); // getByLabelText é um seletor. Esse seletor vai ser executado no <App />
    const inputEmail = screen.getByLabelText('Email'); // Essa linha diz para o teste ir no <App/> e buscar um Label com o texto 'Email'

    // 2ª Etapa - Interagir com eles (se houver necessidade)

    // 3ª Etapa - Fazer seu teste:
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica que há dois botão', () => {
    // 1ª Etapa - Acessar os elementos na sua tela:
    // const { getAllByRole } = render(<App />);
    const button = screen.getAllByRole('button');

    // 3ª Etapa - Fazer seu teste:
    expect(button.length).toBe(2);
  });

  it('Verifica que há um botão "Enviar"', () => {
    // 1ª Etapa - Acessar os elementos na sua tela:
    // const { getByTestId } = render(<App />);
    const button = screen.getByTestId('id-send');

    // 3ª Etapa - Fazer seu teste:
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });

  it('Verifica que ao inserir um email e ao clicar "Enviar", o email aparece na tela', () => {
    // 1ª Etapa - Acessar os elementos na sua tela:
    // const { getByTestId ,getByLabelText } = render(<App />);
    const emailInput = screen.getByLabelText('Email');
    const sendButton = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');

    // 2ª Etapa - Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: 'jonas@teste.com' } }) //Essa função simula uma ação do usuário, como inserir o e-mail e clicar no botão Enviar. Essa função recebe dois parâmetros, o primeiro é o elemento que vai receber o evento, o segundo é um objeto que representa o evento. O que está acontecendo exatamente é que o fireEvent está disparando a função change para o elemento emailInput, na qual vai colocar um e-mail para ser testado. Explicação detalhada no conteúdo do dia 15.1 no vídeo "Testando eventos" aos 10 minutos.
    fireEvent.click(sendButton) // na tag que contem o id "id-email-user" (input) recebe uma função de onClick, logo recebe a funçao click
   
    // 3ª Etapa - Fazer seu teste:
    expect(emailInput.value).toBe(''); // Verifica se o input voltou a ficar vazio
    expect(userEmail.textContent).toBe('Valor: jonas@teste.com'); // Verifica se o valor foi passado
  });
});
