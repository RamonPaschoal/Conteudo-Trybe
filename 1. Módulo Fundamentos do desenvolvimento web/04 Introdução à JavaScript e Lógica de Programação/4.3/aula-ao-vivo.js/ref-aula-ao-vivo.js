// posicao rainha
let posicaoRainhaLinha = 5;
let posicaoRainhaColuna = 1;

// posicao alvo
let alvoLinha = 7;
let alvoColuna= 3;

let ataquePossivel = false;
//Ataque horizontal/ vertical;
if (posicaoRainhaLinha === alvoLinha || posicaoRainhaColuna === alvoColuna) {
    ataquePossivel = true;
};

//diagonal superior direita:
for (let supDir = 1; supDir < 8; supDir += 1) {
    let linhaRainha = posicaoRainhaLinha + supDir;
    let colunaRainha = posicaoRainhaColuna + supDir;

    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    };

    if ((alvoLinha === linhaRainha) && (alvoColuna === colunaRainha)) {
        ataquePossivel = true;
    };
};

console.log(ataquePossivel);
//diagonal superior esquerda:
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
    let linhaRainha = posicaoRainhaLinha + supEsq;
    let colunaRainha = posicaoRainhaColuna - supEsq;

    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    };

    if ((alvoLinha === linhaRainha) && (alvoColuna === colunaRainha)) {
        ataquePossivel = true;
    };
};

//diagonal inferior direita:
for (let infDir = 1; infDir < 8; infDir += 1) {
    let linhaRainha = posicaoRainhaLinha - infDir;
    let colunaRainha = posicaoRainhaColuna + infDir;

    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    };

    if ((alvoLinha === linhaRainha) && (alvoColuna === colunaRainha)) {
        ataquePossivel = true;
    };
};

//diagonal inferior direita:
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
    let linhaRainha = posicaoRainhaLinha - infEsq;
    let colunaRainha = posicaoRainhaColuna - infEsq;

    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    };

    if ((alvoLinha === linhaRainha) && (alvoColuna === colunaRainha)) {
        ataquePossivel = true;
    };
};


console.log(ataquePossivel);