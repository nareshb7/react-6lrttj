import React, { useState } from 'react';
import CountBtn from './CountBtn';
import Button from './Button';

const Count = () => {
  const [count, setCount] = useState(0);

  const countFunc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Count : {count}
      <CountBtn countFunc={countFunc} />
      <Button
        title={'Submit'}
        func={() => alert('This is Submit Btn')}
        color={'#888'}
        bgcolor={'#ccc'}
      />
      <Button
        title={'Update'}
        func={() => alert('This is Update Btn')}
        color={'#f0f'}
        bgcolor={'#0ff'}
      />
      <Button
        title="Print"
        func={() => {
          window.print();
        }}
        color="#fff"
        bgcolor="#000"
      />
    </div>
  );
};
export default Count;
