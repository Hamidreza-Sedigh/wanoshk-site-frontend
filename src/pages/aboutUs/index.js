import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import './aboutUs.css';
import '../../App.css'

export default function aboutUs(props, {history}){
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');


    return(
        <>
          <div className='box'>
            <div className="main">
                <p>وب سایت خبری کهربا اخبار مفید را از سایت های خبری منتخب میگیرد و بعد از دسته بندی آنها به شما ارائه می دهد.</p>
                <p>
                    تمامی خبرهای موجود در سایت توسط نرم افزار جمع آوری می شود و هیچگونه عامل انسانی در آنها دخالت ندارد. همچنین وب سایت کهربا صرفاً اخبار را جمع آوری میکند و در صحت آنها سهمی ندارد.
                </p>
                <p>
                    در صورتی که هر یک از خبرها به طور صحیح نمایش داده نشدند شما می توانید از طریق لینک خبر از سایت مرجع به آن سایت مراجعه کرده و خبر را از آنجا مطالعه نمایید.
                </p>
                
            </div>
            
            </div>  
        </>
    );
}