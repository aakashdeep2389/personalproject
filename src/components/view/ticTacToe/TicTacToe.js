import React, {useState} from 'react'

const TicTacToe = () => {
    const [state, setState] = useState({
        altranate : "X"
    })

    const handleOnChange = () => {
        if(state.altranate = ""){
            setState({
                altranate : "X"
            })
        }
        console.log('object', state.altranate)
    }
    return (
        <div className="body-container">
            <div className="container">
                <div className="tiktactoe">
                    <button value={state.altranate} onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate} onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <div   className="rowdivider"></div>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <div   className="rowdivider"></div>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                    <button value={state.altranate}  onClick={handleOnChange} className="tiktac-btn"></button>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe
