import React from 'react';
//import logo from './logo.svg';  // remove by jean
import {Container} from 'reactstrap';
import Routes from './routes';
import {ContextWrapper} from './user-context'
import './App.css';
//import { Route } from 'react-router-dom';

function App() {
  return (
    <ContextWrapper>
      <div className="header">
          <h1>وب سایت خبری ونشک</h1>
      </div>
      
      <div className="content" > 
        <Routes/>
      </div>

      <div style={{ width: 300, height: 100, border: '1px solid #000', padding: '8px', overflow: 'hidden' }}>
        {/* boxes */}

      </div>

      
      
      <footer className="footer">
      <p>wanoshk news</p>
      </footer>

    </ContextWrapper>
  );
}

export default App;
