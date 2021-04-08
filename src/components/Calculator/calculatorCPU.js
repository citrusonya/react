export function calculation(values) {
  const arrItems = addToArray(values);
  return calculateItems(arrItems);
}

export function isOperator(input) {
  return input === '+' || input === '-' || input === '*' || input === '/';
}

export function isNumber(input) {
  return !isOperator(input);
}

export function getPriority(input) {
  if (input === '+' || input === '-') return 1;
  if (input === '*' || input === '/') return 2;
  return 0;
}

export function addToArray(values) {
  let result = [], storage = [];

  values.forEach(item => {
    if (isNumber(item)) {
      result.push(item);
    } else if (isOperator(item)) {
      
      while (storage.length > 0) {
        const items = storage[storage.length - 1];

        if (isOperator(items) && getPriority(items) >= getPriority(item)) {
          result.push(items);
          storage.pop();
        } else break;
      }

      storage.push(item);

    } else {
      console.log('Error');
    }
  });

  while (storage.length > 0) {
    result.push(storage.pop());
  }

  return result;
}

export function calculateItems(arrItems) {
  let storage = [];

  arrItems.forEach(item => {
    if (isNumber(item)) {
      storage.push(item);
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(storage.pop()), num2 = Number.parseFloat(storage.pop());
      let result = '';

      switch (item) {
        case '+':
          result = (num2 + num1).toFixed(1);
          break;
        case '-':
          result = (num2 - num1).toFixed(1);
          break;
        case '*':
          result = (num2 * num1).toFixed(1);
          break;
        case '/':
          result = (num2 / num1).toFixed(1);
          break;
        default:
          console.log('Error');
      }

      storage.push(result + '');
    } else {
      console.log('Error');
    }
  });

  return Number.parseFloat(storage[0]);
}