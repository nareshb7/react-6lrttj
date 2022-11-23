import React from 'react';

const Example1 = () => {
  // let arr = [10, 15, 20, 25, 30];
  // let mapVal = arr.map((item) => item * 2);
  // let arr1 = [5, 10, 15, 20, 25];
  // let arr2 = [50, 55, 60];
  // let obj = { name: 'naresh', role: 'UI' };
  const arr = ['suresh', 'naresh', 'vinay', 'tharun', 'sathya'];
  arr.forEach((name) => {
    if (name.charAt(0) == 's') {
      console.log(name);
    }
  });

  return (
    <div>
      {}
      Example1 check console
    </div>
  );
};
export default Example1;
