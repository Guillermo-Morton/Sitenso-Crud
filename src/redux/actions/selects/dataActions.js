import actionTypes from "./actionTypes"

export default {

    fetchJobsPending: () => ({
        type: actionTypes.FETCH_JOB_OPTIONS_PENDING
    }),
    fetchJobsSuccess: (jobs) => ({
        type: actionTypes.FETCH_JOB_OPTIONS_SUCCESS,
        jobs
    }),
    fetchJobsError: (error) => ({
        type: actionTypes.FETCH_JOB_OPTIONS_ERROR,
        jobsError:error
    }),

    fetchTechsPending: () => ({
        type: actionTypes.FETCH_TECH_OPTIONS_PENDING
    }),
    fetchTechsSuccess: (techs) => ({
        type: actionTypes.FETCH_TECH_OPTIONS_SUCCESS,
        techs
    }),
    fetchTechsError: (error) => ({
        type: actionTypes.FETCH_TECH_OPTIONS_ERROR,
        techsError:error
    })
}