const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getEnteredNumber() {
  return parseInt(userInput.value);
}

function createAndWriteInput(currentVal, operator, enteredVal) {
  const calcDescription = `${currentVal} ${operator} ${enteredVal}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculateType) {
  const enteredNumber = getEnteredNumber();
  if (
    (calculateType === 'Add' &&
      calculateType === 'Subtract' &&
      calculateType === 'Multiply' &&
      calculateType === 'Divide') ||
    !enteredNumber ||
    enteredNumber == NaN
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculateType === 'Add') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculateType === 'Subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculateType === 'Multiply') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculateType === 'Divide') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteInput(initialResult, mathOperator, enteredNumber);
  writeToLog(calculateType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('Add');
}
function subtract() {
  calculateResult('Subtract');
}

function multiply() {
  calculateResult('Multiply');
}

function divide() {
  calculateResult('Divide');
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

