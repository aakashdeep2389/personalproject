import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
            <div className="form-group">
                <h1>Welcome {this.props.name}</h1>
              <br />
              <button className="btn btn-warning" onClick={this.props.data} >Logout</button>
              <br /><br />
              <button className="btn btn-success">SignUp </button>
            </div>
        </div>
        )
    }
}

export default User

// import React from 'react'

// const User = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default User

