// Поле ввода
let input = document.querySelector('.input');
// Сохраненная часть выражения для возведения в степень
let power = "";

// "=" button handle
function count_button_clicked() {
    let exp = input.textContent;

    if (input.textContent.includes('^')) {
        let input_numbs = input.textContent.split('^')
        let num = eval(power);
        let pow = +input_numbs[1]
        input.textContent = Math.pow(num, pow);
        power = "";

        return;
    }

    if (exp) {
        input.textContent = eval(exp);
    }
}

// Percent counter
function percent() {
    input.textContent = eval(input.textContent) / 100;
}

// Logs
function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
    }
    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);
    }
}

// Factorial
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

// Constant numbers
function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi") {
        input.textContent += Math.PI.toFixed(8);
    }
    if (name == "e") {
        input.textContent += Math.E.toFixed(8);
    }
}

// Sqrt operations
function sqrt_operations(name) {
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^-1")
        input.textContent = Math.pow(eval(input.textContent), -1);
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

// Rad and gradysi
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
})

// Trigonom funcs
function trigonom(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            // Deg
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // Rad
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }        
    } else if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
            // Deg
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // Rad
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        } 
    } else if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
            // Deg
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // Rad
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }  
    } else if (name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            // Deg
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            // Rad
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        } 
    }
}


// Clear input
function clean() {
    input.textContent = "0";
    power = "";
}

// Out symbol to input
function inp_insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else {
        input.textContent += num;
    }
}

// Delete last symbol from input
function backspace() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);

    if (input.textContent == 0) {
        input.textContent = "0";
    }
}
