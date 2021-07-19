import actionTypes from "./actionTypes"

export default {
    addDev: (dev) => ({
        type: actionTypes.ADD_DEV,
        dev
    }),
    updateDev: (index, dev) => ({
        type: actionTypes.UPDATE_DEV,
        index,
        dev
    }),
    deleteDev: (index) => ({
        type: actionTypes.REMOVE_DEV,
        index
    }),

    fetchProductsPending: () => ({
        type: actionTypes.FETCH_PRODUCTS_PENDING
    }),
    fetchProductsSuccess: (devs) => ({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        devs
    }),
    fetchProductsError: () => ({
        type: actionTypes.FETCH_PRODUCTS_ERROR,
        error
    })
}
