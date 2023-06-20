//Homework1
function add(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function multiplide(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

async function calculator(a,b,operator){
    var result;
    switch(operator){
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = minus(a,b);
            break;
        case "*":
            result = multiplide(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
        default:
            throw new Error("Wrong operator!");

    }
    return result;
}

async function runCalculator(){
    const a=5;
    const b=4;
    const pheptoancong = "+";
    const pheptoantru = "-";

    console.log(a);
    console.log(b);

    var result1 = await calculator(a,b,pheptoancong);
    
    var result2 = await calculator(a,b,pheptoantru);

    console.log(`Result1: ${result1}`);
    console.log(`Result2: ${result2}`);
}

runCalculator();
