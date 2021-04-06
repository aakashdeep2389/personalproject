import React from 'react'
import axios from 'axios'

function login_auth() {
    let _api = axios.get('https://devapi.vimazi.com/apidocs/v1//user/login').then(res => {
        console.log('88888888888888888', _api, res)
        // return res
    })


    return (
        <div className="body-container">
            <div className="container">
                login_auth
            </div>
        </div>
    )
}

export default login_auth





// import React, { useState, Fragment, useEffect } from 'react';
// import Popup from 'reactjs-popup';
// import { LoaderSvg } from '../Reusable';
// import { addVendors } from '../../config/services/vendorService';
// import { getAllPincodes, getAllStates, getAllCitys } from '../../config/services/servicePincodes'
// import { toast } from 'react-toastify';
// import AsyncSelect from 'react-select/async';
// const { removeDuplicates } = require("../utils/Util.js");


// let style = { textTransform: 'capitalize', fontWeight: "Bold" }
// let styleForWrapper = { marginBottom: '.4em' }

// const addVendor = ({ hide, addVendorModal, getVendors }) => {

//     let labels = ['state', 'city', 'pincode'];
//     const initialState = {
//         error: '',
//         firstname: '',
//         lastname: '',
//         mobile: '',
//         email: '',
//         state: [],
//         tat: '',
//         countycode: '91',
//         selectedPincode: {},
//         states: [],
//         city: [],
//         pincode: [],
//         service: {},
//         demoGraphic: [],
//         isError: true,
//         newError: {}
//     }

//     const [state, setState] = useState({ ...initialState });

//     // const [selectedID, setSelectedId] = useState('');
//     // const [selectedService, setSelectedService] = useState('');
//     // const [error, setError] = useState('');
//     const [selectedPincode, setPincode] = useState([]);
//     const [selectedState, setSelectedState] = useState([]);
//     const [selectedCity, setselectedCity] = useState([]);
//     const [renderValue, setRenderValue] = useState(false);
//     const [newError, setNewError] = useState({})


//     const handleChange = (e, value, selector) => {
//         const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         switch (selector) {
//             case 'firstname': newError.firstname = value.length < 3 ? 'First Name must be 3 characters long!' : '';
//                 break;
//             case 'lastname': newError.lastname = value.length < 3 ? 'Last Name must be 3 characters long!' : '';
//                 break;
//             case 'email': newError.email = value.length > 0 ? re.test(value) ? '' : 'Please enter a valid email!' : ''
//                 break;
//             case 'mobile': newError.mobile = value.length > 9 && value.length < 11 ? '' : 'Please enter a valid mobile!'
//                 break;
//             default:
//                 break;
//         }
//         setState({ ...state, [selector]: value })
//         setNewError(newError)
//     }

//     // do not change anything in the useEffect

//     useEffect(() => {
//         if (selectedState && selectedState.length === 0) {
//             setselectedCity([]);
//             setPincode([]);
//         }
//     }, [selectedState])

//     useEffect(() => {
//         if (selectedCity && selectedCity.length === 0) {
//             // console.log('test')
//             setPincode([]);
//         }
//     }, [selectedCity])

//     useEffect(() => {
//         if (selectedState && selectedState.length > 1 && selectedCity && selectedCity.length === 0) {
//             // console.log("text to check the pincode effect")
//             setPincode([]);
//         }
//     }, [selectedPincode])

//     // do not change anything in the useEffect

//     const handleSubmit = () => {

//         const matcherForFeilds = {
//             "firstname": "First name",
//             "lastname": "Last name",
//             "mobile": "Mobile",
//             "email": "Email",
//         }


//         // this part of the validation is for the plain text and number feilds 
//         let feildsToValidate = ["firstname", "lastname", "email", "mobile"]
//         feildsToValidate.forEach(feild => {
//             if (state[feild] === '' || state[feild] === null || state[feild] === undefined) {
//                 newError[feild] = `${matcherForFeilds[feild]} cannot be left blank`
//             }
//         })

//         // this part of validation is for the dropdowns
//         let dropDownFeilds = ["selectedCity", "selectedState", "selectedPincode"];
//         dropDownFeilds.forEach(feild => {
//             if (feild === "selectedCity") {
//                 newError[feild] = selectedCity && selectedCity.length > 0 ? "" : 'City Cannot be blank'
//             } else if (feild === "selectedState") {
//                 newError[feild] = selectedState && selectedState.length > 0 ? "" : 'state Cannot be blank'
//             } else {
//                 newError[feild] = selectedPincode && selectedPincode.length > 0 ? "" : 'pincode Cannot be blank'
//             }
//         })

//         for (var key in newError) {
//             if (newError[key] === "") {
//                 delete newError[key]
//             }
//         }

//         setRenderValue(!renderValue)
//         if (Object.keys(newError).length < 1) {
//             const params = {
//                 firstName: state.firstname,
//                 lastName: state.lastname,
//                 email: state.email,
//                 mobileNo: state.mobile,
//                 countryCode: state.countycode,
//                 city: selectedCity.map(city => city.label),
//                 state: selectedState.map(state => state.label),
//                 tat: state.tat,
//                 pincode: selectedPincode && selectedPincode.filter((item, index) => selectedPincode.indexOf(item) === index).map(item => item.value)
//             }
//             addVendors(params)
//                 .then(response => {
//                     if (response && response.data.statusCode === 1) {
//                         hide();
//                         getVendors();
//                         toast.success(`${state.firstname} added as vendor !`)
//                     } else {
//                         setState({
//                             ...state,
//                             error: response.data.error.errorCode === 10 ? response.data.error.errorMessage : "Something went  wrong during saving the data, please  try again"
//                         })
//                     }
//                 })
//         }
//     }

//     // for state 
//     const getStateData = (val) => {

//         let params = { search: val, sortField: "_id", sortType: 1 }

//         return getAllStates({ params }).then(res => {
//             if (res && res.data.statusCode === 1) {
//                 let data = res.data.responseData
//                 let states = []
//                 if (data.result && data.result.length > 0) {
//                     data.result.forEach(key => {
//                         states.push({
//                             label: key._id,
//                             value: key._id
//                         })
//                     })
//                 }
//                 setState({ ...state, "states": states })
//                 return states
//             } else if (res.data.statusCode == 0) {
//                 console.log(res.data.error.errorMessage)
//             }
//         })
//     }

//     const loadStateServices = (key) => {
//         return getStateData(key);
//     }

//     const serviceStateSelect = (service) => {
//         // console.log(service, "removing")
//         let city = [];
//         let selectedState = []
//         service && service.map(item => {
//             selectedState.push(item);
//             city.push(item.label)
//         })
//         if (city.length > 0) { getCityData("", city) }
//         // console.log(city, "Citys")
//         setSelectedState(selectedState);
//         setNewError({ ...newError, "selectedState": '' })
//     }

//     // for city

//     const getCityData = (val, cities) => {

//         // this above is done to prepopulate 
//         // the cities when a user selects the state 

//         let params = { search: val, sortField: "_id", sortType: 1 }

//         if (cities && cities.length > 0) {
//             let data = []
//             cities.forEach(city => {
//                 data.push(city)
//             })
//             params.states = data.join()
//         }

//         if (selectedState) {
//             params["states"] = selectedState.map(city => city.label).join()
//         }

//         if (val) {
//             params.citySearch = val
//         }

//         return getAllCitys({ params }).then(res => {
//             if (res && res.data.statusCode === 1) {
//                 let data = res.data.responseData
//                 let citys = []
//                 if (data.result && data.result.length > 0) {
//                     data.result.forEach(state => {
//                         citys.push({
//                             label: state._id,
//                             value: state._id,
//                         })
//                     })
//                 }
//                 setState({ ...state, "citys": citys })
//                 return citys
//             } else if (res.data.statusCode == 0) {
//                 console.log(res.data.error.errorMessage)
//             }
//         })
//     }
//     const loadCityServices = (key) => { return getCityData(key) }

//     const serviceCitySelect = (service) => {
//         let pincodes = [];
//         let selectedCity = []
//         service && service.map(item => {
//             selectedCity.push(item);
//             pincodes.push(item.label);
//         })
//         if (pincodes.length > 0) { getPincodeData("", pincodes) }
//         setselectedCity(selectedCity);
//         setNewError({ ...newError, "selectedCity": '' })
//     }

//     // for pincode
//     const getPincodeData = (val, pincodes) => {

//         let citys = pincodes.join();
//         let states = selectedState.map(state => state.label).join();

//         let params = {
//             // "count": 10, 
//             // "pageNo": 0, 
//             "pincodeSearch": '',
//             "pincodes": [],
//             "citys": []
//         }

//         if (val) {
//             params["pincodeSearch"] = val
//         }

//         if (citys && citys.length > 0) {
//             params.citys = states;
//         }

//         if (states && states.length > 0) {
//             params.pincodes = citys
//         }

//         return getAllPincodes({ params }).then(res => {
//             if (res && res.data.statusCode === 1) {
//                 let data = res.data.responseData
//                 let result = data[0].result
//                 let pincodes = []
//                 result.map(service => {
//                     pincodes.push({
//                         label: service.pincode,
//                         value: service._id,
//                         state: service.state,
//                         city: service.city
//                     })
//                 })
//                 setState({ ...state, pincode: pincodes })
//                 setPincode(removeDuplicates([...selectedPincode, ...pincodes], 'label'))
//                 return pincodes
//             } else if (res.data.statusCode == 0) {
//                 console.log(res.data.error.errorMessage)
//             }
//         })
//     }

//     const loadServicesPincode = (key) => {
//         return getPincodeData(key);
//     }

//     const servicePincodeSelect = (service) => {
//         let selectedPincode = []
//         service && service.map(item => { selectedPincode.push(item) })
//         setPincode(selectedPincode);
//     }

//     const renderOptions = (val) => {
//         if (val === 'pincode') {
//             return (
//                 <div>
//                     <AsyncSelect
//                         isMulti
//                         value={selectedPincode}
//                         isDisabled={Array.isArray(selectedCity) && selectedCity.length > 0 ? false : true}
//                         cacheOptions
//                         loadOptions={loadServicesPincode}
//                         // defaultOptions={state.pincode}
//                         onChange={(val) => servicePincodeSelect(val)}
//                         placeholder="pincode"
//                     />
//                     {newError && newError["selectedPincode"] && <label style={{ color: "red" }}>{newError["selectedPincode"]}</label>}
//                 </div>
//             )
//         } else if (val === 'city') {
//             return (
//                 <div>
//                     <AsyncSelect
//                         isMulti
//                         isDisabled={Array.isArray(selectedState) && selectedState.length > 0 ? false : true}
//                         cacheOptions
//                         loadOptions={loadCityServices}
//                         // defaultOptions={state.city}
//                         onChange={(val) => serviceCitySelect(val)}
//                         placeholder="city"
//                         value={selectedCity}
//                     />
//                     {newError && newError["selectedCity"] && <label style={{ color: "red" }}>{newError["selectedCity"]}</label>}
//                 </div>
//             )
//         } if (val === 'state') {
//             return (
//                 <div>
//                     <AsyncSelect
//                         isMulti
//                         isDisabled={false}
//                         cacheOptions
//                         loadOptions={loadStateServices}
//                         // defaultOptions={state.states}
//                         onChange={(val) => serviceStateSelect(val)}
//                         placeholder="state"
//                     />
//                     { newError && newError["selectedState"] && <label style={{ color: "red" }}>{newError["selectedState"]}</label>}
//                 </div>
//             )
//         }
//     }
//     // console.log(newError, '')
//     return (
//         <Popup
//             open={addVendorModal}
//             closeOnDocumentClick={false}
//             onClose={hide}
//             closeOnEscape
//             lockScroll={true}
//         >
//             <div className="cm_modal pl-5 pr-5">
//                 <span className="cm_modal_close" onClick={() => hide()}>
//                     &times;
//             </span>
//                 <h3 className="text-center mb-4 mt-5">Add New Vendor</h3>
//                 {state && state.error &&
//                     <div
//                         className="text-danger text-center"
//                     >
//                         {state.error}
//                     </div>}
//                 <Fragment>
//                     <Fragment>
//                         <div style={{ ...styleForWrapper }} className="form-group">
//                             <label style={{ ...style }}>firstname</label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 onChange={(e) => handleChange(e, e.target.value, "firstname")}
//                                 name={"firstname"}
//                                 placeholder={"Firstname"}
//                             />
//                             {newError && newError.firstname && <label style={{ color: "red" }}>{newError.firstname}</label>}
//                         </div>
//                     </Fragment>
//                     <Fragment>
//                         <div style={{ ...styleForWrapper }} className="form-group">
//                             <label style={{ ...style }}>lastname</label>
//                             <input
//                                 type={"text"}
//                                 className="form-control"
//                                 onChange={(e) => handleChange(e, e.target.value, "lastname")}
//                                 name={"lastname"}
//                                 placeholder={"Lastname"}
//                             />
//                             {newError && newError.lastname && <label style={{ color: "red" }}>{newError.lastname}</label>}
//                         </div>
//                     </Fragment>
//                     <Fragment>
//                         <div style={{ ...styleForWrapper }} className="form-group">
//                             <label style={{ ...style }}>email</label>
//                             <input
//                                 type={"email"}
//                                 className="form-control"
//                                 onChange={(e) => handleChange(e, e.target.value, "email")}
//                                 name={"email"}
//                                 placeholder={"Email"}
//                             />
//                             {newError && newError.email && <label style={{ color: "red" }}>{newError.email}</label>}
//                         </div>
//                     </Fragment>
//                     <Fragment>
//                         <div style={{ ...styleForWrapper }} className="form-group">
//                             <label style={{ ...style }}>mobile</label>
//                             <input
//                                 type={"number"}
//                                 className="form-control"
//                                 onChange={(e) => handleChange(e, e.target.value, "mobile")}
//                                 name={"mobile"}
//                                 placeholder={"Mobile"}
//                                 maxLength={10}
//                             />
//                             {newError && newError.mobile && <label style={{ color: "red" }}>{newError.mobile}</label>}
//                         </div>
//                     </Fragment>
//                     {
//                         labels.map((label, index) => {
//                             return (
//                                 <div key={index} className="form-group">
//                                     <label style={{ textTransform: 'capitalize' }}>{label}</label>
//                                     {renderOptions(label)}
//                                 </div>
//                             )
//                         })
//                     }
//                 </Fragment>
//                 <button onClick={handleSubmit} className="btn btn-primary btn-block mt-4">Save</button>
//             </div>
//         </Popup>
//     )
// }

// export default addVendor;