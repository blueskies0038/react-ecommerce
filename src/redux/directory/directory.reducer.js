const INITIAL_STATE = {
    sections: [{
        title: "Tops",
        imageURL: "https://cdn.shopify.com/s/files/1/0414/5899/1255/files/EDBDD6E5-FFE3-456D-BB53-C8FA8569DD7C_1_105_c_900x.jpg?v=1619311993",
        id: 1,
        link: "tops/"
    },
    {
        title: "Dresses",
        imageURL: "https://cdn.shopify.com/s/files/1/0414/5899/1255/files/81030023_b6a2ccea-1cd7-437c-8823-7021a9de3d2c_900x.jpg?v=1619312199",
        id: 2,
        link: "dresses/"
    },
    {
        title: "Accesories",
        imageURL: "https://cdn.shopify.com/s/files/1/0414/5899/1255/products/81060031_600x.jpg?v=1619275099",
        id: 2,
        link: "accesories/"
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer