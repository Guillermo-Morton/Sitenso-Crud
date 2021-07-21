import actionTypes from "./actionTypes"

export default {
    editDev: (dev) => ({
        type: actionTypes.EDIT_DEV,
        dev
    }),

    fetchDevsPending: () => ({
        type: actionTypes.FETCH_DEVS_PENDING
    }),
    fetchDevsSuccess: (devs) => ({
        type: actionTypes.FETCH_DEVS_SUCCESS,
        devs
    }),
    fetchDevsError: (error) => ({
        type: actionTypes.FETCH_DEVS_ERROR,
        error
    })
}
