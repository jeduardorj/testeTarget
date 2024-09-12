function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0;
    let b = 1;
    
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return a === num;
}

// Teste com um número informado
let number = 21; // Pode-se alterar este valor para testar outros números
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
