import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contacts/ContactUs';
import Table from './components/table/Table';
import ClientsList from './components/contacts/ClientsList';
import Store from './components/fetch/Store';
import { Comp1 } from './components/NestedRouting/Comp1';
import Comp2 from './components/NestedRouting/Comp2';
import Comp3 from './components/NestedRouting/Comp3';
import ClothHome from './components/clothStore/ClothHome';
import Cart from './components/clothStore/Cart';
import ReduxExample from './components/redux/ReduxExample';
import Example from './components/example/Example';
import Count from './components/reusableComp/Count';
import LineBar from './components/progressBar/LineBar'
import Calculator from './components/calculator/Calculator'

const RoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="table" element={<Table />} />
        <Route path="clientslist" element={<ClientsList />} />
        <Route path="store" element={<Store />} />
        <Route path="comp1" element={<Comp1 />}>
          <Route path="comp2" element={<Comp2 />}>
            <Route path="comp3" element={<Comp3 />} />
          </Route>
        </Route>
        <Route path="clothhome" element={<ClothHome />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="reduxexample" element={<ReduxExample />} />
        <Route path="example" element={<Example />} />
        <Route path="reusable" element={<Count />} />
        <Route path='progressbar' element={ <LineBar />} />
        <Route path='calculator' element={<Calculator /> } />
      </Routes>
    </div>
  );
};
export default RoutesComp;
