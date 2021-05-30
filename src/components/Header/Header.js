import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
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
            <Link className="nav-link" to="/sign-in">
                Sign In
            </Link>
        </div>
        <Link>
        
        </Link>
    </div>
)

export default Header