import React, { useState } from 'react';

const Calculator = () => {
  const [ipt, setIpt] = useState('');
  const [result, setResult] = useState('');
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [calc, setCalc] = useState('');
  const [isValOne, setIsVal] = useState(true);
  const handleClick = (val) => {
    setIpt(ipt.concat(val));
    if (isValOne) {
      setVal1(ipt.concat(val));
    } else {
      setVal2(ipt.concat(val));
    }
  };
  const handleFunc = (val) => {
    setIpt('');
    setCalc(val);
    setIsVal(false);
    if (calc) {
      handleResult();
      setVal1(result);
      setVal2('');
      setResult('');
      setCalc(val);
      console.log('sample');
    }
  };
  const handleResult = () => {
    setIpt('');
    switch (calc) {
      case '+':
        return setResult(Number(val1) + Number(val2));
      case '-':
        return setResult(val1 - val2);
      case '/':
        return setResult(val1 / val2);
      case '*':
        return setResult(val1 * val2);
      default:
        return calc;
    }
  };
  const reset = () => {
    setIpt('');
    setIsVal(true);
    setVal1('');
    setVal2('');
    setResult('');
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="calcBtn">
        <h3>Calculator</h3>
        <div>
          <input type="text" defaultValue={ipt} />
        </div>
        <div>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
        </div>
        <div>
          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>
        </div>
        <div>
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>
        </div>
        <div>
          <button onClick={() => handleFunc('-')}>-</button>
          <button onClick={() => handleFunc('+')}>+ </button>
          <button onClick={() => handleClick(0)}>0</button>
        </div>
        <div>
          <button onClick={() => handleFunc('/')}> / </button>
          <button onClick={() => handleFunc('*')}> x </button>
          <button onClick={handleResult}> = </button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <h3>Val 1 : {val1}</h3>
        <h3>Val 2 : {val2}</h3>
        <h3>Result : {result}</h3>
      </div>
    </div>
  );
};

export default Calculator;
