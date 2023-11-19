
let screenText = document.getElementById('screen');
// Event targets for each calculator button
let clearButton = document.getElementById('clear-button');
let divisionButton = document.getElementById('division-button');
let sevenButton = document.getElementById('seven-button');
let eightButton = document.getElementById('eight-button');
let nineButton = document.getElementById('nine-button');
let multiplyButton = document.getElementById('multiply-button');
let fourButton = document.getElementById('four-button');
let fiveButton = document.getElementById('five-button');
let sixButton = document.getElementById('six-button');
let subtractButton = document.getElementById('subtract-button');
let oneButton = document.getElementById('one-button');
let twoButton = document.getElementById('two-button');
let threeButton = document.getElementById('three-button');
let addButton = document.getElementById('add-button');
let zeroButton = document.getElementById('zero-button');
let decimalButton = document.getElementById('decimal-button');
let equalButton = document.getElementById('equal-button');


const updateScreen = (event) => {
    // switch (event) {
    //     case 1:
    //         console.log("1 button");
    //         break;
    //     case 2:
    //         console.log("2 button");
    //         screenText.innerHTML = '2';
    //         break;
    //     case 3:
    //         screenText.innerHTML = '3';
    //         break;
    //     case 4:
    //         screenText.innerHTML = '4';
    //         break;
    //     case 5:
    //         screenText.innerHTML = '5';
    //         break;
    //     case sixButton:
    //         screenText.innerHTML = '6';
    //         console.log("6 button");
    //         break;
    //     case sevenButton:
    //         screenText.innerHTML = '7';
    //         console.log("7 button");
    //         break;
    //     case 8:
    //         screenText.innerHTML = '8';
    //         break;
    //     case 9:
    //         screenText.innerHTML = '9';
    //         break;
    //     default:
    // }

    if (sevenButton) {
        screenText.innerHTML = '7';
    } else if (eightButton) {
        screenText.innerHTML = '8';
    } else if (nineButton) {
        screenText.innerHTML = '9';
    } else if (fourButton) {
        screenText.innerHTML = '4';
    } else if (fiveButton) {
        screenText.innerHTML = '5';
    } else if (sixButton) {
        screenText.innerHTML = '6';
    } else if (oneButton) {
        screenText.innerHTML = '1';
    } else if (twoButton) {
        screenText.innerHTML = '2';
    } else if (threeButton) {
        screenText.innerHTML = '3';
    }
}


// clearButton.addEventListener('click', );
//divisionButton.addEventListener('click', );
sevenButton.addEventListener('click', updateScreen);
eightButton.addEventListener('click', updateScreen);
nineButton.addEventListener('click', updateScreen);
//multButton.addEventListener('click', );
fourButton.addEventListener('click', updateScreen);
fiveButton.addEventListener('click', updateScreen);
sixButton.addEventListener('click', updateScreen);
//subButton.addEventListener('click', );
oneButton.addEventListener('click', updateScreen);
twoButton.addEventListener('click', updateScreen);
threeButton.addEventListener('click', updateScreen);
// addButton.addEventListener('click', );
zeroButton.addEventListener('click', updateScreen);
// decimalButton.addEventListener('click', );
// equalButton.addEventListener('click', );

