import React from 'react';
import App from '../App';
import { fireEvent, render, screen, waitForDomChange } from '@testing-library/react' 
import userEvent from '@testing-library/user-event'

describe('Testando o componente App.js', () => {

    beforeEach(()=>{
       render(<App />)
    })

   test('Verifica se aparece a msg "Carregando..."', () => {
        const loadingMessage = screen.getByText('Carregando...')
        expect(loadingMessage).toBeDefined()
   })

   test('Verifica se aparece o card de filme',async () => {
       await waitForDomChange()
       const titleText = screen.getByText(/kInGsgLaive/i);
       expect(titleText).toBeDefined();
   })

   test('Clica no botao Ver Detalhes', async () => {
        await waitForDomChange();
        const link = screen.getByTestId(/kInGsgLaive/i)
        //expect(link).toBeDefined();
        userEvent.click(link);
       // const loadingMessage = screen.getByText('Carregando...')
        //expect(loadingMessage).toBeDefined()

        await waitForDomChange();
        const title = screen.getByText(/Kingsglaive/i)
        expect(title).toBeDefined()
   })

})