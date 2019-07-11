import { USER_SIGNUP, USER_SIGNUP_FAIL, USER_GET_JWT } from '../actions/user'

export default function users(state = [], action = {}) {
  switch (action.type) {
    case USER_SIGNUP:
      return action.payload
    case USER_SIGNUP_FAIL:
      return action.payload
    case USER_GET_JWT:
        return localStorage.getItem("token")
    default:
      return state
  }
}