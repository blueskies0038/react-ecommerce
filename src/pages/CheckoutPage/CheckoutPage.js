import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'
import { selectBagItems, selectBagTotal } from '../../redux/bag/bag.selectors'

import './CheckoutPage.scss'

const CheckoutPage = ({bagItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            bagItems.map(bagItem =>
                <CheckoutItem bagItem={bagItem} key={bagItem.id} />)
        }
        <div className="bag-total">
            <span>Total: ${total}</span>
        </div>
        <StripeCheckoutButton />
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    total: selectBagTotal
})

export default connect(mapStateToProps)(CheckoutPage)
