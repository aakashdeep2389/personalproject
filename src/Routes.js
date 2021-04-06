import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/view/home/home'
import Login from './Auth/Login'
import practice from './components/view/RoughPractice/practice'
import Headers from './components/global/header'
import Sidebar from './components/global/sidebar'
import Api from './components/view/api/api'
import VerticalSlider from './components/view/Sliders/VerticalSlider'
import ReduxComponent2 from './components/view/reactRedux/ReduxComponent2'
import SlickSlider from './components/view/Sliders/SlickSlider'
import PageLocomotiveScroll from './components/view/card/lottie_animation'
import ReduxComponent3 from './components/view/reactRedux/ReduxComponent3'
import JavascriptPractice from './components/view/javascriptPractice/JavascriptPractice'
import ReduxComponent4 from './components/view/reactRedux/ReduxComponent4'
import ToDoList from './components/view/ToDoList/ToDoList'
import signup from './Auth/signup'
import UserList from './components/view/apiMethod/UserList'
import UserEdit from './components/view/apiMethod/UserEdit'
import UserAdd from './components/view/apiMethod/UserAdd'
import DropdownImplement from './components/view/dropdown/Dropdown'
import login_auth from './components/view/login_auth/login_auth'
import TicTacToe from './components/view/ticTacToe/TicTacToe'
import ScrollF from './components/view/scrollF/ScrollF'
import Slider from './components/view/slider/Slider'
import snakeNstare from './components/view/snake-and-ladder/snake-and-ladder'


class Routes extends Component {
    render() {
        return (
            <Router>
                <Headers />
                <Sidebar />
                <main className="body-container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/singup" component={signup} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/practice" component={practice} />
                        <Route path="/api_call" component={Api} />
                        <Route path="/vertical_slider" component={VerticalSlider} />
                        <Route path="/react_redux" component={ReduxComponent2} />
                        <Route path="/slick_slider" component={SlickSlider} />
                        <Route path="/reduxComponent3" component={ReduxComponent3} />
                        <Route path="/ReduxComponent4" component={ReduxComponent4} />
                        <Route path="/lottie_animation" component={PageLocomotiveScroll} />
                        <Route path="/javascri_ptpractice" component={JavascriptPractice} />
                        <Route path="/todolist" component={ToDoList} />
                        <Route path="/userlist" component={UserList} />
                        <Route path="/UserId/:id" render={({ match }) => { return <UserEdit /> }} />
                        <Route path="/useradd" component={UserAdd} />
                        <Route path="/dropdown_implement" component={DropdownImplement} />
                        <Route path="/login_auth" component={login_auth} />
                        <Route path="/TicTacToe" component={TicTacToe} />
                        <Route path="/scroll_F" component={ScrollF} />
                        <Route path="/slider" component={Slider} />
                        <Route path="/snakeNstare" component={snakeNstare} />
                    </Switch>
                </main>
            </Router>
        )
    }
}


export default Routes