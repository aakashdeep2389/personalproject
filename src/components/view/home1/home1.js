// import React, { Component } from 'react'
// import User from '../User'
// import Guest from '../useState/Guest'
// export class home extends Component {
//     state = {
//         isregister : false
//     }
//     IsLogin = () => {
//         this.setState({isregister : true})
//     }
//     IsLogout = () => {
//         this.setState({isregister : false})
//     }
    
//     render() {

//         return (
//             <div>
//                 { this.state.isregister ? (<User name="aakash" data={this.IsLogout} />) : (<Guest data={this.IsLogin} />) }           
//              </div>
//         )
//     }
// }

// export default home

import React, { Component } from 'react'

export class home extends Component {
    state = {
        users : 
        [
            {id:101, name: "aakash", desgination: "dev"},
            {id:102, name: "sonam", desgination: "des"},
            {id:103, name: "ravi", desgination: "emp"}
        ]
    }
    
    render() {
        const btncss = {
            backgroundSize : "cover"
        };
        return (
            <div>
                {
                    this.state.users.map((value, index) => 
                    <h1>Id: {value.id} / Name: {value.name} / Desgination: {value.desgination} <sup>{index}</sup></h1>
                    )
                }
            </div>
        )
    }
}

export default home



// import React, { useState } from 'react'
// import Guest from '../components/Guest'
// export const contextApi = React.createContext()

// const Home = () => {
//     const vall = useState('rahul')
    

//     document.getElementById('root').innerHTML = 'inhherllla'
    
//     return (
//         <div>
//             <h1>Home page</h1>
//             <contextApi.Provider value={vall}>
//                 <Guest />
//             </contextApi.Provider>
//             {/* <h1>Name = {vall} </h1> */}
//         </div>
//     )
// }

// export default Home

