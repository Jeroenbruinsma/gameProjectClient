
import { SET_GAMES, ADD_GAME } from '../actions/game'


  export default function game(state = {}, action = {}) {
    //console.log("reducer for Games", action)
    //console.log("reducer for Games state", state)
        switch (action.type) {
            case SET_GAMES:

                    const Lobby = action.games.Lobby.map(item => {
                        return {id: item.id, gameName: item.gameName, status: item.status}
                    })
                return {Lobby}
            case ADD_GAME:
                return [...state.Lobby]
            
            default:
                return state
        }
    }

