import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import moment from 'moment';
import './newsPage.css';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ReactHtmlParser from 'react-html-parser';
import {Helmet} from "react-helmet";

//import Registration from '../../../../backend/src/models/Registration';

//dashboard will show all the events       
export default function NewsPage(props, {history}){
    const [news, setNews] = useState([]);
    const user = localStorage.getItem('user');
    // const user_id = localStorage.getItem('user_id');

    const [email, setEmail] = useState("");
    const [passage, setPassage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // const [rSelected, setRSelected] = useState(null);
    const [error, setError] = useState(false);
    // const [success, setSuccess] = useState(false);
    // const [messageHandler, setMessageHandler] = useState('');
    // const [eventsRequest, setEventsRequest] = useState([]);
    const [dropdownOpen, setDropdownOpen ] = useState(false);
    // const [eventRequestMessage, setEventRequestMessage ] = useState('');
    // const [eventRequestSuccess, setEventRequestSuccess] =  useState(false);
    

    const { id } = props.match.params;
    //console.log(this.props);
    //const id  = this.props.location.state

    // const toggle = () => setDropdownOpen(!dropdownOpen)

    useEffect(()=>{
        console.log("props:", props);
        console.log("newspage-index-id", id);
        getOneNews(id)
        //getOneNews(_id)
    },[]);

    const getOneNews = async(newsId) => {
        try {
            console.log("newsId in newsPage-index", newsId);
            //console.log("TEST:", id);
            const url = `/getOneNews/${newsId}` ;
            const response = await api.get(url, { headers: { user: user }})
            console.log("RESPONSE:", response.data.news);
            setNews(response.data.news);
        } catch (error) {
            console.log("my test for loggr");
            history.push('/');
        }
    };

    const handleSubmit = async evt =>{
        evt.preventDefault()
        if(email !== "" ){
            const response = await api.post('/contactUs', {email, passage});
            const user = response.data.user || false;
            const user_id = response.data.user_id || false;
        } else {
            setError(true);
            setErrorMessage("enter a passage")
            setTimeout(()=>{
                setError(false)
                setErrorMessage("")
            }, 2000)
        }
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ 'کهربا - ' + news.map(ns => (ns.title))}</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="کهربانت"/>
                <meta property="og:title" content={ 'کهربا - ' + news.map(ns => (ns.title))}/>
                <meta property="og:description" content={ 'کهربا - ' + news.map(ns => (ns.title))}/>
                <meta property="og:url" content= {`http://kahrobanet.ir/newsPage/${id}`} />
                {/* <meta property="og:locale" content="en_US"/> */}
                {/* <meta property="og:image" content="http://example.com/myImage.jpg"></meta> */}

            </Helmet>
            <div className="main-body">  
                <div><h2 className="news-title" >{news.map(ns => (ns.title))}</h2></div>
                {/* <p> {news.map(ns => (ns.passage))}</p> */}
                <div className="news-body" dir="rtl" >{ ReactHtmlParser(news.map(ns => (ns.passage))) }</div>;
                <div className="news-date"> تاریخ انتشار { news.map(ns=>(moment(ns.date).format('l,  h:mm:ss'))) }</div>
                <div className="news-source"> منبع خبر: { news.map(ns => (ns.sourceName)) } </div>
                <div className="news-link">
                    <a  href={news.map(ns => (ns.link))} target="_blank">لینک خبر</a>
                    
                </div>
            </div>
            <div className='middle'>
                <p></p>
            </div>
            {/* <div className="comments">
                <p className='commentsTitles'>فرم ارسال نظرات</p>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail" className="title">ایمیل</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="ایمیل"  onChange={ evt => setEmail(evt.target.value)}/>
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for="exampleText">متن ارسالی</Label>
                        <Input type="textarea" name="text" id="exampleText"  onChange={ evt => setPassage(evt.target.value)} />
                    </FormGroup>
                    
                    <Button className="submit-btn">ارسال</Button>
                </Form>
            </div> */}

        </>
    );
}