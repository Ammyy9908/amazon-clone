import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from "../StateProvider.js"
import {auth} from '../firebase/config.js'

function Header() {

    const [{ basket ,user},dispatch] = useStateValue();

    const handleAuth = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="brand" className="header_logo"/></Link>
            <div className="header__search">
                <input type="text" className="header__search_input"/>
                <SearchIcon className="search_icon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                <div className="header__option" onClick={handleAuth}>
                    <span className="option__lineone">
                        {!user?"Hello,Guest":"Hello,"+user.email}
                    </span>
                    <span className="option__linetwo">
                        {user?'Sign out':'Sign In'}
                    </span>
                </div>
                </Link>
                <div className="header__option">
                <span className="option__lineone">
                        Returns
                    </span>
                    <span className="option__linetwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="option__lineone">
                        Your
                    </span>
                    <span className="option__linetwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="basket_option">
                    <ShoppingBasketIcon/>
                    <span className="option__linetwo basket_count">
                        {basket?.length}
                    </span>
                   
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
