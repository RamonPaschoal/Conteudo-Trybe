const newUser = (id, name, email) => {
    return {
        id: id,
        name: name,
        email: email,
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//Podemos reduzir dessa forma:

const newUser = (id, name, email) => {
    return {
        id,
        name,
        email,
    };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//=================================================================================

// Exercício para Fixar:

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});
  
console.log(getPosition(-19.8157, -43.9542));