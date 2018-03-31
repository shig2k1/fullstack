import uuid from 'uuid'

// Create a new player
export const create_player = (req, res) => {
  const player = {
    id: uuid(),
    name: `Player ${ Object.keys(players).length + 1 }`
  }

  players[player.id] = player;

  res.json({ msg: 'player created', data: { player }})
}

// try to load a player (player id from localstorage on client machine)
export const load_player = (req, res) => {
  const { id } = req.params
  const player = players[id]

  if(player) res.status(200).json({ msg: `player loaded`, data: { player }})
  else res.status(404).json({ msg: `player doesn't exist` })
}