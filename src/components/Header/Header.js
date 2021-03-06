import React from 'react'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import BagIcon from '../BagIcon/BagIcon'
import BagDropdown from '../BagDropdown/BagDropdown'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectBagHidden } from '../../redux/bag/bag.selectors'


import './Header.scss'


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo" to="/">
            TattleTale
        </Link>
        <BagIcon />
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
        {hidden ? null :
            <BagDropdown />
        }
    </div>
)

// Gets the value of currentUser and hidden
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBagHidden
})

// Passes currentUser to the Header
export default connect(mapStateToProps)(Header)