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
        this.clear();
    }
    // Append numbers for displaying
    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.')) return;
        this.currentInput = this.currentInput.toString() + number.toString();
    }
    // Select the operator 
    selectOperator() {

    }
    // Calculate 
    calculate() {

    }
    // Clear display
    clear() {
        this.previousInput = '';
        this.currentInput = '';
        this.operator = undefined;
    }
    // Delete numbers in display
    delete() {

    }
    // Update display 
    updateDisplay() {
        this.currentInputText.textContent = this.currentInput
    }
}

const calculator = new Calculator(previousInputText, currentInputText);

// Number button event listener
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})