import React, {useEffect, useState} from 'react';
import api from '../../services/api';
// import moment from 'moment';
import './sources.css';
import '../../App.css'
import { Link } from 'react-router-dom';

export default function Sources(props, {history}){
    const [sources, setSources] = useState([]);
    const user = localStorage.getItem('user');
    // const user_id = localStorage.getItem('user_id');
    //const [cSelected, setCSelected] = useState([]); // jean deleted


    //let { type } = props.location.state;
    //console.log(this.props);
    //const id  = this.props.location.state

    useEffect(()=>{
        getSources()
        //getOneNews(_id)
    },[]);


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