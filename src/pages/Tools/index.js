import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './tools.css';
import '../../App.css'
import { Badge, Button, ButtonGroup, Alert, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Sources(props, {history}){
    const [sources, setSources] = useState([]);
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');

    useEffect(()=>{
        //getSources()
        //getOneNews(_id)
    },[]);


    return(
        <>
            <div className='box'>
                <ul className="tools-list">
                    
                    <li>
                        <Link
                        to={{
                            pathname: `/Convertor/` 
                        }}
                        >
                        <span className="source-title"> تبدیل واحد های فیزیکی </span> </Link>
                    </li>
                    <li>
                        abcd
                    </li>
                </ul>
            </div>

        </>
    );
}