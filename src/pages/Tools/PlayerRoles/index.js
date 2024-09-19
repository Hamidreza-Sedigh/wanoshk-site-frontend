// import React, { useState } from 'react';
// import './style.css';
// import {
//   Accordion,
//   AccordionBody,
//   AccordionHeader,
//   AccordionItem,
//   UncontrolledAccordion,
//   Collapse,
//   Button,
//   Input,
//   Badge,
//   CloseButton,
//   Dropdown,
//   dropdownOpen,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from 'prop-types';

// export default function App({ direction }) {
//   const [newPlayer, setNewPlayer] = useState('');
//   const [players, setPlayers] = useState([]);

//   const [newRole, setNewRole] = useState('');
//   const [roles, setRoles] = useState([]);

//   const [playerRoles, setPlayerRoles] = useState([]);

//   const [open, setOpen] = useState('-1');

//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const [isOpen2, setIsOpen2] = useState(false);
//   const [dropdownOpen2, setDropdownOpen2] = useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);
//   const toggle1 = () => setDropdownOpen((prevState) => !prevState);
//   const toggle2 = () => setDropdownOpen2((prevState2) => !prevState2);

//   const toggleColl = () => setIsOpen(!isOpen);
//   const toggleColl2 = () => setIsOpen2(!isOpen2);

//   const toggleAcco = (id) => {
//     if (open === id) {
//       setOpen();
//     } else {
//       setOpen(id);
//     }
//   };

//   var randomNumber = 0;

//   function addPerson() {
//     // const midArr = players.slice(0);
//     // midArr.push(player);
//     // setPlayers(midArr);
//     if (newPlayer == '') {
//       alert('empty field');
//     } else {
//       setPlayers((pp) => [...pp, newPlayer]);
//       setNewPlayer('');
//     }
//   }

//   function addRole() {
//     if (newRole == '') {
//       alert('empty field');
//     } else {
//       const midArr = roles.slice(0);
//       midArr.push(newRole);
//       setRoles(midArr);
//       setNewRole('');
//     }
//   }

//   function addDefiledRole(e) {
//     const midArr = roles.slice(0);
//     midArr.push(e.target.value);
//     setRoles(midArr);
//   }

//   function deletePerson(player) {
//     const array = players.slice(0);
//     const index = array.indexOf(player);
//     if (index > -1) {
//       array.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     setPlayers(array);
//   }

//   function deleteRole(role) {
//     const array = roles.slice(0);
//     const index = array.indexOf(role);
//     if (index > -1) {
//       array.splice(index, 1); // 2nd parameter means remove one item only
//     }
//     setRoles(array);
//   }

//   function deal() {
//     setPlayerRoles([]);
//     console.log('players', players);
//     console.log('roles', roles);
//     if (players.length != roles.length) {
//       alert('not equal');
//     } else {
//       //let players = ['ali', 'hasan', 'ccc', 'ddd'];
//       //let roles = ['r11', 'r12', 'r13', 'r14'];
//       console.log('randomNumber:', randomNumber);
//       var remainedRoles = roles.slice(0);
//       console.log('remainedRoles:', remainedRoles);
//       let midArrayplayerRole = [];
//       players.map((p) => {
//         randomNumber = Math.floor(Math.random() * remainedRoles.length);
//         console.log(randomNumber);

//         // midArrayplayerRole.push({
//         //   playerName: p,
//         //   playerRole: remainedRoles[randomNumber],
//         // });
//         let tempRole = remainedRoles[randomNumber];
//         setPlayerRoles((pr) => [
//           ...pr,
//           {
//             playerName: p,
//             playerRole: tempRole,
//             playerRolesId: players.indexOf(p),
//           },
//         ]);

//         console.log('playerRoles:', playerRoles);

//         remainedRoles.splice(randomNumber, 1);
//         console.log('remainedRoles:', remainedRoles);
//       });
//       //setPlayerRoles(midArrayplayerRole);
//       console.log('midArrayplayerRole:', midArrayplayerRole);
//       console.log('playerRoles: ', playerRoles);
//     }
//   }

//   return (
//     <div>
//       <p>enter names:</p>
//       <Input
//         type="text"
//         name="player"
//         id="playerId"
//         value={newPlayer}
//         onChange={(evt) => {
//           setNewPlayer(evt.target.value);
//           //setTodayPrice(evt.target.value.toString().replace(/.{3}/g, '$&-'));
//         }}
//       />
//       {/* <button onclick >add</button> */}
//       {/* <input type="button" value={'add'} onClick={() => addPerson()} /> */}
//       <Button
//         color="info"
//         onClick={() => addPerson()}
//         style={{ marginBottom: '1rem' }}
//       >
//         add
//       </Button>
//       {/* <input type="button" value={'add'} onClick={setPlayers( [...players, 'new value'] )} /> */}
//       {players.map((p) => (
//         <li key={p._id}>
//           <span> {p} </span>
//           <span>
//             {' '}
//             <CloseButton onClick={() => deletePerson(p)} />{' '}
//           </span>
//         </li>
//       ))}
//       <br />
//       set Roles:
//       <div className="">
//         <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
//           <DropdownToggle caret color="info">
//             انتخاب نقش
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem header> نقشهای شهروند</DropdownItem>
//             <DropdownItem value={'دکتر'} onClick={addDefiledRole}>
//               دکتر
//             </DropdownItem>
//             <DropdownItem value={'کارآگاه'} onClick={addDefiledRole}>
//               کارآگاه
//             </DropdownItem>
//             <DropdownItem value={'کلانتر'} onClick={addDefiledRole}>
//               کلانتر
//             </DropdownItem>
//             <DropdownItem value={'جادوگر'} onClick={addDefiledRole}>
//               جادوگر
//             </DropdownItem>
//             <DropdownItem value={'شهردار'} onClick={addDefiledRole}>
//               شهردار
//             </DropdownItem>
//             <DropdownItem value={'گورکن'} onClick={addDefiledRole}>
//               گورکن
//             </DropdownItem>
//             <DropdownItem value={'دست کج'} onClick={addDefiledRole}>
//               دست کج
//             </DropdownItem>
//             <DropdownItem value={'صبا'} onClick={addDefiledRole}>
//               صبا
//             </DropdownItem>
//             <DropdownItem value={'فدایی'} onClick={addDefiledRole}>
//               فدایی
//             </DropdownItem>
//             <DropdownItem value={'فدایی'} onClick={addDefiledRole}>
//               وکیل
//             </DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem header>نقشهای مافیا</DropdownItem>
//             <DropdownItem value={'پدرخوانده'} onClick={addDefiledRole}>
//               پدرخوانده
//             </DropdownItem>
//             <DropdownItem value={'شب خسب'} onClick={addDefiledRole}>
//               شب خسب
//             </DropdownItem>
//             <DropdownItem value={'شاه کش'} onClick={addDefiledRole}>
//               شاه کش
//             </DropdownItem>
//             <DropdownItem value={'آمپول زن'} onClick={addDefiledRole}>
//               آمپول زن
//             </DropdownItem>
//             <DropdownItem value={'بمب ساز'} onClick={addDefiledRole}>
//               بمب ساز
//             </DropdownItem>
//             <DropdownItem value={'دورو'} onClick={addDefiledRole}>
//               دورو
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>

//         <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
//           <DropdownToggle caret color="info">
//             انتخاب نقش سکرت
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem value={'لیبرال'} onClick={addDefiledRole}>
//               لیبرال
//             </DropdownItem>
//             <DropdownItem value={'فاشیست'} onClick={addDefiledRole}>
//               فاشیست
//             </DropdownItem>
//             <DropdownItem value={'هیتلر'} onClick={addDefiledRole}>
//               هیتلر
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </div>
//       <Input
//         type="text"
//         name="role"
//         id="roleId"
//         value={newRole}
//         onChange={(evt) => {
//           setNewRole(evt.target.value);
//           //setTodayPrice(evt.target.value.toString().replace(/.{3}/g, '$&-'));
//         }}
//       />
//       {/* <button onclick >add</button> */}
//       {/* <input type="button" value={'add'} onClick={() => addRole()} /> */}
//       <Button
//         color="info"
//         onClick={() => addRole()}
//         style={{ marginBottom: '1rem' }}
//       >
//         add
//       </Button>
//       {roles.map((r) => (
//         <li key={r._id}>
//           <span> {r} </span>
//           <span>
//             {' '}
//             <CloseButton onClick={() => deleteRole(r)} />{' '}
//           </span>
//         </li>
//       ))}
//       <hr />
//       {/* <input type="button" value={'deal'} onClick={() => deal()} /> */}
//       <Button color="primary" onClick={() => deal()} style={{ margin: '1rem' }}>
//         Deal{' '}
//       </Button>
//       <Button color="primary" onClick={toggleColl} style={{ margin: '1rem' }}>
//         {isOpen ? 'hide' : 'show'}
//       </Button>
//       <Collapse isOpen={isOpen}>
//         list:
//         {playerRoles.map((r) => (
//           <li key={r._id}>
//             <span> {r.playerName} </span>
//             <span> -- </span>
//             <span> {r.playerRole} </span>
//           </li>
//         ))}
//       </Collapse>
//       <hr />
//       <div>
//         <Accordion open={open} toggle={toggleAcco}>
//           {playerRoles.map((r) => (
//             <AccordionItem>
//               <AccordionHeader targetId={r.playerRolesId.toString()}>
//                 {r.playerRolesId} {r.playerName}
//               </AccordionHeader>
//               <AccordionBody
//                 className="AccBody"
//                 accordionId={r.playerRolesId.toString()}
//               >
//                 {r.playerRole}
//               </AccordionBody>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </div>
//   );
// }

// App.propTypes = {
//   direction: PropTypes.string,
// };
