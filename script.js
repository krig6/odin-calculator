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
        // Avoid decimal point to be entered twice 
        if (number === '.' && this.currentInput.includes('.')) return;

        // Instead of 1+1 = 2, it will become 1+1 = 11
        this.currentInput = this.currentInput.toString() + number.toString();
    }
    // Select the operator 
    selectOperator(operator) {
        // if number is not present, clicking an operator will do nothing
        if (this.currentInput === '') return
        // If previous number has a value already, we can proceed to calculate without clicking equal sign
        if (this.previousInput !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
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
        this.currentInputText.textContent = this.currentInput;
        if (this.operator != null) {
            this.previousInputText.textContent = this.previousInput + this.operator;
        } else {
            this.previousInputText.textContent = '';
        }
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

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperator(button.textContent);
        calculator.updateDisplay();
    })
})