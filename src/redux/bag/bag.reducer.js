import { BagActionTypes } from './bag.types'
import { addItemToBag } from './bag.utils'

const INITIAL_STATE = {
    hidden: true,
    bagItems: []
}

// Updates the state of bag depending on the action
const bagReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BagActionTypes.TOGGLE_BAG_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        // Adds the added item to the existing bag
        case BagActionTypes.ADD_ITEM:
            return {
                ...state,
                bagItems: addItemToBag(state.bagItems, action.payload)
            }
        case BagActionTypes.CLEAR_ITEM_FROM_BAG:
            return {
                ...state,
                bagItems: state.bagItems.filter(
                    bagItem => bagItem.id !== action.payload.id
                )
            }
        default:
            return state
    }
}

export default bagReducer