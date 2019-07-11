
import { SET_GAMES, ADD_GAME } from '../actions/game'


  export default function game(state = {}, action = {}) {
        switch (action.type) {
            case SET_GAMES:
                console.log("reducer", action)
                return action.games
            case ADD_GAME:
                return [
                    ...state, action.game
                ]
            default:
                return state
        }
    }

