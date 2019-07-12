import request from 'superagent'

export const PLAYER_LOGIN= 'PLAYER_LOGIN'

export const playerLogIn = (login) => {
    return {
    type: PLAYER_LOGIN,
    payload: login
}}

const baseUrl = 'http://localhost:5000'


export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(res => {
            dispatch(playerLogIn(res))
        })
        .catch(err => {console.log(err)})
}