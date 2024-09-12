const faturamento = [
    { "dia": 1, "valor": 5000 },
    { "dia": 2, "valor": 7000 },
    { "dia": 3, "valor": 8000 },
    { "dia": 4, "valor": 2000 },
    { "dia": 5, "valor": 6000 },
    { "dia": 6, "valor": 0 }, // Dia sem faturamento
    
];

let totalFaturamento = 0;
let valorMinimo = Number.MAX_VALUE;
let valorMaximo = Number.MIN_VALUE;
let totalDiasComFaturamento = 0;

// Calcula o total, menor e maior valor
faturamento.forEach(({ valor }) => {
    if (valor > 0) {
        totalFaturamento += valor;
        if (valor < valorMinimo) valorMinimo = valor;
        if (valor > valorMaximo) valorMaximo = valor;
    }
});

// Calcula a média
totalDiasComFaturamento = faturamento.filter(({ valor }) => valor > 0).length;
const mediaFaturamento = totalFaturamento / totalDiasComFaturamento;

// Conta dias com faturamento acima da média
const diasAcimaDaMedia = faturamento.filter(({ valor }) => valor > mediaFaturamento).length;

console.log(`Menor valor de faturamento: R$${valorMinimo.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${valorMaximo.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
