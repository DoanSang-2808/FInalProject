import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AsideRightMainUp from './AsideRightMainUp'
import AsideRightMainDown from './AsideRightMainDown'
import About from "./About"
import Post from "./Post"
function AsideRightMain() {
    return(
        <div className="main container-fuild">
            <Route path="/" exact>
                <AsideRightMainUp />
                <AsideRightMainDown />
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/post" component={Post}>
            </Route>
        </div>
    )
}
export default AsideRightMain