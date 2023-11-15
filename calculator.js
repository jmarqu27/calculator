
let screenText = document.getElementById('screen');

// variables for each calculator button
let clearButton = document.getElementById('clear-button');
let sevenButton = document.getElementById('seven-button');
let eightButton = document.getElementById('eight-button');
let nineButton = document.getElementById('nine-button');
let divisionButton = document.getElementById('division-button');
let fourButton = document.getElementById('four-button');
let fiveButton = document.getElementById('five-button');
let sixButton = document.getElementById('six-button');
let multiplyButton = document.getElementById('multiply-button');
let oneButton = document.getElementById('one-button');
let twoButton = document.getElementById('two-button');
let threeButton = document.getElementById('three-button');
let subtractButton = document.getElementById('subtract-button');
let zeroButton = document.getElementById('zero-button');
let decimalButton = document.getElementById('decimal-button');
let equalButton = document.getElementById('equal-button');
let addButton = document.getElementById('add-button');


const updateScreen = (event) => {
    switch (event) {
        case 1:
            console.log("1 button");
            screenText.innerHTML = '1';
            break;
        case 2:
            console.log("1 button");
            screenText.innerHTML = '2';
            break;
        case 3:
            screenText.innerHTML = '3';
            break;
        case 4:
            screenText.innerHTML = '4';
            break;
        case 5:
            screenText.innerHTML = '5';
            break;
        case 6:
            screenText.innerHTML = '6';
            break;
        case 7:
            screenText.innerHTML = '7';
            break;
        case 8:
            screenText.innerHTML = '8';
            break;
        case 9:
            screenText.innerHTML = '9';
            break;
        default:

    }
    
}


sevenButton.addEventListener('click', updateScreen);