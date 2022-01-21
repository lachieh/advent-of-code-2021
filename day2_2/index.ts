// Advent of Code: day2_2
const day2_2 = (input: string) => {
  const commands = processInput(input)
  let position: Position = [0, 0, 0]
  for (let command of commands) {
    position = getNewPosition(position, command)
  }
  return position[0] * position[1]
}

const processInput = (input: string): Command[] => {
  return input.split("\n").map((x) => {
    const out = x.split(" ")
    return [out[0] as Direction, Number(out[1])]
  })
}

const getNewPosition = (pos: Position, command: Command): Position => {
  const [direction, distance] = command
  switch (direction) {
    case "down":
      return [pos[0], pos[1], pos[2] + distance]
    case "up":
      return [pos[0], pos[1], pos[2] - distance]
    case "forward":
      return [pos[0] + distance, pos[1] + pos[2] * distance, pos[2]]
    default:
      return pos
  }
}

type Direction = "up" | "down" | "forward"
type Command = [Direction, number]
type Position = [number, number, number]

export default day2_2
