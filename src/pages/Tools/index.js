import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './tools.css';
import '../../App.css'
import { Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import socketio from 'socket.io-client';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiGoldBar } from 'react-icons/gi';
import { FcCalendar } from 'react-icons/fc';
import { SiConvertio, SICalender } from 'react-icons/si';

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
                <Row>
                    <Col className="bg-light border" xs="12" sm="6" lg="4">
                    <div className="panelTools">
                        <a href="/Convertor">
                        <SiConvertio style={{ fontSize: '50px' }} />
                        <br />
                        تبدیل واحد
                        </a>
                    </div>
                    </Col>
                    <Col className="bg-light border" xs="12" sm="6" lg="4">
                    <div className="panelTools">
                        <a href="/DateConvertor">
                        <FcCalendar style={{ fontSize: '50px' }} />
                        <br />
                        تبدیل تاریخ
                        </a>
                    </div>
                    </Col>
                    <Col className="bg-light border" xs="12" sm="6" lg="4">
                    <div className="panelTools">
                        <a href="/GoldCalc">
                        <GiGoldBar style={{ fontSize: '50px' }} />
                        <br />
                        محاسبه قیمت طلا
                        </a>
                    </div>
                    </Col>
                </Row>
                    {/* <li>
                        <Link
                        to={{
                            pathname: `/Convertor/` 
                        }}
                        >
                        <span className="source-title"> تبدیل واحد های فیزیکی </span> </Link>
                    </li>
                    <li>
                        abcd
                    </li> */}
                </ul>
            </div>

        </>
    );
}