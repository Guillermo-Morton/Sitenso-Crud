import actionTypes from '../../actions/selects/actionTypes'

const initialState = {
  jobsPending: false,
  jobs: [],
  jobsError: null,

  techsPending: false,
  techs: [],
  techsError: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_JOB_OPTIONS_PENDING:
      return {
        ...state,
        jobsPending: true
      }
    case actionTypes.FETCH_JOB_OPTIONS_SUCCESS:
      return {
        ...state,
        jobsPending: false,
        jobs: action.jobs
      }
    case actionTypes.FETCH_JOB_OPTIONS_ERROR:
      return {
        ...state,
        jobsPending: false,
        jobsError: action.jobsError
      }

    case actionTypes.FETCH_TECH_OPTIONS_PENDING:
      return {
        ...state,
        techsPending: true
      }
    case actionTypes.FETCH_TECH_OPTIONS_SUCCESS:
      return {
        ...state,
        techsPending: false,
        techs: action.techs
      }
    case actionTypes.FETCH_TECH_OPTIONS_ERROR:
      return {
        ...state,
        techsPending: false,
        techsError: action.techsError
      }
    default:
      return state
  }
}
export const getJobs = state => state.jobs
export const getJobsPending = state => state.jobsPending
export const getJobsError = state => state.jobsError

export const getTechs = state => state.techs
export const getTechsPending = state => state.techsPending
export const getTechsError = state => state.techsError