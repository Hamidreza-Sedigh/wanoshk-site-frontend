import React, {useEffect, useState, useMemo} from 'react';
import api from '../../services/api';
import './contactUs.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import Registration from '../../../../backend/src/models/Registration';

//dashboard will show all the events       
export default function contactUs(props, {history}){
    const user = localStorage.getItem('user');
    const user_id = localStorage.getItem('user_id');
    // const [email, setEmail] = useState("");
    // const [mailCategory, setMailCategory] = useState("");
    // const [passage, setPassage] =  useState("");
    
    // useEffect(()=>{
       
    // },[]);

    // const socket = useMemo( 
    //     () => 
    //     socketio('http://194.36.174.135:8000/', { query: { user: user_id } }),
    //     [user_id]
    //     );

    const handleSubmit = async evt =>{
        evt.preventDefault()
        console.log('test in contactUs');

        const response = await api.post('/contact', {});

        
    }


    return(
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">ایمیل</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="ایمیل" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">انتخاب کنید</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>اضافه شدن به منابع خبری</option>
                    <option>پیشنهاد و انتقادات</option>
                    <option>تبلیغات</option>
                    <option>غیره</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label for="exampleText">متن ارسالی</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">اضافه کردن فایل</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    فایل شما
                    </FormText>
                </FormGroup>
                
                
                <Button className="submit-btn">ارسال</Button>
            </Form>
        </>
    );
}