
import {  EVENT } from '../actions/gameStream'
import { SET_GAMES, ADD_GAME } from '../actions/game'

export default function users(state = [], action = {}) {
  switch (action.type) {
    case EVENT:
      return { GameInfo: action.payload.GameInfo,
              teeth: action.payload.ToothInMout  }
   
    default:
      return state
  }



export default function game(state = {}, action = {}) {
    switch (action.type) {
        case SET_GAMES:
            console.log("reducer",action)
            return action.games
        case ADD_GAME:
            return [
                ...state, action.game
            ]
        default:
            return state
    }

}