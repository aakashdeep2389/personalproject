
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'
class ReduxComponent1 extends Component {
    render() {
        return (
            <div>
                <div className="body-container-wrapper bg-light">
                    <h1>get data from redux store {this.props.myname} </h1>
                    <Button variant="primary" onClick={()=>{this.props.changeName('suresh')}}> change data Dynamically form store with the use of reducer </Button>
                </div>
            </div>
        )
    }
}


// const ReduxComponent1 = (props) => {
//     return (
//         <div className="body-container-wrapper bg-light">
//             <h1>get data from redux store {props.myname} </h1>
//         </div>
//     )
// }

const mapStateToProps = (state) => {
    return {
        myname: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName : (name) => {dispatch({type: 'CHANGE_NAME', payload : name })}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent1)





