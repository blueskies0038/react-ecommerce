import React from 'react'
import { connect } from 'react-redux'
import { toggleBagHidden } from '../../redux/bag/bag.actions'
import './BagIcon.scss'

const BagIcon = ({toggleBagHidden}) => (
    <div className='bag-icon' onClick={toggleBagHidden}>
        <i className="fas fa-shopping-bag fa-2x shopping-icon" />
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleBagHidden: () => dispatch(toggleBagHidden())
})
  
export default connect(null, mapDispatchToProps)(BagIcon);