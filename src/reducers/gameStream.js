
import { EVENT } from '../actions/gameStream'


export default function users(state = [], action = {}) {
    switch (action.type) {
        case EVENT:
            return {
                GameInfo: action.payload.GameInfo,
                teeth: action.payload.ToothInMout
            }

        default:
            return state
    }
}