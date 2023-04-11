const fibonacciSequence = (num) => {
    let fibonacci = [0,1];

    while (fibonacci[fibonacci.length - 1] < num) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }

    return fibonacci;
}

const checkNumber = (num) => {
    const fib = fibonacciSequence(num);
    if (fib.includes(num)) {
        console.log(`${num} pertence à sequencia de Fibonacci`);
    } else {
        console.log(`${num} não pertence à sequencia de Fibonacci`);
    }
}

checkNumber(54);
checkNumber(55);