import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import './aboutUs.css';

export default function aboutUs(props, {history}){
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');


    return(
        <>
            
            <div className="main">
                <p>وب سایت خبری ونشک اخبار مفید را از سایت های خبری منتخب میگیرد و بعد از دسته بندی آنها به شما ارائه می دهد.</p>
                <p>
                    تمامی خبرهای موجود در سایت توسط نرم افزار جمع آوری می شود و هیچگونه عامل انسانی در آنها دخالت ندارد. همچنین وب سایت ونشک صرفاً اخبار را جمع آوری میکند و در صحت آنها سهمی ندارد.
                </p>
                
            </div>
            

        </>
    );
}