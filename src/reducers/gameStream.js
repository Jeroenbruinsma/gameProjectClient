
import { EVENT, CLEAR_EVENT } from '../actions/gameStream'


export default function users(state = [], action = {}) {
    switch (action.type) {
        case EVENT:
            return {
                GameInfo: action.payload.GameInfo,
                teeth: action.payload.ToothInMout
            }
        case CLEAR_EVENT:
            return {}

        default:
            return state
    }
}