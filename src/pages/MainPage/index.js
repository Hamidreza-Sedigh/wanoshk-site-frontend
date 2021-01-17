import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './mainPage.css';
import { Button, ButtonGroup, Badge, Alert, Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
//import Badge from 'reactstrap/lib/Badge';
//import Registration from '../../../../backend/src/models/Registration';


//dashboard will show all the events       
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

    useEffect(()=>{
        getNews()
        getPoliticNews();
        getEconomicNews();
        getSportNews();
        getTechNews();
    },[]);

    // const socket = useMemo( 
    //     () => 
    //     socketio('http://localhost:8000/', { query: { user: user_id } }),
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
        
            <div className="box">
            {/* boxes */}
                <div className="box-title">
                    <ButtonGroup>
                        <Button onClick={ () => getNewsCat("a") }>سیاسی </Button>
                        <Button onClick={ () => getNewsCat("b") }>اقتصادی </Button>
                        <Button onClick={ () => getNewsCat("c") }>ورزشی </Button>
                        <Button onClick={ () => getNewsCat("d") }>فناوری </Button>
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
                            <span>  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
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
                            <span>  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
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
                            <span>  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
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
                            <span>  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
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
                            <span>  { moment(ns.date).format(' h:mm:ss') } </span>
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            <span> {ns.category} </span>
                        </li>
                    ))}
                </ul>
            </div>
            
        </>
    );
}