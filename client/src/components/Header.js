import React from 'react'
import './css/Header.css'

const Header = () => {
    return (
        <div >

            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header_search">
                <input className="header__searchInput" type="text" />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__otion'></span>
                </div>
                <div className='header__option'>

                </div>
                <div className='header__option'>

                </div>
            </div>

        </div>

    )
}

export default Header
