import React from 'react'
import {connect} from 'react-redux'
import {_ChangeNameAction} from '../../../_actions/Action18sep'


const ReduxComponent4 =(props)=> {
    return (
        <div className="body-container-wrapper bg-light">
            <div className="container">
                <h1>redux data change = ( {props.redux_data_key} ) </h1>
                <button className="btn btn-dark" onClick={() => {props.changedata_fromredux()}}>
                        change it <span className="badge badge-primary"></span>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state, state.reducdata, 'redux18sep_reduxkey')

 return {
     redux_data_key : state.reducdata
 }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changedata_fromredux : () => {dispatch(_ChangeNameAction())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent4) 
