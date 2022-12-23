import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Converter({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [quantity, setQuantity] = useState('distance');
  const [fromCurrency, setFromCurrency] = useState('dollor');
  const [toCurrency, setToCurrency] = useState('rial');
  const [quantityPersian, setQuantityPersian] = useState('طول');
  const [fromCurrencyPersian, setFromCurrencyPersian] = useState('دلار');
  const [toCurrencyPersian, setToCurrencyPersian] = useState('ریال');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);
  const [Currency, setCurrency] = useState('');
  //const [] = useState({options.filter((opt) => opt.currency == 'دلار')[0].ratioBuy});

  const [toRatio, setToRatio] = useState(1);

  const options = [
    { currency: 'rial', label: 'ریال', group: 'D', ratioBuy: 1 },
    { currency: 'dollor', label: 'دلار', group: 'D', ratioBuy: 331000 },
    { currency: 'Euro', label: 'یورو', group: 'D', ratioBuy: 342000 },
  ];

  const [fromRatio, setFromRatio] = useState(options[1].ratioBuy);

  const toggle1 = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState2) => !prevState2);
  const toggle3 = () => setDropdownOpen3((prevState3) => !prevState3);

  let quantityButtonTitle = 'کمیت';
  let fromUnitButtonTitle = 'از واحد';
  let toUnitButtonTitle = 'به واحد';

  function handleChange(e) {
    //setKm(e.target.value);
    setFromCurrencyAmount(e.target.value);
  }

  function changeDollor(e) {
    setFromRatio(e.target.value);
  }

  function convert(fromUnitCount) {
    let baseUnitCount = 0;
    let result = 0;

    baseUnitCount = fromUnitCount * fromRatio;
    result = baseUnitCount / toRatio; //.toFixed(2);
    //result = Number((baseUnitCount / toRatio).toFixed(2));
    //result = result % 1 == 0 ? result : result.toFixed(4);
    //result = parseFloat(result);
    result = result * 1;
    //result = prettyFloat(result);
    //return Math.round(result) ;

    if (toCurrency == 'rial')
      result = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'IRR',
      }).format(result);
    //{new Intl.NumberFormat('fa-FA').format(totalPrice)}
    return result;
  }

  function changeFromCurrency(e) {
    setFromCurrency(e.target.value);
    setFromCurrencyPersian(
      options.filter((opt) => opt.currency == e.target.value)[0].label
    );
    setFromRatio(
      options.filter((opt) => opt.currency == e.target.value)[0].ratioBuy
    );
  }

  function changeToCurrency(e) {
    setToCurrency(e.target.value);
    setToCurrencyPersian(
      options.filter((opt) => opt.currency == e.target.value)[0].label
    );
    setToRatio(
      options.filter((opt) => opt.currency == e.target.value)[0].ratioBuy
    );
  }

  return (
    <>
      <div className="page">
        <Form className="center">
          <FormGroup>
            <div className="d-flex ">
              <Label> از واحد : </Label>
              <Dropdown
                isOpen={dropdownOpen2}
                toggle={toggle2}
                direction={direction}
              >
                <DropdownToggle caret color="primary">
                  {/* {fromUnitButtonTitle} */}
                  {fromCurrencyPersian}
                </DropdownToggle>

                <DropdownMenu>
                  {options
                    //.filter((opt) => opt.group == quantity)
                    .map((op) => (
                      <DropdownItem
                        key={op.currency}
                        value={op.currency}
                        onClick={changeFromCurrency}
                      >
                        {op.label}
                      </DropdownItem>
                    ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </FormGroup>
          {/* <div className="d-flex p-5"> */}
          <FormGroup>
            <div className="d-flex">
              <Label> به واحد : </Label>
              <Dropdown
                isOpen={dropdownOpen3}
                toggle={toggle3}
                direction={direction}
              >
                <DropdownToggle caret color="primary">
                  {/* {toUnitButtonTitle} */}
                  {toCurrencyPersian}
                </DropdownToggle>
                <DropdownMenu>
                  {options
                    //.filter((opt) => opt.group == quantity)
                    .map((op) => (
                      <DropdownItem
                        key={op.currency}
                        value={op.currency}
                        onClick={changeToCurrency}
                      >
                        {op.label}
                      </DropdownItem>
                    ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </FormGroup>
        </Form>
        {/* <div className="App"> */}
        <div className="resultBox">
          <Input
            type="text"
            value={fromCurrencyAmount}
            onChange={handleChange}
          />
          {/* <p>quantity: {quantity}</p>
          <p>fromUnit: {fromUnit}</p>
          <p>fromUnitCount: {fromUnitCount}</p>
          <p>toUnit: {toUnit}</p>
          <p>toUnitCount: {toUnitCount}</p>
          <p>fromRatio: {fromRatio} </p>
          <p>toRatio: {toRatio} </p> */}

          <p className="result">
            {fromCurrencyAmount} {fromCurrencyPersian} برابر است با{' '}
            {convert(fromCurrencyAmount)} {toCurrencyPersian}
          </p>
          <Label for="diffAmount">محاسبه با مقدار دلار دلخواه:</Label>
          <Input
            id="diffAmount"
            type="text"
            //value={fromCurrencyAmount}
            onChange={changeDollor}
          />
        </div>
      </div>
    </>
  );
}

Converter.propTypes = {
  direction: PropTypes.string,
};

export default Converter;
