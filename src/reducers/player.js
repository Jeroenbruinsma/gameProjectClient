import { PLAYER_LOGIN } from '../actions/player'

export default function players(state = {}, action = {}) {
  console.log('where',state, action)
  switch (action.type) {
    case PLAYER_LOGIN:
        console.log("1111", action.payload.body.jwt)
        localStorage.setItem('token', action.payload.body.jwt);
      return action.payload
    default:
      return state
  }
}