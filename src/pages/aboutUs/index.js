import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import './aboutUs.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Registration from '../../../../backend/src/models/Registration';

//dashboard will show all the events       
export default function aboutUs(props, {history}){
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');

    // useEffect(()=>{
       
    // },[]);

    // const socket = useMemo( 
    //     () => 
    //     socketio('http://194.36.174.135:8000/', { query: { user: user_id } }),
    //     [user_id]
    //     );


    return(
        <>
            
            <div>
                <p>وب سایت خبری ونشک اخبار مفید را از سایت های خبری منتخب میگیرد و بعد از دسته بندی آنها در به شما اراوه می دهد.</p>
                
            </div>
            

        </>
    );
}