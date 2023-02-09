import React, { useState } from 'react';
// import React, { useState, useContext, useEffect } from 'react';
import api from '../../services/api';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
// import { FormText } from 'reactstrap';
import './contactUs.css';
import '../../App.css';

export default function ContactUs({history}){
    // const { setIsLoggedIn} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [category, setCategory] =  useState("");
    const [passage, setPassage] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")

    const handleSubmit = async evt =>{
        evt.preventDefault()

        if(email !== "" ){
            console.log("test1");
            // const response = await api.post('/contactUs', {email, category, passage});
            const response =  api.post('/contactUs', {email, category, passage});
            // const user = response.data.user || false;
            // const user_id = response.data.user_id || false;
            console.log("test2");
            setSuccess(true);
            setSuccessMessage("sent!");
                    setTimeout(()=>{
                        setSuccess(false)
                    }, 2000)
            setEmail("");
            console.log("test3");
        } else {
            setError(true);
            setErrorMessage("enter a valid Email!")
            setTimeout(()=>{
                setError(false)
                setErrorMessage("A")
            }, 2000)
        }
        

    }

    return(
        <>
            <div className="form box">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail" className="title">ایمیل</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="ایمیل" value={email}  onChange={ evt => setEmail(evt.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect"> موضوع </Label>
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
                    {/* <FormGroup>
                        <Label for="exampleFile">اضافه کردن فایل</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                        فایل شما
                        </FormText>
                    </FormGroup> */}
                    
                    
                    <Button className="submit-btn">ارسال</Button>
                </Form>
                { error ? (
                    <Alert className="event-validation" color="danger">ایمیل وارد نشده است</Alert>
                ): "" }
                { success ? (
                    <Alert className="event-validation" color="success">ارسال شد!!</Alert>
                ): "" }
            </div>
        </>
    );
}