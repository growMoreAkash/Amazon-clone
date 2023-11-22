import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';
const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = async() =>{
        try {
            await signOut(auth)
        } catch (error) {
          alert({error:error.message})
        }
    }
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
                <Link to={!user && '/login'} className='sign_in'>
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

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
