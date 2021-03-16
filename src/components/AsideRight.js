import React, { Component } from 'react'

import Header from './Header.js'
import AsideRightMain from './AsideRightMain.js'
import { Route } from 'react-router-dom'
import Post from './Post.js'
import About from './About.js'
import SignIn from './SignIn.js'


class AsideRight extends Component {
    render() {
        return (
            <div className="aside-right col-md-9 col-sm-12">
                <Route exact path='/'>
                    <Header />
                    <AsideRightMain />
                </Route>
                <Route path='/post'>
                    <Post />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
            </div>
        )
    }
}
export default AsideRight