import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerJal } from 'jalali-react-datepicker';
//@material-ui/pickers
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
//import fa from 'date-fns/locale/fa';
//import { fa } from 'date-fns/locale';
import { Input } from 'reactstrap';
import momentJa from 'moment-jalali';
import momentJaa from 'moment-jalaali';
//registerLocale('fa', fa);

export default function App() {
  const [datep, setDatep] = useState(new Date());
  const [targetDate, setTargetDate] = useState('');

  const [dateStrap, setDateStrap] = useState(new Date());
  const [targetDateStrap, setTargetDateStrap] = useState(new Date());

  //const [year, setYear] = useState(new Date().getFullYear());jYear()
  const [year, setYear] = useState(momentJaa(new Date()).jYear());
  const [month, setMonth] = useState(momentJaa(new Date()).jMonth() + 1);
  const [day, setDay] = useState(momentJaa(new Date()).jDate());
  const [targetDateSim, setTargetDateSim] = useState('');

  function handleChange(inDate) {
    console.log('handeChange- inDate:', inDate);
    setDatep(inDate);
    console.log(
      new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        // timeStyle: 'long',
      }).format(inDate)
    );

    setTargetDate(
      new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        // timeStyle: 'long',
      }).format(inDate)
    );
  }

  function handleChange2() {
    console.log('handeChange- dateStrap:', dateStrap);
    //setDateStrap(e.target.value);

    //let m = momentJaa(dateStrap, 'YYYY/MM/DD');
    let m = momentJaa(dateStrap);

    console.log(
      new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        // timeStyle: 'long',
      }).format(m)
    );

    setTargetDateStrap(
      new Intl.DateTimeFormat('fa-IR', {
        dateStyle: 'full',
        // timeStyle: 'long',
      }).format(m)
    );
  }

  function handleSubmit() {
    let m = momentJaa('1360/5/26', 'jYYYY/jM/jD'); // Parse a Jalaali date
    let dateString = year + '/' + month + '/' + day;
    console.log('dateString', dateString);
    m = momentJaa(dateString, 'jYYYY/jM/jD');
    console.log(m.jYear());
    // console.log(m.jMonth() + 1);
    // console.log(m.jDate());

    //momentJaa.loadPersian({ dialect: 'persian-modern' });
    console.log(m.format('jYYYY/jM/jD'));
    console.log(m.format('YYYY/MM/DD'));
    //console.log(new Intl.DateTimeFormat('fa-IR', {}).format(m));
    console.log(
      new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
      }).format(m)
    );
    setTargetDateSim(
      new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
      }).format(m)
    );

    //Intl.NumberFormat
    //setTargetDateStrap(m);
  }

  return (
    <div>
      <h1>Date Convert</h1>
      <p>datep : {datep.toString()}</p>
      <p>datepLoc: {datep.toLocaleString().toString()}</p>
      <p>targetDate: {targetDate} </p>
      <DatePicker
        selected={datep}
        // locale="fa"
        onChange={(date) => handleChange(date)}
      />
      <hr />

      <p>date: {dateStrap.toString()}</p>
      <p>targetDate: {targetDateStrap.toString()}</p>
      <Input
        id="dateId"
        type="date"
        value={dateStrap}
        // placeholder={'Event Price £0.00'}
        // onChange={(evt) => handleChange2(evt)}
        onChange={(e) => {
          setDateStrap(e.target.value);
          handleChange2();
        }}
      />
      <hr />
      <p></p>
      <input
        type="number"
        id="yearId"
        name="year"
        defaultValue={year}
        onChange={(evt) => setYear(evt.target.value)}
      />
      <input
        type="number"
        id="monthId"
        name="month"
        defaultValue={month}
        onChange={(evt) => setMonth(evt.target.value)}
      />
      <input
        type="number"
        id="dayId"
        name="day"
        defaultValue={day}
        onChange={(evt) => setDay(evt.target.value)}
      />
      <input type="button" value={'محاسبه'} onClick={() => handleSubmit()} />
      <p>targetDate: {targetDateSim}</p>
    </div>
  );
}
