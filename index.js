const displayHistory = document.querySelector(".display-histori");
const display = document.querySelector(".temp-result");
const tempResult = document.querySelector(".hasil-sementara");
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLast = document.querySelector(".last-entity-clear");

let disp1Num = "";
let disp2Num = "";
let result = null;
let lastOperator = "";
let haveDot = false;

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            console.log(e.target.innerText)
            haveDot = true 
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        disp2Num += e.target.innerText;
        display.innerText = disp2Num;
    })
}) 

operator.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        if (!disp2Num) return;
        haveDot = false;
        const operatorName = e.target.innerText;
        if (disp1Num && disp2Num && lastOperator) {
            console.log("Menjalankan operasi matematika")
            mathOperator()
        } else {
            result = parseFloat(disp2Num);
        }    
        clearVar(operatorName);
        lastOperator = operatorName
    })
});
function clearVar(name = "") {
    disp1Num += disp2Num + " " + name + " ";
    displayHistory.innerText = disp1Num;
    display.innerText = "";
    disp2Num = ""
    tempResult.innerText = result;
}
function mathOperator() {
    if (lastOperator === "X") {
        result = parseFloat(result) * parseFloat(disp2Num)
    } else if (lastOperator === "+") {
        result = parseFloat(result) + parseFloat(disp2Num)
    } else if (lastOperator === "-") {
        result = parseFloat(result) - parseFloat(disp2Num)
    } else if (lastOperator === "/") {
        result = parseFloat(result) / parseFloat(disp2Num)
    } else if (lastOperator === "%") {
        result = parseFloat(result) % parseFloat(disp2Num)
    }
}

equal.addEventListener("click", (e) => {
    if (!disp1Num || !disp2Num) return;
    haveDot = false;
    mathOperator()
    clearVar();
    display.innerText = result;
    tempResult.innerText = "";
    disp2Num = result;
    disp1Num = "";
});

clearAll.addEventListener("click", (e) => {
    disp1Num = "";
    disp2Num = "";
    haveDot = false;
    displayHistory.innerText = "";
    display.innerText = "";
    tempResult.innerText = "";
    result = "";
    lastOperator = "";
})

clearLast.addEventListener("click", (e) => {
    display.innerText = ""
    disp2Num = ""
})

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9"
    ) {
        clickButton(e.key);
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperator(e.key);
    } else if (e.key === "*") {
        clickOperator("X");
    } else if (e.key === "Enter"|| e.key === "=") {
        clickEqual();
    }
})
function clickButton(key) {
    numbers.forEach((button) => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function clickOperator(key) {
    operator.forEach((operator) => {
        if (operator.innerText === key) {
            operator.click()
        }
    })
}

function clickEqual(){
    equal.click()
}

const container = document.querySelector('.container');
const content = document.querySelector('.kalkulator');

const containerHeight = window.getComputedStyle(container).height;
const contentHeight = window.getComputedStyle(content).height;

if (parseInt(contentHeight) > parseInt(containerHeight)) {
    content.style.height = `${containerHeight}px`;
}