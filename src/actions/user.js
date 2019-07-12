import request from 'superagent'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'
export const USER_GET_JWT = 'USER_GET_JWT'
export const USER_WINNER = 'USER_WINNER'


export const userSignup = (login) => {
    return {
        type: USER_SIGNUP,
        payload: login
    }
}
export const userSignupFail = (error) => {
    return {
        type: USER_SIGNUP_FAIL,
        payload: error
    }
}
export const onLoadJWT = (jwt) => {
    return {
        type: USER_GET_JWT,
        payload: jwt
    }
}
export const winner = (data) => {
    return {
        type: USER_WINNER,
        payload: data
    }
}




//const baseUrl = 'http://localhost:3001'
const baseUrl = 'http://localhost:5000' // link for Jeroen


export const signup = (username, password, name, email, password_confirmation) => (dispatch) => {

    request
        .post(`${baseUrl}/user`)
        .send({ username, password, name, email, password_confirmation })
        .then(
            res => {
                localStorage.setItem('token', res.body.jwt);
                
                dispatch(userSignup(res))

            },
            err => {
                dispatch(userSignupFail(err))
            }
        )
}



export const winnerUser = (winnerId) => (dispatch) => {

    request
        .get(`${baseUrl}/user`)
        .send({ winnerId })
        .then(
            res => {
                console.log("result from winner action" , res.body.winner)
                dispatch(winner(res.body.winner))

            },
           
        )
}