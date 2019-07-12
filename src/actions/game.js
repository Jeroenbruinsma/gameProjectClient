import request from 'superagent'

export const STOP_GAME = 'STOP_GAME'
export const SET_GAMES = 'SET_GAMES'
export const ADD_GAME = 'ADD_GAME'

export const setGames = (games) => {
    return {
        type: SET_GAMES,
        games
    }
}


export const stopGame = (stop) => {
    return {
        type: STOP_GAME,
        payload: stop
    }
}

const baseUrl = 'http://localhost:5000'

export function fetchGames() {
    return dispatch => {
        request
            .get(`${baseUrl}/lobby`)
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))

            .then(res => {
                console.log('res', res.body)
                return res.body
            })
            .then(data => {
                dispatch(setGames(data))
            })
            .catch(err => console.log('err', err))
    }
}

export function saveGame(data) {
    return dispatch => {
        request
            .post(`${baseUrl}/game`)
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .send({
                "gameName": data
            }
            )
            .then(res => { console.log('res58', res.body)
            return res })
            .then(data => dispatch(setGames(data.body)))
    }
}

