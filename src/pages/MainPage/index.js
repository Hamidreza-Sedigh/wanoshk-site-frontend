import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import './mainPage.css';
import { Button, ButtonGroup, Badge, Spinner } from 'reactstrap';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
// import ReactDom from 'react-dom';
// import socketio from 'socket.io-client';
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
    // const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    // const [messageHandler, setMessageHandler] = useState('');
    // const [eventsRequest, setEventsRequest] = useState([]);
    const [dropdownOpen, setDropdownOpen ] = useState(false);
    // const [eventRequestMessage, setEventRequestMessage ] = useState('');
    // const [eventRequestSuccess, setEventRequestSuccess] =  useState(false);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [loading3, setLoading3] = useState(true);
    const [loading4, setLoading4] = useState(true);
    // const [loading5, setLoading5] = useState(true);
    // const [loading6, setLoading6] = useState(true);
    
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
        // getMostVisitedDaily();
        // getMostVisitedWeekly();
        // getMostCommentedDaily();
        // getMostCommentedweekly();
    },[]);





    const getNews = async(filter) => {
        try {
            //const url = filter ? `/dashboard/${filter}` : `/dashboard`
            const url = '/getNews';
            const response = await api.get(url, { headers: { user: user }})
            setNews(response.data.news);
            setLoading1(false);
            setRSelected(1);
        } catch (error) {
            setLoading1(false);
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getPoliticNews = async() => {
        try {
            let type = 'a';
            const response = await api.post('/getNewsType', { type });
            setLoading2(false);
            setPoliticNews(response.data.news)
        } catch (error) {
            setLoading2(false);
            console.log("my test for loggr");
            history.push('/');
        }
    }

    const getEconomicNews = async() => {
        try {
            let type = 'b';
            const response = await api.post('/getNewsType', { type });
            setLoading3(false);
            setEconomicNews(response.data.news)
        } catch (error) {
            setLoading3(false);
            console.log("my test for loggr");
            history.push('/');
        }
    }

    const getSportNews = async() => {
        try {
            let type = 'c';
            const response = await api.post('/getNewsType', { type });
            setLoading4(false);
            setSportNews(response.data.news)
        } catch (error) {
            setLoading4(false);
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
            setRSelected(2);
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const getMostVisitedWeekly = async() => {
        try {
            const response = await api.post('/getMostVisitedWeekly', {  });
            setNews(response.data.news)
            setRSelected(3);
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
    
    
    return(
        <>
            
            <div className="box">
            {/* boxes */}
                <div className="box-title main-box-title">
                    <ButtonGroup>
                        <Button onClick={ () => getNews() } className="button-box" color="primary" outline active={rSelected === 1}>تازه ترین خبر ها </Button>
                        <Button onClick={ () => getMostVisitedDaily() } className="button-box" color="primary" outline active={rSelected === 2}>پربازدیدترین های روز </Button>
                        {/* <Button onClick={ () => getMostCommentedDaily() } className="button-box" color="primary" outline active={rSelected === 1}>پربحثترین های روز </Button> */}
                        <Button onClick={ () => getMostVisitedWeekly() } className="button-box" color="primary" outline active={rSelected === 3}>پربازدیدترین های هفته </Button>
                        {/* <Button onClick={ () => getMostCommentedweekly() } className="button-box" color="primary" outline active={rSelected === 1}>پربحثترین های هفته </Button> */}
                    </ButtonGroup>
                </div>

                <div className="loading">{loading1? <Spinner color="primary"></Spinner> : <></>} </div>
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
                            {/* <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span> */}
                            <span className="news-source">  {"|" + ns.sourceName} </span>
                            <Badge className="text-light" color="info"> {ns.views} بازدید </Badge>
                            {/* <span> {ns.category} </span> */}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="box">
            {/* boxes */}

                <div className="box-title">
                    اخبار سیاسی
                </div>
                <div className="loading">{loading2? <Spinner color="primary"></Spinner> : <></>} </div>
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
                            {/* <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span> */}
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            {/* <span> {ns.category} </span> */}
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
                <div className="loading">{loading3? <Spinner color="primary"></Spinner> : <></>} </div>
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
                            {/* <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span> */}
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            {/* <span> {ns.category} </span> */}
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/finance` ,
                        state: "finance"
                    }}
                    >
                    <span className="continue"> {"ادامه اخبار اقتصادی"} </span> </Link>
                </div>
            </div>

            <div className="box">
                <div className="box-title">
                    اخبار ورزشی
                </div>
                <div className="loading">{loading4? <Spinner color="primary"></Spinner> : <></>} </div>
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
                            {/* <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span> */}
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            {/* <span> {ns.category} </span> */}
                        </li>
                    ))}
                </ul>
                <div className="box-footer">
                <Link
                    to={{
                        // pathname: `/OneTypeNews/${1}` ,
                        pathname: `/OneTypeNews/sports` ,
                        state: "sports"
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
                            {/* <span className="news-time">  { moment(ns.date).format(' h:mm:ss') } </span> */}
                            <span className="news-source">  {ns.sourceName} </span>
                            <Badge color="info"> {ns.views} </Badge>
                            {/* <span> {ns.category} </span> */}
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