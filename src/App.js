import React from 'react';
//import logo from './logo.svg';  // remove by jean
import {Container as div} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Routes from './routes';
import {ContextWrapper} from './user-context'
import './App.css';
import moment from 'moment';

//import { Route } from 'react-router-dom';
//import impTest from './pages/MainPage/index';


let activePage = 1;
console.log("active in App:", activePage);
//console.log("active in out:", impTest.outActive)

let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
let today = m + "/" + d + "/" + y ;

function App() {
  return (
    <ContextWrapper>
      <div className="header">
          <h1>وب سایت خبری ونشک</h1>
          
      </div>

      {/* <div className="today">
            {moment(new Date()).format('YYYY-MM-DD')}
      </div> */}

      <div className="headerNav">
          <Nav pills>
              <NavLink href="/" active={activePage === 1} >صفحه اصلی</NavLink> 
              <NavLink href="/Sources" active={activePage === 2} > منابع خبری </NavLink> 
              <NavLink href="/aboutUs" active={activePage === 3} >درباره ما</NavLink> 
              <NavLink href="/contactUs" active={activePage === 4}>تماس با ما</NavLink> 
          </Nav>
      </div>

      <div className="content" > 
        <Routes/>
      </div>
      
      {/* <Container className="content" > 
        <Routes/>
      </Container> */}

      
      
      <footer className="footer">
        <p>
        تمامي خبرهای موجود در سایت به صورت خودکار و توسط نرم افزار از سايت های خبری گردآوري شده است و سايت wanoshk در مورد محتواي اخبار مسئولیتی ندارد.
        </p>
        <p>wanoshk news</p>
      </footer>

    </ContextWrapper>
  );
}

export default App;
