import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './OneSourceNews.css';
import { Badge, Button, ButtonGroup, Alert, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function OneSourceNews(props, {history}){
    const [news, setNews] = useState([]);
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');

    let { sourceName } = props.location.state;
    //console.log(this.props);
    //const id  = this.props.location.state

    useEffect(()=>{
        console.log("index-type:", sourceName);
        //sourceName = props.location.state
        console.log("index-type:", sourceName);   
        getOneSourceNews(sourceName)
        //getOneNews(_id)
    },[]);

    // const socket = useMemo( 
    //     () => 
    //     socketio('http://194.36.174.135:8000/', { query: { user: user_id } }),
    //     [user_id]
    //     );

    const getOneSourceNews = async(sourceName) => {
        try {
            console.log("newsType in getOneType-index", sourceName);
            const url = `/getOneSourceNews/${sourceName}` ;
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
        </>
    );
}