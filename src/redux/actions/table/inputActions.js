import actionTypes from "./actionTypes"

export default {
    setInputName: name => ({
        type: actionTypes.SET_INPUT_NAME,
        name
    }),
    setInputCareer: career => ({
        type: actionTypes.SET_INPUT_CAREER,
        career
    }),
    setInputTech: tech => ({
        type: actionTypes.SET_INPUT_TECH,
        tech
    }),
    setInputJob: job => ({
        type: actionTypes.SET_INPUT_JOB,
        job
    })
}