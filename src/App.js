import React from 'react';
//import logo from './logo.svg';  // remove by jean
import {Container} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Routes from './routes';
import {ContextWrapper} from './user-context'
import './App.css';
//import { Route } from 'react-router-dom';
//import impTest from './pages/MainPage/index';


let activePage = 1;
console.log("active in App:", activePage);
//console.log("active in out:", impTest.outActive)

function App() {
  return (
    <ContextWrapper>
      <div className="header">
          <h1>وب سایت خبری ونشک</h1>
      </div>

      <div className="headerNav">
          <div>
              <Nav pills>
                  <NavLink href="/" active={activePage === 1} >صفحه اصلی</NavLink> 
                  <NavLink href="#" active={activePage === 2} > منابع خبری </NavLink> 
                  <NavLink href="/aboutUs" active={activePage === 3} >درباره ما</NavLink> 
                  <NavLink disabled href="#" active={activePage === 4}>تماس با ما</NavLink> 
              </Nav>
          </div>
      </div>
      
      <div className="content" > 
        <Routes/>
      </div>

      
      
      <footer className="footer">
      <p>wanoshk news</p>
      </footer>

    </ContextWrapper>
  );
}

export default App;
