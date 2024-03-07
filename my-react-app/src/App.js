import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    const input = event.target.value;
    setNum1(input);
    calculateResult(input, num2);
  };

  const handleNum2Change = (event) => {
    const input = event.target.value;
    setNum2(input);
    calculateResult(num1, input);
  };

  const calculateResult = (val1, val2) => {
    const sum = parseFloat(val1) + parseFloat(val2);
    setResult(isNaN(sum) ? '' : sum);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <span> + </span>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <span>= {result}</span>
    </div>
  );
}

export default Calculator;
