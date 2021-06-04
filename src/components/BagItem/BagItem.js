import React from 'react'
import './BagItem.scss'

const BagItem = ({item: {imageURL, price, name, quantity}}) => {
    return (
        <div className="bag-item">
            <img src={imageURL} alt="item" />
            <div className="item-details">
                <span className="item-name">{name}</span>
                <span className="item-price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default BagItem
