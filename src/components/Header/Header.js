import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import './Header.scss'

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo">
            TattleTale
        </Link>
        <div className="nav">
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
            <Link className="nav-link" to="/collections">
                Collections
            </Link>
            <Link className="nav-link" to="/contact">
                Contact
            </Link>
            {
                currentUser ?
                <div className="nav-link" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="nav-link" to="/sign-in">Sign In</Link>
            }
        </div>
        <Link>
        
        </Link>
    </div>
)

export default Header