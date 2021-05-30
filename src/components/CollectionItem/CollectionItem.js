import React from 'react'
import './CollectionItem.scss'

const CollectionItem = ({id, name, price, imageURL}) => (
    <div className="collection-item" key={id}>
        <div className="collection-bg" style={{backgroundImage: `url(${imageURL})`}}>
        </div>
        <div className='collection-footer'>
            <span className="item-name">{name}</span>
            <span className="item-price">{price}</span>
        </div>
    </div>
)

export default CollectionItem