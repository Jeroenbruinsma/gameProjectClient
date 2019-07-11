import { PLAYER_LOGIN } from '../actions/player'

export default function players(state = {}, action = {}) {
  console.log("reducer for players", action)
  switch (action.type) {
    case PLAYER_LOGIN:
      localStorage.setItem('token', action.payload.body.jwt);
      return action.payload.body
    default:
      return state
  }
}