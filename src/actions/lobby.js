import request from 'superagent'
export const JOIN_GAME = 'JOIN_GAME'

const joinGame = (player, game) => {
    console.log(player)
    return {
        type: JOIN_GAME,
        payload: {
            player,
            game
        }
    }
}


const baseUrl = 'http://localhost:5000'

export const joinToGame = (userId, gameId) =>
    async (dispatch) => {
        await request
            .post(`${baseUrl}/game/${gameId}`, { userId, gameId })
            .set('Authorization', 'Bearer ' + localStorage.getItem("token"))
            .then((res) => {
                dispatch(joinGame(res.data.user, res.data.game))
            })
            .catch((err) => console.log(err))
    }