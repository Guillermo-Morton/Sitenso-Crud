import actionTypes from "./actionTypes"

export default {
    addDev: (dev) => ({
        type: actionTypes.ADD_DEV
    }),
    updateDev: (index, dev) => ({
        type: actionTypes.UPDATE_DEV
    }),
    deleteDev: (index) => ({
        type: actionTypes.REMOVE_DEV
    })
}