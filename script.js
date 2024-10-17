function add(num1,num2){
    return (num1+num2);
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(operator,num1,num2){
    let result;
    
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(num1,num2);
    if(operator === "+"){
        result = add(num1,num2);
    }else if(operator === "-"){
        result = subtract(num1,num2);
    }else if (operator === "*"){
        result = multiply(num1,num2);
    }else if (operator === "/"){
        result = divide(num1,num2); 
    }
    console.log(result);
    return result;
}
changeDisplay(0);
let firstNumber="",operator="", displayContent="";

const btnNumber = document.querySelectorAll(".number"); //add number to display and saves the number to 
btnNumber.forEach((numberSelected) => {
    numberSelected.addEventListener("click", () =>{
        displayContent+=numberSelected.textContent;
        changeDisplay(displayContent);
    });
});

const btnOperation = document.querySelectorAll(".operation");
btnOperation.forEach((operationSelected) =>{
    operationSelected.addEventListener("click",() =>{
        if(displayContent === "" ){
            displayContent = "0";
        }
        if(firstNumber === "" && operator === ""){
        firstNumber = displayContent;
        displayContent ="";
        changeDisplay(0);
        operator = operationSelected.textContent;
        }else{
            operator = operationSelected.textContent;
            btnEquals.click();
        }
        
    });
});

const btnEquals = document.querySelector(".equals");
btnEquals.addEventListener("click",()  => {
    if (displayContent === "" || undefined){
        displayContent = "0";
    }
    if(displayContent ==="0" && operator === "/"){
        changeDisplay("Cannot divide by zero");
        displayContent = "0";
        firstNumber ="";
        operator = "";
        return;
    }
    displayContent= operate(operator,firstNumber,displayContent).toString();
    firstNumber = displayContent;
    let rounded = Number(firstNumber).toFixed(2);
    let finalDisplay = parseFloat(rounded) === parseInt(rounded) ? parseInt(rounded) : rounded;
    changeDisplay(finalDisplay);
    displayContent ="";
    operator ="";
});

const btnClear = document.querySelector(".clear");
btnClear.addEventListener("click",() => {
    displayContent = "";
    firstNumber ="";
    operator = "";
    changeDisplay(0);
});

function changeDisplay(displayContent){
    const display = document.querySelector(".innerDisplay");
    display.textContent = displayContent;
}