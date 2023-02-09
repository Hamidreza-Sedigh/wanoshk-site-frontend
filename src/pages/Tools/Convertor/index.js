import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ConvertRules from './ConvertRules.js';

function Converter({ direction, ...args }) {
  // const [km, setKm] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [quantity, setQuantity] = useState('distance');
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('m');
  const [quantityPersian, setQuantityPersian] = useState('طول');
  const [fromUnitPersian, setFromUnitPersian] = useState('کیلومتر');
  const [toUnitPersian, setToUnitPersian] = useState('متر');
  const [fromUnitCount, setFromUnitCount] = useState(0);
  // const [toUnitCount, setToUnitCount] = useState(0);
  // const [unit, setUnit] = useState('');
  const [fromRatio, setFromRatio] = useState(1000);
  const [toRatio, setToRatio] = useState(1);

  const quantityOption = [
    { quantityName: 'distance', quantityPersianName: 'طول' },
    { quantityName: 'area', quantityPersianName: 'مساحت' },
    { quantityName: 'volume', quantityPersianName: 'حجم' },
    { quantityName: 'speed', quantityPersianName: 'سرعت' },
    { quantityName: 'force', quantityPersianName: 'نیرو' },
    { quantityName: 'energy', quantityPersianName: 'انرژی' },
    { quantityName: 'temp', quantityPersianName: 'دما' },
    //{ quantityName: 'mass', quantityPersianName: 'جرم' },
    //{ quantityName: 'gasht', quantityPersianName: 'گشتاور' },
    //{ quantityName: 'pressure', quantityPersianName: 'فشار' },
    //{ quantityName: 'power', quantityPersianName: 'توان' },
    //{ quantityName: 'time', quantityPersianName: 'زمان' },
    //{ quantityName: 'density', quantityPersianName: 'چگالی' },
    //{ quantityName: 'frequency', quantityPersianName: 'فرکانس' },
    //{ quantityName: 'angle', quantityPersianName: 'زاویه' },
    //{ quantityName: 'acceleration', quantityPersianName: 'شتاب' },
  ];

  const options = [
    // { unit: '', label: '', group: '', ratioBase: 0 },
    ////Distance
    { unit: 'Mm', label: 'مگامتر', group: 'distance', ratioBase: 1000000 },
    { unit: 'km', label: 'کیلومتر', group: 'distance', ratioBase: 1000 },
    { unit: 'm', label: 'متر', group: 'distance', ratioBase: 1 },
    { unit: 'cm', label: 'سانتی متر', group: 'distance', ratioBase: 0.01 },
    { unit: 'mm', label: 'میلی متر', group: 'distance', ratioBase: 0.001 },
    { unit: 'um', label: 'میکرون', group: 'distance', ratioBase: 0.000001 },
    { unit: 'nm', label: 'نانومتر', group: 'distance', ratioBase: 0.000000001 },
    ////{unit: 'angstrom',label: 'آنگستروم',group: 'distance',ratioBase: 0.0000000001},
    { unit: 'mi', label: 'مایل', group: 'distance', ratioBase: 1.609344 },
    { unit: 'rd', label: 'راد', group: 'distance', ratioBase: 5.0292 },
    { unit: 'fathom', label: 'فاتوم', group: 'distance', ratioBase: 1.8288 },
    { unit: 'yard', label: 'یارد', group: 'distance', ratioBase: 0.9144 },
    { unit: 'ft', label: 'پا', group: 'distance', ratioBase: 0.3048 },
    { unit: 'in', label: 'اینچ', group: 'distance', ratioBase: 0.0254 },

    ////Aera
    { unit: 'km2', label: 'کیلومتر مربع', group: 'area', ratioBase: 1000000 },
    { unit: 'm2', label: 'متر مربع', group: 'area', ratioBase: 1 },
    { unit: 'cm2', label: 'سانتی متر مربع', group: 'area', ratioBase: 0.0001 },
    {
      unit: 'mm2',
      label: 'میلی متر مربع',
      group: 'area',
      ratioBase: 0.0000001,
    },
    { unit: 'ha', label: 'هکتار', group: 'area', ratioBase: 10000 },
    { unit: 'sqin', label: 'اینچ مربع', group: 'area', ratioBase: 0.00064516 },

    ////volume
    { unit: 'm3', label: 'مترمکعب', group: 'volume', ratioBase: 1 },
    {
      unit: 'cm3',
      label: 'سانتی متر مکعب (سی سی)',
      group: 'volume',
      ratioBase: 0.0000001,
    },
    { unit: 'mm3', label: 'مترمکعب', group: 'volume', ratioBase: 0.0000000001 },
    { unit: 'kl', label: 'کیلو لیتر', group: 'volume', ratioBase: 1 },
    { unit: 'l', label: 'لیتر', group: 'volume', ratioBase: 0.001 },
    { unit: 'cl', label: 'سانتی لیتر', group: 'volume', ratioBase: 0.00001 },
    { unit: 'ml', label: 'میلی لیتر', group: 'volume', ratioBase: 0.000001 },
    { unit: 'impgal', label: 'گالون', group: 'volume', ratioBase: 0.00454609 },

    ////speed
    { unit: 'm/s', label: 'متر بر ثانیه', group: 'speed', ratioBase: 1 },
    { unit: 'km/h', label: 'کیلومتر در ساعت', group: 'speed', ratioBase: 5.18 },
    { unit: 'mph', label: 'مایل بر ساعت', group: 'speed', ratioBase: 0.44704 },
    { unit: 'ft/s', label: 'پا در ثانیه', group: 'speed', ratioBase: 0.3048 },
    { unit: 'knot', label: 'گره', group: 'speed', ratioBase: 4.639 }, //???

    ////force
    { unit: 'GN', label: 'گیگا نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'MN', label: 'مگا نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'kN', label: 'کیلو نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'N', label: 'نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'mN', label: 'میلی نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'uN', label: 'میکرو نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'nN', label: 'نانو نیوتن', group: 'force', ratioBase: 1 },

    ////energy
    { unit: 'J', label: 'ژول', group: 'energy', ratioBase: 1 },
    {
      unit: 'kw.h',
      label: 'کیلو وات ساعت',
      group: 'energy',
      ratioBase: 3600000,
    },
    { unit: 'cal', label: 'کالری', group: 'energy', ratioBase: 4184 },

    ////temp
    { unit: 'k', label: 'کلوین', group: 'temp', ratioBase: 1 },
    { unit: 'CO', label: 'سانتی گراد', group: 'temp', ratioBase: 273.15 },
    { unit: 'FO', label: 'فارنهایت', group: 'temp', ratioBase: 1.8 },
  ];

  const toggle1 = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState2) => !prevState2);
  const toggle3 = () => setDropdownOpen3((prevState3) => !prevState3);

  // let quantityButtonTitle = 'کمیت';
  // let fromUnitButtonTitle = 'از واحد';
  // let toUnitButtonTitle = 'به واحد';

  function handleChange(e) {
    //setKm(e.target.value);
    setFromUnitCount(e.target.value);
  }

  
  function convert(fromUnitCount) {
    let baseUnitCount = 0;
    let result = 0;
    if (quantity === 'temp') {
      switch (fromUnit) {
        case 'CO':
          baseUnitCount = fromUnitCount;
          break;
        case 'k':
          baseUnitCount = fromUnitCount - 273.15;
          break;
        case 'FO':
          baseUnitCount = ((fromUnitCount - 32) * 5) / 9;
          break;
      }
      console.log('baseUnitCount', baseUnitCount);
      switch (toUnit) {
        case 'CO':
          result = baseUnitCount;
          break;
        case 'k':
          result = baseUnitCount + 273.15;
          break;
        case 'FO':
          result = (baseUnitCount * 9) / 5 + 32;
          break;
      }
      return result.toFixed(6);
    } else {
      baseUnitCount = fromUnitCount * fromRatio;
      result = baseUnitCount / toRatio; //.toFixed(2);
      //result = Number((baseUnitCount / toRatio).toFixed(2));
      //result = result % 1 == 0 ? result : result.toFixed(4);
      //result = parseFloat(result);
      result = result * 1;
      //result = prettyFloat(result);
    }
    //return Math.round(result) ;
    return result;
  }



  function changeQuantity(e) {
    console.log('changeQuantity-start');
    console.log('changeQuantity - ', e.target.value);
    //setQuantity = e.value;
    setQuantity(e.target.value);
    console.log('changeQuantity - ', e.target.value);
    setFromUnit(options.filter((opt) => opt.group === e.target.value)[0].unit);
    setFromUnitPersian(
      options.filter((opt) => opt.group === e.target.value)[0].label
    );
    setFromRatio(
      options.filter((opt) => opt.group === e.target.value)[0].ratioBase
    );

    setToUnit(options.filter((opt) => opt.group === e.target.value)[1].unit);
    setToUnitPersian(
      options.filter((opt) => opt.group === e.target.value)[1].label
    );
    setToRatio(
      options.filter((opt) => opt.group === e.target.value)[1].ratioBase
    );

    setQuantityPersian(
      quantityOption.filter((qo) => qo.quantityName === e.target.value)[0]
        .quantityPersianName
    );
  }

  function changeFromUnit(e) {
    setFromUnit(e.target.value);
    setFromUnitPersian(
      options.filter((opt) => opt.unit === e.target.value)[0].label
    );
    setFromRatio(
      options.filter((opt) => opt.unit === e.target.value)[0].ratioBase
    );
  }

  function changeToUnit(e) {
    setToUnit(e.target.value);
    setToUnitPersian(
      options.filter((opt) => opt.unit === e.target.value)[0].label
    );
    setToRatio(
      options.filter((opt) => opt.unit === e.target.value)[0].ratioBase
    );
  }

  return (
    <>
      <div className="page">
        <Form className="center">
          <FormGroup>
            <div className="d-flex ">
              <Label> یکا : </Label>
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle1}
                direction={direction}
              >
                <DropdownToggle caret color="primary">
                  {/* {quantityButtonTitle} */}
                  {quantityPersian}
                </DropdownToggle>
                <DropdownMenu>
                  {quantityOption
                    //.filter((opt) => opt.group == quantity)
                    .map((qo) => (
                      <DropdownItem
                        key={qo.quantityName}
                        value={qo.quantityName}
                        onClick={changeQuantity}
                      >
                        {qo.quantityPersianName}
                      </DropdownItem>
                    ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </FormGroup>
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
                  {fromUnitPersian}
                </DropdownToggle>

                <DropdownMenu>
                  {options
                    .filter((opt) => opt.group === quantity)
                    .map((op) => (
                      <DropdownItem
                        key={op.unit}
                        value={op.unit}
                        onClick={changeFromUnit}
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
                  {toUnitPersian}
                </DropdownToggle>
                <DropdownMenu>
                  {options
                    .filter((opt) => opt.group === quantity)
                    .map((op) => (
                      <DropdownItem
                        key={op.unit}
                        value={op.unit}
                        onClick={changeToUnit}
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
          <input type="text" value={fromUnitCount} onChange={handleChange} />
          {/* <p>quantity: {quantity}</p>
          <p>fromUnit: {fromUnit}</p>
          <p>fromUnitCount: {fromUnitCount}</p>
          <p>toUnit: {toUnit}</p>
          <p>toUnitCount: {toUnitCount}</p>
          <p>fromRatio: {fromRatio} </p>
          <p>toRatio: {toRatio} </p> */}

          <p className="result">
            {fromUnitCount} {fromUnitPersian} برابر است با{' '}
            {convert(fromUnitCount)} {toUnitPersian}
          </p>
        </div>
      </div>
    </>
  );
}

Converter.propTypes = {
  direction: PropTypes.string,
};

export default Converter;
