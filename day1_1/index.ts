const day1_1 = (input: string) => {
  // solve
  const inputArray = input.split("\n")
  let count = 0
  for (let i = 1; i < inputArray.length; i++) {
    const current = Number(inputArray[i])
    const previous = Number(inputArray[i - 1])
    if (current > previous) {
      count++
    }
  }
  return count
}

export default day1_1
