// Queen atack - posição da rainha:
let posicaoRainhaLinha = 6;
let posicaoRainhaColuna = 5;

// posição peça alvo:
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 4;

let ataqueBemSucedido = false;

if (posicaoRainhaLinha === posicaoPecaLinha || posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueBemSucedido = true;
};

//diagonal superior direita:
for (let supDir = 1; supDir < 8; supDir += 1) {
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
        ataqueBemSucedido = true;
    };
};

//diagonal superior esquerda:
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
    linhaRainha = posicaoRainhaLinha + supEsq;
    colunaRainha = posicaoRainhaColuna - supEsq;

    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    };

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha)) {
    ataqueBemSucedido = true;
    }
};

//diagonal inferior esquerda:
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
    linhaRainha = posicaoRainhaLinha - infEsq;
    colunaRainha = posicaoRainhaColuna - infEsq;

    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    };

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha))
    ataqueBemSucedido = true;
};

//diagonal inferior direita:
for (let infDir = 1; infDir < 8; infDir += 1) {
    linhaRainha = posicaoRainhaLinha - infDir;
    colunaRainha = posicaoRainhaColuna + infDir;

    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    };

    if ((posicaoPecaLinha === linhaRainha) && (posicaoPecaColuna === colunaRainha))
    ataqueBemSucedido = true;
};


console.log(ataqueBemSucedido);