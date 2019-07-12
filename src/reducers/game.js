
import { SET_GAMES, ADD_GAME, CLEAR_EVENT } from '../actions/game'


  export default function game(state = {}, action = {}) {
    //console.log("reducer for Games", action)
    //console.log("reducer for Games state", state)
        switch (action.type) {
            case SET_GAMES:
                return action.games
            case ADD_GAME:
                return [...state.Lobby]
            
            default:
                return state
        }
    }

