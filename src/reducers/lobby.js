import { JOIN_GAME } from '../actions/lobby'

const initialState = {
    id: '',
    gameName: '',
    gameDetail: '',
    status: ''
}


export default (state = initialState, action = {}) => {
    console.log('lobby reducer', action)
    switch (action.type) {
        case JOIN_GAME:
            return { ...state, ...action.payload.game }
        default:
            return state
    }
}