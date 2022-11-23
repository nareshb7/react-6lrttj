import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Nav from './components/Nav';
import RoutesComp from './RoutesComp';

export default function App() {
  return (
    <div>
      <Nav />
      <RoutesComp />
    </div>
  );
}
