import React, {useEffect} from 'react';
import './tools.css';
import '../../App.css'
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiGoldBar } from 'react-icons/gi';
import { FcCalendar } from 'react-icons/fc';
import { SiConvertio } from 'react-icons/si';

export default function Sources(props, {history}){
    // const [sources, setSources] = useState([]);
    // const user = localStorage.getItem('user');
    // const user_id = localStorage.getItem('user_id');

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
                    
                </ul>
            </div>

        </>
    );
}