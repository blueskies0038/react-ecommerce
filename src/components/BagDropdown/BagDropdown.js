import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectBagItems, selectBagItemsCount } from '../../redux/bag/bag.selectors'
import BagItem from '../BagItem/BagItem'
import Button from '../Button/Button'
import './BagDropdown.scss'

const BagDropdown = ({bagItems, itemCount}) => (
    <div className="bag-dropdown">
        <div className="bag-items">
            {bagItems.map(bagItem =>
                <BagItem key={bagItem.id} item={bagItem} />
            )}
        </div>
        <span className="bag-count">{itemCount}</span>
        <Button>Checkout</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    bagItems: selectBagItems,
    // Adding up all the quantity values in bagItems
    itemCount: selectBagItemsCount
})

export default connect(mapStateToProps)(BagDropdown)
