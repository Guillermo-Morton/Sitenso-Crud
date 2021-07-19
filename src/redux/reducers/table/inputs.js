import actionTypes from "../../actions/table/actionTypes"

const initialState = {
    name: '',
    job: '',
    career: '',
    tech: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_NAME: {
            const { name } = action
            return {
                ...state,
                name
            }
        }
        case actionTypes.SET_INPUT_JOB: {
            const { job } = action 
            return {
                ...state,
                job
            }
        }
        case actionTypes.SET_INPUT_CAREER: {
            const { career } = action 
            return {
                ...state,
                career
            }
        }
        case actionTypes.SET_INPUT_TECH: {
            const { tech } = action 
            return {
                ...state,
                tech
            }
        }
        case actionTypes.RESET_INPUT: {
            return initialState
        }
        default:
            return state
    }
}