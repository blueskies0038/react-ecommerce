import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { toggleBagHidden } from '../../redux/bag/bag.actions'
import { selectBagItems, selectBagItemsCount } from '../../redux/bag/bag.selectors'

import BagItem from '../BagItem/BagItem'
import Button from '../Button/Button'
import './BagDropdown.scss'


const BagDropdown = ({bagItems, itemCount, history, dispatch}) => (
    <div className="bag-dropdown">
        <div className="bag-items">
            {bagItems.length ? (
                bagItems.map(bagItem =>
                <BagItem key={bagItem.id} item={bagItem} />
            )) : (
                <span className="empty-message">Your bag is empty</span>
            )}
        </div>
        <span className="bag-count">{itemCount}</span>
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleBagHidden());
            }}>Checkout</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    // Adding up all the quantity values in bagItems
    itemCount: selectBagItemsCount
})

export default withRouter(connect(mapStateToProps)(BagDropdown))
