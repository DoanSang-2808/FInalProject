import React from 'react'

import Header from './Header.js'
import AsideRightMain from './AsideRightMain.js'

function AsideRight() {
    return(
        <div className="aside-right col-md-9 col-sm-12">
            <Header />
            <AsideRightMain />
        </div>
        )
}
export default AsideRight