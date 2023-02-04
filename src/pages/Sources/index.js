import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './sources.css';
import '../../App.css'
import { Badge, Button, ButtonGroup, Alert, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import Registration from '../../../../backend/src/models/Registration';

//dashboard will show all the events       
export default function Sources(props, {history}){
    const [sources, setSources] = useState([]);
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');
    //const [cSelected, setCSelected] = useState([]); // jean deleted


    //let { type } = props.location.state;
    //console.log(this.props);
    //const id  = this.props.location.state

    useEffect(()=>{
        getSources()
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

    const getSources = async() => {
        try {
            console.log("getSources-index");
            //console.log("TEST:", id);
            const url = `/getSources` ;
            const response = await api.get(url, { headers: { user: user }})
            console.log("RESPONSE:", response.data.sources);
            setSources(response.data.sources);
        } catch (error) {
            console.log("my test for loggr", error);
            history.push('/');
        }
    };

    return(
        <>
            <div className='box'>
                <ul className="news-list">
                    {sources.map(s => (
                        <li key={s._id}>
                            <Link
                            to={{
                                // pathname: `/newsPage/${s}` ,
                                pathname: `/SourceNews/${s}` ,
                                state: s
                            }}
                            >
                            <span className="source-title"> {s} </span> </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}