import React from 'react';
//import logo from './logo.svg';  // remove by jean
import {Container as div} from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Routes from './routes';
import {ContextWrapper} from './user-context'
import './App.css';
import moment from 'moment';
import momentJaa from 'moment-jalaali';
import Footer from './components/Footer';


//import { Route } from 'react-router-dom';
//import impTest from './pages/MainPage/index';


let activePage = 1;
console.log("active in App:", activePage);
console.log(window.location.pathname); //yields: "/js" (where snippets run)
let currrentPage = window.location.pathname
console.log(currrentPage);
console.log(window.location.href);     //

// /Sources
//aboutUs
//contactUs

switch(currrentPage) {
  case '/Sources':
    activePage = 2;
    break;
  case '/aboutUs':
    activePage = 3;
    break;
  case '/contactUs':
    activePage = 4;
    break;
  case '/tools':
    activePage = 5;
    break;
  default:
    activePage = 1;
}





let n =  new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
//let today = m + "/" + d + "/" + y ;
let options = { year: 'numeric',  day: 'numeric', month: 'long' };
// let today = new Date().toLocaleDateString('fa-IR');
//today = new Date().toLocaleDateString('fa-IR', options);
let today = new Date();
let momDate = momentJaa(today);
let todayDisplay =   new Intl.DateTimeFormat('fa-IR', {
    dateStyle: 'full',
    // timeStyle: 'long',
  }).format(momDate)
;

console.log("app-today:", today);

function App() {
  return (
    <ContextWrapper>
      <header className="header">
      {/* <div className="today">
            {today}
      </div> */}
          <h1>وب سایت خبری کهربا نت</h1>
          
      </header>

      

      <div className="headerNav">

        <div>
          <Nav pills>
              <NavLink href="/" active={activePage === 1} >صفحه اصلی</NavLink> 
              <NavLink href="/Sources" active={activePage === 2} > منابع خبری </NavLink> 
              <NavLink href="/tools" active={activePage === 5}>ابزار</NavLink> 
              <NavLink href="/aboutUs" active={activePage === 3} >درباره ما</NavLink> 
              <NavLink href="/contactUs" active={activePage === 4}>تماس با ما</NavLink> 
              
          </Nav>
        </div>  
        <div>
          {todayDisplay}    
        </div>
      </div>

      <div className="content" > 
        <Routes/>
      </div>
      
      {/* <Container className="content" > 
        <Routes/>
      </Container> */}

      
      
      <footer className="footer">
        <p>
        تمامي خبرهای موجود در سایت به صورت خودکار و توسط نرم افزار از سايت های خبری گردآوري شده است و سايت کهربا در مورد محتواي اخبار مسئولیتی ندارد.
        </p>
        <p>kahroba news</p>
      </footer>

      <Footer/>      

    </ContextWrapper>
  );
}

export default App;
