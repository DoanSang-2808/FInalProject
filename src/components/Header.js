import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function Header() {
    return (
            <div className='header container-fuild'>
                <ul className="row navBar">
                    <li className="col-2 item"><Link to="/" >Home</Link></li>
                    <li className="col-2 item" ><Link to="/post">Post</Link></li>
                    <li className="col-2 item"><Link to="/about">About</Link></li>
                    <li className="col-2 item"></li>
                    <li className="col-2 item"></li>
                    <li className="col-2 item"><Link to="/signin">SignIn</Link></li>
                </ul>
            </div>
            /* <div>
                <Route exact path='/' >
                    <App />
                </Route>
                <Route path='/post'>
                    <Post />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path="/sign">
                    <SignIn />
                </Route>
            </div> */
       
=======
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
>>>>>>> 6a9d2dd421469763fd28d9b3b79ed8c964dbc033
    )
}
export default Header