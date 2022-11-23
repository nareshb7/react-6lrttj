import React, { useState, useEffect } from 'react';
import CircleBar from './CircleBar';

const LineBar = () => {
  const [value, setValue] = useState(50);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [ipt, setIpt] = useState('');
  const [percent, setPercent] = useState('');
  useEffect(() => {
    setPercent((value / max) * 100);
  }, [value]);
  return (
    <div>
      <h3 style={{ color: '#f0f' }}>Slider : </h3>
      <div>
        <div>
          <input
            type="text"
            value={ipt}
            onChange={(e) => setIpt(e.target.value)}
          />
          <button onClick={() => setMin(ipt)}>Set Min</button>
          <button onClick={() => setMax(ipt)}>Set Max</button>
        </div>
        <span>Min: {min} </span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span> Max :{max}</span>
        <h3>Value: {value}</h3>
        <h3>Percentage: {Number(percent).toFixed(2)}</h3>
      </div>
      <div>
        <CircleBar />
      </div>
    </div>
  );
};
export default LineBar;
