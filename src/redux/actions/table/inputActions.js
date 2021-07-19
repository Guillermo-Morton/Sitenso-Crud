import actionTypes from "./actionTypes"

export default {
    setInputName: nombre => ({
        type: actionTypes.SET_INPUT_NAME,
        nombre
    }),
    setInputCareer: profesion => ({
        type: actionTypes.SET_INPUT_CAREER,
        profesion
    }),
    setInputTech: tecnologia => ({
        type: actionTypes.SET_INPUT_TECH,
        tecnologia
    }),
    setInputJob: puesto => ({
        type: actionTypes.SET_INPUT_JOB,
        puesto
    }),
    resetInput: () => ({
        type: actionTypes.RESET_INPUT
    })
}