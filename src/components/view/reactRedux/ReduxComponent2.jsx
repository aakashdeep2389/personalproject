import React from 'react'
import {connect} from 'react-redux'


function ReduxComponent2(props) {
    return (
        <div className="body-container-wrapper bg-light">
            <h1> get data from redux store {props.localUserName} </h1>
            <button onClick={()=>{props.localHandler('suresh')}}>change content</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        localUserName : state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     localHandler : (name) => {dispatch({ type : 'CHANGE_USERNAME', payload : name  })}
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (ReduxComponent2)
