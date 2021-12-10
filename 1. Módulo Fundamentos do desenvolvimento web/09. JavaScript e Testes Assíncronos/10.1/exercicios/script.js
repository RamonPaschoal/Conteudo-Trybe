const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Parte 2:

function encode(toEncode) {
  let codificado = '';
  for (let key in toEncode) {
    if (toEncode[key] === 'a' || toEncode[key] === 'e' || toEncode[key] === 'i' || toEncode[key] === 'o' || toEncode[key] === 'u') {
      switch (toEncode[key]) {
      case 'a':
        codificado += '1';
        break;
      case 'e':
        codificado += '2';
        break;
      case 'i':
        codificado += '3';
        break;
      case 'o':
        codificado += '4';
        break;
      case 'u':
        codificado += '5';
        break;
      }
    } else {
      codificado += toEncode[key];
    }
  }
  return codificado;
}

function decode(toDecode) {
  let decodificado = '';
  for (let key in toDecode) {
    if (toDecode[key] === '1' || toDecode[key] === '2' || toDecode[key] === '3' || toDecode[key] === '4' || toDecode[key] === '5') {
      switch (toDecode[key]) {
      case '1':
        decodificado += 'a';
        break;
      case '2':
        decodificado += 'e';
        break;
      case '3':
        decodificado += 'i';
        break;
      case '4':
        decodificado += 'o';
        break;
      case '5':
        decodificado += 'u';
        break;
      }
    } else {
      decodificado += toDecode[key];
    }
  }
  return decodificado;
}

module.exports = {
  sum, 
  encode,
  decode
};