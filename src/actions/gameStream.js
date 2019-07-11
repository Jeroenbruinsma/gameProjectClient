export const EVENT = "EVENT"


export function onEvent(event) {
    const { data } = event

    const gameData = JSON.parse(data)
    console.log("data from onEvent action", gameData)

    return {
        type: EVENT,
        payload: gameData
    }
}