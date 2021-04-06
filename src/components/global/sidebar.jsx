import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar_wrapper">
            <div className="menu-wrapper">
                <ul>
                    <li><i className="fas fa-project-diagram"></i> </li>
                    <li><i className="fas fa-sitemap"></i> </li>
                </ul>
            </div>
            <div className="menu-item-wrapper">
                <ul>
                    <li><span className="menu-items">Project</span>  </li>
                    <li><Link to="/practice" className="text-light"><span className="menu-items">Practice</span></Link>  </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Sidebar
