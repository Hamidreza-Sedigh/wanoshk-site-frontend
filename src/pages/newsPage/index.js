import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './newsPage.css';
import { Button, ButtonGroup, Alert, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import Registration from '../../../../backend/src/models/Registration';

//dashboard will show all the events       
export default function NewsPage(props, {history}){
    const [news, setNews] = useState([]);
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
    

    const { id } = props.match.params;
    //console.log(this.props);
    //const id  = this.props.location.state

    const toggle = () => setDropdownOpen(!dropdownOpen)

    useEffect(()=>{
        console.log("props:", props);
        console.log("newspage-index-id", id);
        getOneNews(id)
        //getOneNews(_id)
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

    const getOneNews = async(newsId) => {
        try {
            console.log("newsId in newsPage-index", newsId);
            //console.log("TEST:", id);
            const url = `/getOneNews/${newsId}` ;
            const response = await api.get(url, { headers: { user: user }})
            console.log("RESPONSE:", response.data.news);
            setNews(response.data.news);
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    return(
        <>
            
            <div><h2 className="news-title" >{news.map(ns => (ns.title))}</h2></div>
            {/* <p> {news.map(ns => (ns.passage))}</p> */}
            <div className="news-body" dir="rtl" >{ ReactHtmlParser(news.map(ns => (ns.passage))) }</div>;
            <div className="news-date"> تاریخ انتشار { news.map(ns=>(moment(ns.date).format('l,  h:mm:ss'))) }</div>
            <div className="news-source"> منبع خبر: { news.map(ns => (ns.sourceName)) } </div>
            <div className="news-link">
                <a  href={news.map(ns => (ns.link))} target="_blank">لینک خبر</a>
                
            </div>

        </>
    );
}