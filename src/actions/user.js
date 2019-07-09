import request from 'superagent'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'

export const userSignup = (login) => {
    return {
    type: USER_SIGNUP,
    payload: login
}}
export const userSignupFail = (error) => {
return {
    type: USER_SIGNUP_FAIL,
    payload: error
}}

const baseUrl = 'http://localhost:3001'

export const signup = (username, password, name, email, password_confirmation) =>(dispatch) => {
    
    request
    .post(`${baseUrl}/user`)
    .send({ username, password, name, email, password_confirmation })
    .then(
        res => {
        console.log('res',res)
        dispatch(userSignup(res))},
        err => {
        console.log('res2',err)
        dispatch(userSignupFail(err))}
    )
}