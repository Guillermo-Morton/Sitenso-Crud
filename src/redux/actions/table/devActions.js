import actionTypes from "./actionTypes"

export default {
    addDev: (dev) => ({
        type: actionTypes.ADD_DEV,
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
