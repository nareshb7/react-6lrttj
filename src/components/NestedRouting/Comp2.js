import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Comp2 = () => {
  return (
    <div>
      This is Comp 2
      <div>
        <Link to="comp3">Go to Comp 3</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Comp2;
