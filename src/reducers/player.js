import { PLAYER_LOGIN } from '../actions/player'

export default function players(state = {}, action = {}) {
  console.log('where',state, action)
  switch (action.type) {
    case PLAYER_LOGIN:
      return action.payload
    default:
      return state
  }
}