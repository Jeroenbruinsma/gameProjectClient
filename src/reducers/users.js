import { USER_SIGNUP, USER_SIGNUP_FAIL, USER_GET_JWT, USER_WINNER } from '../actions/user'

export default function users(state = [], action = {}) {
  console.log("reducer users " , state, action )
  switch (action.type) {
    case USER_SIGNUP:
      return action.payload.body
      
    case USER_SIGNUP_FAIL:
      return action.payload
    case USER_GET_JWT:
        return localStorage.getItem("token")
    case USER_WINNER:
        return [ ...state , action.payload]

    default:
      return state
  }
}