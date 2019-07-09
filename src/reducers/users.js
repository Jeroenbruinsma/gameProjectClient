import { USER_SIGNUP, USER_SIGNUP_FAIL } from '../actions/user'

export default function users(state = [], action = {}) {
  console.log('reducer', state, action)
  switch (action.type) {
    case USER_SIGNUP:
      return action.payload
    case USER_SIGNUP_FAIL:
      return action.payload
    default:
      return state
  }
}