import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurante Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
