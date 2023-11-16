import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
// import { auth } from "../firebase";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='header'>

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>


            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Akash</span>
                    <Link to="/login" className='sign_in'>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </Link>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwoheader__busketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>

    )
}

export default Header
