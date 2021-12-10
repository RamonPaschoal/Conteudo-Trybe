const removeBebida = require('./removeSabor');

describe('Remove sabor de bebida', () => {
  it('Remover agua', () => {
    const bebidas = ['Coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(['Coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'agua'));
  });
  it('Remover garapa', () => {
    const bebidas = ['Coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(['Coca-cola', 'sukita', 'agua', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
  });
  it('Remover groselha caso exista', () => {
    const bebidas = ['Coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  })
});