// Exercício 1:

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

  test('verifica se a função transforma tudo em uppercase', () => {
    uppercase('jonas', (str) => {
      expect(str).toBe('JONAS');
    })
  });

// ========================================================================

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

// Exercício 2:

describe('Test getUserName', () => {
  describe('when id user exist', () => {
    it('find validy use ID', () => {
      expect.assertions(1);
      getUserName(4).then(data => expect(data).toBe('Mark'));
    })
  })
})

describe('test getUserName fail', () => {
  describe('when id user do not exist', () => {
    it('find incalidy user id', () => {
      expect.assertions(1);
      getUserName(1).catch(data => expect(data).toBe({ error: 'User with 1 not found.' }));
    })
  })
})

// Exercício 3:

describe('Teste da função com Async/Await', () => {
  test('teste caso ache id válido', async () => {
    expect.assertions(1);

    const data = await getUserName(5)

    expect(data).toBe('Paul')
  });

  test('Teste caso não ache id válido com Async/Await', async () => {
    try{
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  })
})

// =============================================================

//Exercício  6:

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

//Exercício  6.2:

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const findAnimal = Animals.filter(animal => animal.name === name);
    if(findAnimal.length > 0) {
      return resolve(findAnimal[0])
    }
    return reject('Nenhum animal com esse nome!')
  }));
  
  const getAnimal = (name) => {  
    return findAnimalByName(name).then(animal => animal);
  };
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

//Exercício  6.2:

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const findAnimalAge = Animals.filter(animal => animal.age === age);
    if(findAnimalAge.length > 0) {
      return resolve(findAnimalAge[0])
    }
    return reject('Nenhum animal com esse nome!')
  }));
  
  const getAnimalAge = (name) => {  
    return findAnimalByAge(name).then(animal => animal);
  };


// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalAge(1).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAge(12).catch(error =>
        expect(error).toBe('Nenhum animal com esse nome!')
      );
    });
  });
});