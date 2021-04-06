import React, { useState } from 'react'

let _option = [
    'value2', 'value3', 'value4', 'others'
]
// var others = option.includes("others");

function DropdownImplement() {
    const [dropdownState, setDropdownState] = useState(false)
    const [addbutton, setaddbutton] = useState(false)
    const [addChildInput, setaddChildInput] = useState(false)
    const [addInputValue, setaddInputValue] = useState('')

    const [option, setOption] = useState(_option)


    const submitValue = () => {
        let __option = _option.unshift(addInputValue)
        console.log(option, __option, addInputValue, "dfkfkjfkjd");
        setOption(..._option, addInputValue)
        setaddInputValue('')
        if (addInputValue == '') {
            return false
        }
    }
    const addChild = (e) => {
        let presib = e.target.parentNode.previousSibling.children[0].classList.toggle('active')
        // e.target
        console.log(e.target.previousSibling)
    }
    const deleteItem = i => {
        console.log('sdfghjk', i)
        let removeEl = _option.splice(i, 1)
        setOption(..._option, removeEl)
    }
    const onInputChange = (e) => {
        setaddInputValue(e.target.value)
    }
    const dropdownValue = () => {
        setDropdownState(!dropdownState)
    }
    const onChange = (e) => {
        e.stopPropagation();
    }
    const addValue = (value) => {
        if (value == 'others') {
            setaddbutton(!addbutton)
        }
    }
    return (
        <div className="body-container">
            <div className="container">
                <div className="form-group">

                    <div className="form-control dropdownwrapper"  >
                        <div className={dropdownState ? "dropdown-button active" : "dropdown-button"} onClick={e => dropdownValue()} >
                            --select--
                        </div>
                        <div className={dropdownState ? "dropdown_list active" : "dropdown_list"}>
                            {
                                _option.map((value, i) => {
                                    return <div key={i} className="iteratedNode">
                                        <input className="btn btn-primary" type="checkbox" value="" />
                                        <span onClick={e => addValue(value)}> {value}
                                            <div className={addChildInput ? 'addvaluewrapper active p-3' : 'addvaluewrapper p-3'} >
                                                <input className="form-control" type="text" />
                                                <input className="btn btn-primary" type="button" value="add" />
                                            </div>
                                        </span>
                                        <div className="action">
                                            <small className="addchild" onClick={e => addChild(e)}>add</small>
                                            <span className="ml-auto" onClick={e => deleteItem(i)}><i className="fas fa-trash-alt"></i></span>
                                        </div>
                                    </div>
                                })

                            }
                            <div className={addbutton ? 'addvaluewrapper active p-3' : 'addvaluewrapper p-3'}>
                                <input className="form-control" type="text" value={addInputValue} onChange={e => onInputChange(e)} />
                                <input className="btn btn-primary" type="button" value="add" onClick={e => submitValue()} />
                            </div>
                        </div>

                    </div>


































                    {/* <select name="cars" id="cars" className="form-control" onChange={e => onChange(e)}>
                        {
                            option.map((value, i) => {
                                return <optgroup>
                                    <option value="volvo">{value}</option>
                                </optgroup>
                                return <optgroup label="Swedish Cars" value={value}>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                </optgroup>
                            })
                        }

                        <optgroup label="Swedish Cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                        </optgroup>
                        <optgroup label="German Cars">
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </optgroup>
                        <option value={other} onClick={e => e.stopPropagation}>
                            Others
                        </option>
                    </select> */}
                </div>
            </div>
        </div>
    )
}

export default DropdownImplement
