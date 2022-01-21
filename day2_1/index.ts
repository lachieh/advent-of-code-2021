// Advent of Code: day2_1
const day2_1 = (input: string) => {
  const commands = input.split('\n').map(x => x.split(' '))
  let position: Command = [0,0]
  for (let command of commands) {
    position = processDirection(position, command[0], command[1])
  }
  return position[0] * position[1]
}

type Command = [number, number]

const processDirection = (pos: Command, direction: string, distance: string): Command => {
  const dist = Number(distance)
  switch (direction) {
    case 'forward':
      return [pos[0] + dist, pos[1]]
    case 'up':
      return [pos[0], pos[1] - dist]
    case 'down':
      return [pos[0], pos[1] + dist]
    default:
      return pos
  }
}

export default day2_1
