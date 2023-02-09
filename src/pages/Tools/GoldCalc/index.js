import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [todayPrice, setTodayPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [wage, setWage] = useState(0);
  const [tax, setTax] = useState(0);
  const [profit, setProfit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // let todayPriceDefault = 0;
  // let weightDefault = 0;
  let wageDefault = 11;
  let taxDefault = 9;
  let profitDefault = 7;

  function handleSubmit() {
    let withWage = 0;
    let ww = 0;
    let w = 0;
    let res = 0;

    console.log('type:', typeof wage);
    console.log('todayPrice:', todayPrice);
    console.log('wage:', wage);
    withWage = parseInt(todayPrice) + (parseInt(todayPrice) * wage) / 100;
    console.log('withWage:', withWage);
    ww = withWage * weight;
    console.log('ww :', ww);
    w = ww + (ww * profit) / 100;
    console.log('w  :', w);
    res = w + (w * tax) / 100;
    setTotalPrice(res);
    console.log('res:', res);
    console.log('totalPrice:', totalPrice);
  }

  return (
    <div className="main">
      <h1>محاسبه گر قیمت طلا!</h1>

      <p>قیمت روز طلا</p>
      <label htmlFor="todayPriceId">قیمت روز</label>
      <input
        type="number"
        name="todayPrice"
        id="todayPriceId"
        placeholder="قیمت روز"
        //value={todayPrice}
        onChange={(evt) => {
          setTodayPrice(evt.target.value);
          //setTodayPrice(evt.target.value.toString().replace(/.{3}/g, '$&-'));
        }}
      />

      <p>وزن طلا</p>
      <input
        type="number"
        name="weight"
        id="weightId"
        placeholder="وزن"
        onChange={(evt) => setWeight(evt.target.value)}
      />

      <p>اجرت ساخت:</p>
      <input
        type="number"
        name="wage"
        id="wageId"
        placeholder="11"
        onChange={(evt) => setWage(evt.target.value)}
        //value={wageDefault}
        defaultValue={wageDefault}
      />

      <p>مالیات: (در حال حاضر 9 درصد)</p>
      <input
        type="number"
        name="tax"
        id="taxId"
        placeholder="9"
        onChange={(evt) => setTax(evt.target.value)}
        //value={taxDefault}
        defaultValue={taxDefault}
      />

      <p>سود طلا فروش (معمولا 7 درصد)</p>
      <input
        type="number"
        name="profit"
        id="profitId"
        placeholder="7"
        onChange={(evt) => setProfit(evt.target.value)}
        //value={profitDefault}
        defaultValue={profitDefault}
      />
      <input type="button" value={'محاسبه'} onClick={() => handleSubmit()} />

      {/* <p> {totalPrice} </p> */}
      {/* <p> {new Intl.NumberFormat('de-DE', {style:"currency", currency:"IRR"}).format(totalPrice)} </p> */}
      <p> {new Intl.NumberFormat('fa-FA').format(totalPrice)} </p>
      {/* <Form onSubmit={handleSubmit} >
          <div className="input-group">
              <FormGroup className="form-group-"></FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="email" name="email" id="exampleEmail" placeholder="your email" onChange={ evt => setEmail(evt.target.value)}/>
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input type="password" name="password" id="examplePassword" placeholder="your password" onChange={ evt => setPassword(evt.target.value)} />
              </FormGroup>
          </div>
          <FormGroup>
              <Button className="submit-btn">Submit</Button>
          </FormGroup>
          <FormGroup>
              <Button className="secondary-btn" onClick={()=>history.push("/register")}>New Account</Button>
          </FormGroup>
      </Form> */}
    </div>
  );
}
