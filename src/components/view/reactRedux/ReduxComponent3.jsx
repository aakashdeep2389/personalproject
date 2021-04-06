import React from 'react'
import { connect } from 'react-redux'
import { action1 } from '../../../_actions/action1'

function ReduxComponent3(props) {
    return (
        <div className="body-container-wrapper bg-light">
            <h1>my name is called dynamically = {props.myname}</h1>
            {/* {
                props.tabledata.map((val, i) => {
                    return <>
                        <h1><span>{val.id}</span>&nbsp;
                        <span>{val.name}</span>&nbsp;
                        <span>{val.index}</span></h1>

                    </>
                })
            } */}
            <button onClick={() => { props.reduxHandler('successfullychange') }}>changecontent</button>
        </div>
    )
}

const mapStateToProps = (value) => {
    return {
        myname: value.name,
        tabledata: value.table
    }
}
const mapDispatchToProps = (dis) => {
    return {
        reduxHandler: (name) => { dis(action1(name)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent3)
