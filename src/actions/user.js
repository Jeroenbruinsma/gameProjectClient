import request from 'superagent'
import {baseUrl} from '../constants'

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



export const winnerUser = (gameId) => (dispatch) => {
    //console.log("winneruser action ", gameId)
    request
        .put(`${baseUrl}/user`)
        .send({ gameId })
        .then(
            res => {
                console.log("result from winner action" , res.body.winner)
                dispatch(winner(res.body.winner))

            },
           
        )
}