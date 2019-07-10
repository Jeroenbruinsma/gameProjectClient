import {  EVENT } from '../actions/gameStream'

export default function users(state = [], action = {}) {
  console.log('reducer games', state, action)
  switch (action.type) {
    case EVENT:
        console.log("reducer games in case event", action.payload, "curr state" ,state)
      return { GameInfo: action.payload.GameInfo,
              teeth: action.payload.ToothInMout  }
   
    default:
      return state
  }
}