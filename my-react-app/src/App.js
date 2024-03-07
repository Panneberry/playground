import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleCalculate = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <span> + </span>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleCalculate}>=</button>
      <span>{result}</span>
    </div>
  );
}

export default Calculator;
