import React, { useState, useContext, useEffect } from 'react';
import api from '../../services/api';
import { Button, Form, FormGroup, Input, Label, FormText, Alert } from 'reactstrap';
import {UserContext} from '../../user-context';

export default function ContactUs({history}){
    const { setIsLoggedIn} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [category, setCategory] =  useState("");
    const [passage, setPassage] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async evt =>{
        evt.preventDefault()

        if(email !== "" ){
            const response = await api.post('/contactUs', {email, category, passage});
            const user = response.data.user || false;
            const user_id = response.data.user_id || false;

        } else {
            setError(true);
            setErrorMessage("enter a valid Email!")
            setTimeout(()=>{
                setError(false)
                setErrorMessage("")
            }, 2000)
        }
        

    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">ایمیل</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="ایمیل"  onChange={ evt => setEmail(evt.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">انتخاب کنید</Label>
                    <Input type="select" name="select" id="exampleSelect"  onChange={ evt => setCategory(evt.target.value)}>
                    <option>اضافه شدن به منابع خبری</option>
                    <option>پیشنهاد و انتقادات</option>
                    <option>تبلیغات</option>
                    <option>غیره</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label for="exampleText">متن ارسالی</Label>
                    <Input type="textarea" name="text" id="exampleText"  onChange={ evt => setPassage(evt.target.value)} />
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