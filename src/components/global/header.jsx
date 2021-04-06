import React from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'

const Header = () => {
    return (
        <header className="header-container-wrapper">
            <div className="logo_wrapper">
                <Link className="navbar-brand" to="/home"><img  src={require('../../assets/Img/logov3.png')}  /></Link>
            </div>
            <div className="header_menus">
                
                <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        SignUp/SignIn
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        <Link to="/home" >Home</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/">Logout</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/">Sing-In</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link to="/singup">Sing-Up</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    )
}

export default Header


