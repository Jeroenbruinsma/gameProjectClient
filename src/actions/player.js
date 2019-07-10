import request from 'superagent'

export const PLAYER_LOGIN= 'PLAYER_LOGIN'

export const playerLogIn = (login) => {
    return {
    type: PLAYER_LOGIN,
    payload: login
}}

// const baseUrl = 'http://172.16.29.20:5000'
const baseUrl = 'http://127.0.0.1:5000'

export const login = (email, password) => dispatch => {
    console.log('test5', email)
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(res => {
            dispatch(playerLogIn(res))
        })
        .catch(err => {console.log(err)})
}