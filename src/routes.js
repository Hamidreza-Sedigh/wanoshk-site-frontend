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
import aboutUs  from './pages/aboutUs';
import contactUs from './pages/ContactUs';
import OneTypeNews from './pages/OneTypeNews'
import Sources from './pages/Sources';
import OneSourceNews from './pages/oneSourceNews';
import Tools from './pages/Tools';
import Convertor from './pages/Tools/Convertor';
import DateConvertor from './pages/Tools/ConvertDate';
import CurrencyConvertor from './pages/Tools/ConvertCurrency';
import PlayerRoles from './pages/Tools/PlayerRoles';
import GoldCalc from './pages/Tools/GoldCalc';
import Roles from './pages/Tools/Roles';


export default function Routes(){
    return(
        <BrowserRouter>
            <TopNav/>
            <Switch>
                {/* <Route path='/' exact component={MainPage} /> */}
                {/* <Route path='/dashboard' exact component={Dashboard} /> */}
                <Route path='/mainpage' exact component={MainPage} />
                <Route path='/' exact component={Dashboard} />


                <Route path='/myregistrations' exact component={MyRegistrations} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/events' component={EventsPage} />
                <Route path='/newsPage/:id' component={NewsPage} />
                <Route path='/aboutUs' component={aboutUs} />
                <Route path='/contactUs' component={contactUs} />
                <Route path='/OneTypeNews' component={OneTypeNews} />
                <Route path='/Sources' component={Sources} />
                <Route path='/SourceNews/:sourceName' component={OneSourceNews} />
                <Route path='/Tools' component={Tools} />
                <Route path='/Convertor' component={Convertor} />
                <Route path='/DateConvertor' component={DateConvertor} />
                <Route path='/CurrencyConvertor' component={CurrencyConvertor} />
                {/* <Route path='/PlayerRoles' component={PlayerRoles} /> */}
                <Route path='/GoldCalc' component={GoldCalc} />
                <Route path= '/roles' component={Roles}/>
            </Switch>
        </BrowserRouter>
    );
}