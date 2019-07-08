export const EVENT = 'EVENT'

export function onEvent (event) {
  const { data } = event

  const player = JSON.parse(data)

  console.log('game:', player)

  return {
    type: EVENT,
    payload: player
  }
}
