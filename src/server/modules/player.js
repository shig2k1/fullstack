import uuid from 'uuid'

export const create_player = (req, res)=>{
  let player = {
    id: uuid(),
    name: 'player'
  }
  
  players[player.id] = player;

  res.json({ msg: 'player created', data: { player }})
}