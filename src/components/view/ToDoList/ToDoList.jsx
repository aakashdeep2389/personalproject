import React, { useState, useEffect } from 'react'

function ToDoList() {


    const [fixedSideBar, setfixedSideBar] = useState('sidebar_initial')
    const fixedSide = () => {
        let getHeight = document.getElementById('sidebar').clientHeight;
        console.log(getHeight - getHeight / 2, 'getHight::::::::::::::', window.scrollY + 234);
        if (window.scrollY + 234 > getHeight - getHeight / 2) {
            setfixedSideBar('sidebar_fixed')
        }
        else {
            setfixedSideBar('sidebar_initial')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', fixedSide);
        fixedSide()
    }, [])



    const [todoitem, todoitemSetstate] = useState('')
    const [todoitemvlaue, setTodoitemvlaue] = useState([])
    const [selectGender, setselectGender] = useState('')
    const [selectGendershow, setselectGendershow] = useState([])

    const todoHandler = (e) => {
        console.log(e.target.value)
        todoitemSetstate(e.target.value)

    }

    const AddtodoItem = () => {
        todoitemSetstate('')
        if (todoitem === '') {
            return false
        }
        setTodoitemvlaue([...todoitemvlaue, todoitem])
        setselectGendershow([...selectGendershow, selectGender])
    }

    const itemDelete = (id) => {
        setTodoitemvlaue((current) => {
            return current.filter((c, index) => {
                return index !== id
            })
        }
        )
    }

    const onSelectOption = (e) => {
        setselectGender(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <div className="body-container-wrapper">
            <div className="container">
                <div className="todolist_wrapper">
                    {/* <h1>To Do List</h1> */}
                    <div className="todolist-container">
                        <div className="todoinput">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" value={todoitem} onChange={todoHandler} />
                                </div>
                                <div className="col">
                                    <select name="" id="" className="form-control" value={selectGender} onChange={onSelectOption}>
                                        <option >-Select Value-</option>
                                        <option >city</option>
                                        <option >country</option>
                                        <option >district</option>
                                        <option >state</option>
                                    </select>

                                </div>
                                <div className="col">
                                    <input type="date" className="" pattern="\d{2}-\d{2}-\d{4}" />
                                    <div className="addicon" onClick={AddtodoItem}><i className="fas fa-plus"></i></div>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="todolist_row">
                            <div className="row">
                                <div className="col">
                                    <ul>
                                        {todoitemvlaue.map((value, index) => {
                                            return <>
                                                <li key={Math.random()}> {value}   <span className="text-danger" onClick={() => { itemDelete(index) }}>delete</span></li>

                                            </>
                                        })
                                        }
                                    </ul>

                                </div>
                                <div className="col">
                                    {
                                        selectGendershow.map((value, index) => {
                                            return <p><sup>{index} </sup> {value} </p>
                                        })
                                    }
                                </div>
                                <div className="col">
                                    {/* <span> {todoitem} </span> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-4  " >
                        <div className={'h-100vh bg-dark ' + fixedSideBar} id="sidebar" >
                            <span className="fghjkl"></span>
                        </div>
                    </div>
                    <div className="col-8 h-80vh bg-success"></div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList


// import React, { Component } from 'react'

// export class ToDoList extends Component {
//     state = {
//         email1 : '',
//         fullname1 : '',
//         lastname: ''
//     }

//     todoHandler = (e) => {
//         console.log('ghjkl',e)
//         this.setState({
//             [e.target.name] : e.target.value

//         }, console.log([e.target.name] , e.target.value))
//     }
//     render() {
//         let {email1,lastname, fullname1} = this.state
//         return (
//             <div className="body-container-wrapper">
//              <div className="container">
//                  <div className="todolist_wrapper">
//                      <h1>To Do List class based</h1>
//                      <div className="todolist-container">
//                          <div className="todoinput">
//                              <input type="text" name='email' className="form-control" value={email1} onChange={this.todoHandler} />
//                              <input type="text" name='fullname1' className="form-control" value={fullname1} onChange={this.todoHandler} />
//                              <input type="text" name='lastname' className="form-control" value={lastname} onChange={this.todoHandler} />
//                              <div className="addicon" ><i className="fas fa-plus"></i></div>
//                          </div>
//                          <hr />
//                          <div className="todolist_row">

//                          </div>
//                      </div>
//                  </div>
//              </div>
//          </div>
//         )
//     }
// }

// export default ToDoList
