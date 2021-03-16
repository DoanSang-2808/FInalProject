import React from 'react'

function Header() {
    return (
        <div className='header container-fuild'>
            <ul className="row navBar">
                <li className="col-2 item"><a>Home</a></li>
                <li className="col-2 item" ><a>Post</a></li>
                <li className="col-2 item"><a>About</a></li>
                <li className="col-2 item"></li>
                <li className="col-2 item"></li>
                <li className="col-2 item"><a>SignIn</a></li>
            </ul>
        </div>
    )
}
export default Header