import { EVENT } from '../actions/player'

const initialState = []

export default function player (
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case EVENT:
      return payload
    default:
      return state
  }
}
