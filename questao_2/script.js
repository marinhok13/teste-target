function fibonacciSequence(num) {
    let penultimo = 0;
    let ultimo = 1;
    let temp;

    while (ultimo <= num) {
        if (ultimo === num) {
            return true;
        }
        temp = penultimo + ultimo;
        penultimo = ultimo;
        ultimo = temp;
    }

    return false;
}

function checkFibonacci() {
    const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

    if (fibonacciSequence(numero)) {
            return alert(numero + " pertence à sequência de Fibonacci.");
        } else {
            return alert(numero + " não pertence à sequência de Fibonacci.");
        }
}

checkFibonacci();