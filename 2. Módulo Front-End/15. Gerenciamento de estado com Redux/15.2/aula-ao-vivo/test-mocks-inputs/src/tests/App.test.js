import React from 'react';
import {render, screen, waitForDomChange} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App'

const mockPokemons = {
    cards: [
        {
            "id": "xyp-XY174",
            "name": "Pikachu-EX",
            "nationalPokedexNumber": 25,
            "imageUrl": "https://images.pokemontcg.io/xyp/XY174.png",
            "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY174_hires.png",
            "types": [
              "Lightning"
            ],
            "supertype": "Pokémon",
            "subtype": "EX",
            "hp": "130",
            "retreatCost": [
              "Colorless"
            ],
            "convertedRetreatCost": 1,
            "number": "XY174",
            "artist": "5ban Graphics",
            "rarity": "Common",
            "series": "XY",
            "set": "XY Black Star Promos",
            "setCode": "xyp",
            "text": [
              "When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
            ],
            "attacks": [
              {
                "cost": [
                  "Lightning",
                  "Colorless"
                ],
                "name": "Thunder Shock",
                "text": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
                "damage": "30",
                "convertedEnergyCost": 2
              },
              {
                "cost": [
                  "Lightning",
                  "Lightning",
                  "Colorless"
                ],
                "name": "Mega Thunderbolt",
                "text": "Discard all Energy attached to this Pokémon.",
                "damage": "160",
                "convertedEnergyCost": 3
              }
            ],
            "resistances": [
              {
                "type": "Metal",
                "value": "-20"
              }
            ],
            "weaknesses": [
              {
                "type": "Fighting",
                "value": "×2"
              }
            ]
          }
    ]
}

describe('Testes App.js', () => {
    it('Verifica se renderiza o titulo', () => {
        const {getByRole} = render(<App />);
        const titleApp = getByRole('heading', { name: 'Pokémon Cards'});
        expect(titleApp).toBeInTheDocument();
    })

    it('Verifica se está digitando no input',async () => {

        /* function mockFetch(url){
            return Promise.resolve( {
                json: () => Promise.resolve(mockPokemons)
            } )
        } */

        global.fetch = jest.fn()
            .mockResolvedValue({json: () => Promise.resolve(mockPokemons)})

        render(<App />);
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();

        userEvent.type(searchInput,'pikachu');
        expect(searchInput).toHaveValue('pikachu');

        const button = screen.getByRole('button', { name: 'Pesquisar' });
        userEvent.click(button);

        //await waitForDomChange();
        const pokemonCard = await screen.findByRole('img');
        expect(pokemonCard).toBeInTheDocument();
        expect(pokemonCard).toHaveProperty('src',mockPokemons.cards[0].imageUrl)
    })
})