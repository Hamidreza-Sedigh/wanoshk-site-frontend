import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './mainPage.css';
import { Button, ButtonGroup, Badge, Alert, Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
//import appTest from '../../App';
//import Badge from 'reactstrap/lib/Badge';
//import Registration from '../../../../backend/src/models/Registration';


export default function MainPage({history}){
    const [news, setNews] = useState([]);
    const [politicNews, setPoliticNews] = useState([]);
    const [economicNews, setEconomicNews] = useState([]);
    const [sportNews, setSportNews] = useState([]);
    const [techNews, setTechNews] = useState([]);
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');
    //const [cSelected, setCSelected] = useState([]); // jean deleted

    const [rSelected, setRSelected] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [messageHandler, setMessageHandler] = useState('');
    const [eventsRequest, setEventsRequest] = useState([]);
    const [dropdownOpen, setDropdownOpen ] = useState(false);
    const [eventRequestMessage, setEventRequestMessage ] = useState('');
    const [eventRequestSuccess, setEventRequestSuccess] =  useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen)

    //activePage = 2;
    // let outActive = 1;
    // appTest.activePage = 1;
    // console.log("TEST-ACTIVE", appTest.activePage);

    useEffect(()=>{
        getNews()
        getPoliticNews();
        getEconomicNews();
        getSportNews();
        getTechNews();
        //getLatestNews();
        getMostVisitedDaily();
        getMostVisitedWeekly();
        getMostCommentedDaily();
        getMostCommentedweekly();
    },[]);

    // const socket = useMemo( 
    //     () => 
    //     socketio('http://194.36.174.135:8000/', { query: { user: user_id } }),
    //     [user_id]
    //     );

    // useEffect(()=>{
    //     console.log("e10 test");
    //     //socket.on('hamid', response => console.log(response) )
    //     socket.on('registration_request', data => ( setEventsRequest([ ...eventsRequest, data]) ) )
    // },[eventsRequest, socket]);



    const getNews = async(filter) => {
        try {
            //const url = filter ? `/dashboard/${filter}` : `/dashboard`
            const url = '/getNews';
            const response = await api.get(url, { headers: { user: user }})
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getPoliticNews = async() => {
        try {
            let type = 'a';
            const response = await api.post('/getNewsType', { type });
            setPoliticNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    }

    const getEconomicNews = async() => {
        try {
            let type = 'b';
            const response = await api.post('/getNewsType', { type });
            setEconomicNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    }

    const getSportNews = async() => {
        try {
            let type = 'c';
            const response = await api.post('/getNewsType', { type });
            setSportNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    }

    const getTechNews = async() => {
        try {
            let type = 'd';
            const response = await api.post('/getNewsType', { type });
            setTechNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    }
    
    const getNewsCat = async(type) => {
        try {
            const response = await api.post('/getNewsType', { type });
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getMostVisitedDaily = async() => {
        try {
            const response = await api.post('/getMostVisitedDaily', {  });
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getMostVisitedWeekly = async() => {
        try {
            const response = await api.post('/getMostVisitedWeekly', {  });
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getMostCommentedDaily = async() => {
        try {
            const response = await api.post('/getMostCommentedDaily', {  });
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getMostCommentedweekly = async() => {
        try {
            const response = await api.post('/getMostCommentedweekly', {  });
            setNews(response.data.news)
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    // it should work in callback mode : dont know how to do it in express routes.
    // const getNewsCates = async() => {
    //     try {
    //         console.log("TESTgnc. start");
    //         let type = 'a'
    //         let categories = ['a', 'b', 'c', 'd'] ;
    //         categories.map(c=>{
    //             console.log("TESTgnc. c:", c);
    //             let response = await api.post('/getNewsType', { c });
    //             switch(c) {
    //                 case 'a':
    //                     setPoliticNews(response.data.news);
    //                     break;
    //                 case 'b':
    //                     setEconomicNews(response.data.news);
    //                     //
    //                     break;
    //                 case 'c':
    //                     setSportNews(response.data.news);
    //                     //
    //                     break;
    //                 case 'd':
    //                     setTechNews(response.data.news);
    //                     //
    //                     break;
    //                 case 'd':
    //                     //
    //                     break;
    //                 case 'd':
    //                     //
    //                     break;
    //                 default:
    //                   // code block
    //             }
    //             //setNews(response.data.news);
    //         });

    //         //const response = await api.post('/getNewsType', { type });
    //     } catch (error) {
    //         console.log("error in getNewsCates", error);
    //     }
    // }
    
    


    // select all categories: (6for example) -> map-> select where category = this
    return(
        <>
            {/* <div className="navbar">
                <Nav pills>
                    <NavLink href="/" active>صفحه اصلی</NavLink> 
                    <NavLink href="#"> منابع خبری </NavLink> 
                    <NavLink href="/aboutUs">درباره ما</NavLink> 
                    <NavLink disabled href="#">تماس با ما</NavLink> 
                </Nav>
            </div> */}
            
            <div className="box">
            {/* boxes */}
                <div className="box-title main-box-title">
                    <ButtonGroup>
                        <Button onClick={ () => getNews() } className="button-box">تازه ترین خبر ها </Button>
                        <Button onClick={ () => getMostVisitedDaily() } className="button-box">پربازدیدترین های روز </Button>
                        <Button onClick={ () => getMostCommentedDaily() } className="button-box">پربحثترین های روز </Button>
                        <Button onClick={ () => getMostVisitedWeekly() } className="button-box">پربازدیدترین های هفته </Button>
                        <Button onClick={ () => getMostCommentedweekly() } className="button-box">پربحثترین های هفته </Button>
                    </ButtonGroup>
                </div>
                <p></p>
                
                <ul className="news-list">
                    {news.map(ns => (
                        <li key={ns._id}>
                            
                            <Link
                            to={{
                                pathname: `/newsPage/${ns._id}` ,
                                state: ns._id
                            }}
                            >
                            <span className="news-title"> {ns.title} </span> </Link>
                            <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} بازدید </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="box">
            {/* boxes */}

                <div className="box-title">
                    اخبار سیاسی
                </div>
                <ul className="news-list">
                    {politicNews.map(ns => (
                        <li key={ns._id}>
                            <Link
                            to={{
                                pathname: `/newsPage/${ns._id}` ,
                                state: ns._id
                            }}
                            >
                            <span className="news-title"> {ns.title} </span> </Link>
                            <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/politic` ,
                        state: "politic"
                    }}
                    >
                    <span className="continue"> {"ادامه اخبار سیاسی"} </span> </Link>
                </div>
            </div>

            <div className="box">
                <div className="box-title">
                    اخبار اقتصادی
                </div>
                <ul className="news-list">
                    {economicNews.map(ns => (
                        <li key={ns._id}>
                            <Link
                            to={{
                                pathname: `/newsPage/${ns._id}` ,
                                state: ns._id
                            }}
                            >
                            <span className="news-title"> {ns.title} </span> </Link>
                            <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/politic` ,
                        state: "politic"
                    }}
                    >
                    <span className="continue"> {"ادامه اخبار اقتصادی"} </span> </Link>
                </div>
            </div>

            <div className="box">
                <div className="box-title">
                    اخبار ورزشی
                </div>
                <ul className="news-list">
                    {sportNews.map(ns => (
                        <li key={ns._id}>
                            <Link
                            to={{
                                pathname: `/newsPage/${ns._id}` ,
                                state: ns._id
                            }}
                            >
                            <span className="news-title"> {ns.title} </span> </Link>
                            <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/politic` ,
                        state: "politic"
                    }}
                    >
                    <span className="continue"> {"ادامه اخبار ورزشی"} </span> </Link>
                </div>
            </div>

            <div className="box">
                <div className="box-title">
                    اخبار فناوری
                </div>
                <ul className="news-list">
                    {techNews.map(ns => (
                        <li key={ns._id}>
                            <Link
                            to={{
                                pathname: `/newsPage/${ns._id}` ,
                                state: ns._id
                            }}
                            >
                            <span className="news-title"> {ns.title} </span> </Link>
                            <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/politic` ,
                        state: "politic"
                    }}
                    >
                    <span className="continue"> {"ادامه اخبار فناوری"} </span> </Link>
                </div>
            </div>
            
        </>
    );
}