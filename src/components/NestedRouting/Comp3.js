import React, { useContext } from 'react';
import { UserContext } from './Comp1';

const Comp3 = () => {
  const val = useContext(UserContext);
  return (
    <div>
      I am the Component 3<h1>Comp1 : {val} </h1>
    </div>
  );
};
export default Comp3;
