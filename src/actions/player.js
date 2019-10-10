import request from 'superagent'
import {baseUrl} from '../constants'

export const PLAYER_LOGIN= 'PLAYER_LOGIN'

export const playerLogIn = (login) => {
    return {
    type: PLAYER_LOGIN,
    payload: login
}}



export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(res => {
            dispatch(playerLogIn(res))
        })
        .catch(err => {console.log(err)})
}