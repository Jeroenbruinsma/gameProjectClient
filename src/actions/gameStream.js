export const EVENT = "EVENT"
export const CLEAR_EVENT = "CLEAR_EVENT"


export function onEvent(event) {
    const { data } = event

    const gameData = JSON.parse(data)
    //console.log("data from onEvent action", gameData)

    return {
        type: EVENT,
        payload: gameData
    }
}
export function clearGameState() {

    return {
        type: CLEAR_EVENT,
        payload: ""
    }
}