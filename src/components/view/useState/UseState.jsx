// import React, { useState } from 'react'
// import { Script } from '../script'
// import { Select, Tag } from 'antd';
// import { Skeleton } from 'react-loading-skeleton-placeholders';
// import { Card, Button } from 'react-bootstrap'
// import Select from 'react-select';


// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

// const UseSateComp = () => {

//     function    handleChange(value) {
//         console.log(`selected ${value}`);
//     }

//     const [firstname, updstate] = useState("")
//     const [lastname, lastupdstate] = useState("")

//     const [fisrtName, firstbind, firstreset] = CustomHook("")
//     const [lastName, lastbind, lastreset] = CustomHook("")

//     const Onsubmit = e => {
//         e.preventDefault()
//         alert(`hello ${fisrtName} ${lastName}`)
//         firstreset()
//         lastreset()
//     }


//     return (
//         <div>

//             <h2>on button click get value from input </h2>
//             <div className="form-group">
//                 <label>first name</label>
//                 <input type="text" name="firstName" {...firstbind} className="form-control" placeholder="firstname" />

//             </div>
//             <div className="form-group">
//                 <label>last name</label>
//                 <input type="text" name="lastName" {...lastbind} className="form-control" placeholder="lastname" />

//             </div>

//             <button onClick={Onsubmit} >Click Me !</button>
//             <br />
//             <br />
//             <h1 className="array_iteration">array itation</h1>

//             <Select
//     isMulti
//     name="colors"
//     options={options}
//     className="basic-multi-select"
//     classNamePrefix="select"
//   />



//             <br />
//             <br /><br />
//             <br />
//             <Card className="skeleton_wrapper">
//                 <Card.Title>
//                     <div className="loader_header">
//                         <div className="top_bar" >
//                             <Skeleton amount={1} />
//                         </div>
//                         <div className="top_bar_sub">
//                             <Skeleton amount={1} width={100} />
//                         </div>
//                     </div>
//                     <div className="titile_detail header_sub" >
//                         <Skeleton amount={2} width={100} />
//                     </div>
//                 </Card.Title>
//                 <Card.Body>
//                     <Card.Text>
//                         <div className="body_loader">
//                             <div className="body_bar" >
//                                 <Skeleton amount={1} />
//                             </div>
//                             <div className="body_circle">
//                                 <Skeleton skull={1} />
//                                 <Skeleton skull={1} />
//                                 <Skeleton skull={1} />
//                             </div>
//                             <div className="body_last_bar">
//                                 <Skeleton amount={1} />
//                             </div>
//                         </div>

//                     </Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                     <Skeleton className="footer_bar" amount={3} />
//                 </Card.Footer>
//             </Card>

//         </div>
//     )
// }

// export default UseSateComp;


// const CustomHook = () => {
//     const [state, setstate] = useState("")

//     const reset = () => {
//         setstate("")
//     }

//     const bind = {
//         state,
//         onChange: e => {
//             setstate(e.target.value)
//         }
//     }

//     return [state, bind, reset]
// }