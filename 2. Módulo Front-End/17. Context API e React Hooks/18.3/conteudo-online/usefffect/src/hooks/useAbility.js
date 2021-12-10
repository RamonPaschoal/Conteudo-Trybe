import { useState, useEffect } from 'react';

const useAbility = () => {
  const [pokeUrl, setPokeUrl] = useState('');
  const [abilities, setAbilities] = useState('');
  
  useEffect(() => {
    const getAbilities = async () => {
      if(pokeUrl) {
        const {abilities: abilitiesList} = await fetch(pokeUrl).then(data => data.json());
        abilitiesList.map(({ abilitiy: {name} }) => name)

        setAbilities(abilitiesList);
      }
    }

    getAbilities()
  }, [pokeUrl])

  return [abilities, setPokeUrl]
}

export default useAbility;