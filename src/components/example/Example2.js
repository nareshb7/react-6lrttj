import React, { useState } from 'react';

const Example2 = () => {
  const [change, setChange] = useState(true);
  const [ipt, setIpt] = useState('');
  const [data, setData] = useState([]);
  const [index, setIndex] = useState('');
  const addFunc = () => {
    setData([...data, ipt]);
    setIpt('');
  };
  const updateFunc = () => {
    data[index] = ipt;
    setChange(true);
  };
  const editFunc = (idx) => {
    setIpt(data[idx]);
    setChange(false);
    setIndex(idx);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={ipt}
          onChange={(e) => {
            setIpt(e.target.value);
          }}
        />{' '}
      </div>
      <div>
        {change ? (
          <button onClick={addFunc}>Submit</button>
        ) : (
          <button onClick={updateFunc}>Update</button>
        )}
      </div>
      <ul>
        {data.map((user, idx) => {
          return (
            <li key={idx}>
              <h3>
                {' '}
                {user} <button onClick={() => editFunc(idx)}> Edit </button>
              </h3>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Example2;
