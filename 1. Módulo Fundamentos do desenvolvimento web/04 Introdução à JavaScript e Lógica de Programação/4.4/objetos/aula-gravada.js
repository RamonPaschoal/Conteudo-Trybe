// Objetos armazenam diversas variáveis dentro de uma só. Ele é composto pelo nome do objeto em seguido de sua propriedade, caracterizada por {}
let singer = {
    name: 'Milton',
    'last-name': 'Nascimento', // é possível também que, em algumas empresas, a variável pode não ser por cammelCase, mas sim por quebab, onde não deve estar entre ''. A forma como a identificamos também deve ser diferente. Deve ser identificada, no console.log por exemplo, com singer['last-name']
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        City: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

// Para acessar as informações dentro do objeto utiliza-se a varável.propriedade
console.log('O cantor ' + singer.name + ' ' + singer['last-name'] + ' possui ' + singer.age + ' anos.');

// Outra forma de acessar essas informações é:
console.log('O cantor ' + singer['name'] + ' ' + singer['last-name'] + ' possui ' + singer['age'] + ' anos.')

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);