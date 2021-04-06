import React, { Component } from 'react'

export class Guest extends Component {
    render() {
        return (
            <div className="form-group">
              <label htmlFor="welcome">Welcome Guest</label><br />
              <button className="btn btn-warning" onClick={this.props.data}>Login</button>
            </div>
        )
    }
}

export default Guest

// import React from 'react'
// import {contextApi} from '../components/home'

// const Guest = () => {
//     return (
//         <div>
//             <h1>Guest page</h1>
//             <contextApi.Consumer>
//                 {data =>  <h1>{data}</h1> }
//             </contextApi.Consumer>
//         </div>
//     )
// }

// export default Guest
