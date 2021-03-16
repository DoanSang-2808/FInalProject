import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function Header() {
    return (
        <div className='header container-fuild'>
            <ul className="row navBar">
                <li className="col-2 item"><Link to="/">Home</Link></li>
                <li className="col-2 item" ><Link to="/post">Post</Link></li>
                <li className="col-2 item"><Link to="/about">About</Link></li>
                <li className="col-2 item"></li>
                <li className="col-2 item"></li>
                <li className="col-2 item"><Link>SignIn</Link></li>
            </ul>
        </div>
    )
}
export default Header