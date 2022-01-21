// Advent of Code: day1_2
const day1_2 = (input: string) => {
    // solve
    const inputArray = input.split('\n')
    let count = 0
    let previous = Number(inputArray[0]) + Number(inputArray[1]) + Number(inputArray[2])
    for (let i = 1; i < inputArray.length; i++) {
      const current = Number(inputArray[i]) + Number(inputArray[i + 1]) + Number(inputArray[i + 2])
      if (current > previous) {count++}
      previous = current
    }
    return count
}

export default day1_2
