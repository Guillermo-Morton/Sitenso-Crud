import actionTypes from "../../actions/table/actionTypes"

const initialState = {
    nombre: '',
    puesto: '',
    profesion: '',
    tecnologia: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INPUT_NAME: {
            const { nombre } = action
            return {
                ...state,
                nombre
            }
        }
        case actionTypes.SET_INPUT_JOB: {
            const { puesto } = action 
            return {
                ...state,
                puesto
            }
        }
        case actionTypes.SET_INPUT_CAREER: {
            const { profesion } = action 
            return {
                ...state,
                profesion
            }
        }
        case actionTypes.SET_INPUT_TECH: {
            const { tecnologia } = action 
            return {
                ...state,
                tecnologia
            }
        }
        case actionTypes.RESET_INPUT: {
            return initialState
        }
        default:
            return state
    }
}