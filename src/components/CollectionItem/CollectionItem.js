import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/bag/bag.actions'
import Button from '../Button/Button'
import './CollectionItem.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageURL} = item
    return (
        <div className="collection-item">
            <div className="collection-bg" style={{backgroundImage: `url(${imageURL})`}}>
            </div>
            <div className='collection-footer'>
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
            </div>
            <Button onClick={() => addItem(item)}>Add to Bag</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)