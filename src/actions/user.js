import request from 'superagent'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'
export const USER_GET_JWT = 'USER_GET_JWT'

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
export const onLoadJWT = (jwt) => {
return {
    type: USER_GET_JWT,
    payload: jwt
}}


//const baseUrl = 'http://localhost:3001'
const baseUrl = 'http://localhost:5000' // link for Jeroen


export const signup = (username, password, name, email, password_confirmation) =>(dispatch) => {
    
    request
    .post(`${baseUrl}/user`)
    .send({ username, password, name, email, password_confirmation })
    .then(
        res => {
            console.log('res',res)
            console.log( "token is:" , res.body.jwt)
            localStorage.setItem('token', res.body.jwt);
        dispatch(userSignup(res))
    
    },
        err => {
        console.log('res2',err)
        dispatch(userSignupFail(err))}
    )
}

