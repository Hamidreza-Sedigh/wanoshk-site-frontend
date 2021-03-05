import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login/index';  // or  './pages/Login/index'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard/index';
import EventsPage from './pages/EventsPage';
import MyRegistrations from './pages/MyRegistrations';
import TopNav from './components/TopNav';
import MainPage from './pages/MainPage';
import NewsPage from './pages/newsPage';
import aboutUs  from './pages/aboutUs'

export default function Routes(){
    return(
        <BrowserRouter>
            <TopNav/>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/dashboard' exact component={Dashboard} />
                <Route path='/myregistrations' exact component={MyRegistrations} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/events' component={EventsPage} />
                <Route path='/newsPage/:id' component={NewsPage} />
                <Route path='/aboutUs' component={aboutUs} />
            </Switch>
        </BrowserRouter>
    );
}