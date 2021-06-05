import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromBag } from '../../redux/bag/bag.actions'

import './CheckoutItem.scss'

const CheckoutItem = ({bagItem, clearItem}) => {
    const {name, imageURL, price} = bagItem
    return (
        <div className="checkout-item">
            <div className="checkout-img">
                <img arc={imageURL} alt='item' />
            </div>
            <span className="checkout-name">{name}</span>
            <span className="checkout-price">{price}</span>
            <div className="checkout-remove" onClick={() => clearItem(bagItem)}>
                <i className="fas fa-times" />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromBag(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)