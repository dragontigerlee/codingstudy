//function calculate(command, a, b)
//command : [add, subtract, divide, multiply, remainder]

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return console.log(`add = ${a + b} `);
        case 'subtract':
            return console.log(`subtract= ${a - b}`);
        case 'divide':
            return console.log(`divide= ${a / b}`);
        case 'multiply':
            return console.log(`multiply = ${a * b}`);
        case 'remainder':
            return console.log(`remainder = ${a % b}`);
        default:
            return console.log(`false...`);
    }
}

calculate('add', 2 ,1);
calculate('subtract', 2 ,1);
calculate('divide', 2 ,1);
calculate('multiply', 2 ,1);
calculate('remainder', 2 ,1);