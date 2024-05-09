const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButton = document.querySelector('[data-equal]');
const previousInputText = document.querySelector('[data-previous-input]');
const currentInputText = document.querySelector('[data-current-input]');


class Calculator {
    constructor(previousInputText, currentInputText) {
        this.previousInputText = previousInputText;
        this.currentInputText = currentInputText;
    }
    // append numbers to display
    appendToDisplay() {

    }
    // select the operator 
    selectOperator() {

    }
    // calculate 
    calculate() {

    }
    // clear display
    clear() {

    }
    // delete numbers in display
    delete() {

    }
    //update display 
    updateDisplay() {

    }
}