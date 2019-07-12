
import { EVENT, CLEAR_EVENT } from '../actions/gameStream'


export default function users(state = [], action = {}) {
   console.log("reducer called", state, action)
    switch (action.type) {
        case EVENT:
            return {
                GameInfo: action.payload.GameInfo,
                teeth: action.payload.ToothInMout
            }
        case CLEAR_EVENT:
            console.log("gameReducer clear event", state)
            return {}

        default:
            return state
    }
}