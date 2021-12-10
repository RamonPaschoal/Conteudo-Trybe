const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
const customerInfo = (order) => {
  const deliveryPerson1 = order.order.delivery.deliveryPerson;
  const receptPersont = order.name;
  const phoneReceptPerson = order.phoneNumber;
  const addressReceptPerson = order.address.street;
  const comp1ReceptPerson = order.address.number;
  const comp2ReceptPerson = order.address.apartment;

  console.log(`Olá ${deliveryPerson1}, entrega para: ${receptPersont}, Telefone: ${phoneReceptPerson}, ${addressReceptPerson}, N: ${comp1ReceptPerson}, AP: ${comp2ReceptPerson}`)
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  console.log(order);
  console.log(`Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`)
}

orderModifier(order);