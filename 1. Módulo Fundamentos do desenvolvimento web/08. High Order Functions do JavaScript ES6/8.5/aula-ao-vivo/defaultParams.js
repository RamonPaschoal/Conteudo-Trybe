const clientsHello = (hello = 'Pessoa Estudante') => { // caso não receba nenhum parâmetro hello recebera 'Pessoa Estudante'.
    console.log(`Olá, ${hello}`)
};

clientsHello();
clientsHello('May the force be with you');