export const addItemToBag = (bagItems, addedItem) => {
    const existingBagItem = bagItems.find(bagItem => bagItem.id === addedItem.id)

    if (existingBagItem) {
        return bagItems.map(bagItem => bagItem.id === addedItem.id ?
            {...bagItem, quantity: bagItem.quantity + 1} : bagItem)
    }

    return [...bagItems, {...addedItem, quantity: 1}]
}