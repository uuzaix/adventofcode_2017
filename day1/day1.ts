import * as fs from "fs";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Input = Array<Digit>;
type FilteredInput = Array<Digit>;
type Result = number;


const input: Input = fs.readFileSync("day1/day1.input", { encoding: "utf8" })
  .split('')
  .map((digit: string): Digit => parseInt(digit) as Digit);

function filterNeighbours(input: Input): FilteredInput {
  return input.filter((digit: Digit, index: number): boolean => 
    digit === input[index + 1] || (index + 1 === input.length && digit === input[0])
  )
}

function filterHalfwayNeighbours(input: Input, neighbourAt: number): FilteredInput {
  return input.filter((digit: Digit, index: number): boolean =>
    digit === input[index + neighbourAt]
    || (index >= neighbourAt && digit === input[index - neighbourAt])
  )
}

function sumFilteredNeighbours(input: FilteredInput): Result {
  return input.reduce(((acc: number, digit: Digit): number => acc + digit), 0)
}

console.log(sumFilteredNeighbours(filterHalfwayNeighbours([1, 2, 1, 3, 1, 4, 1, 5], 4)), 'expect 4')
console.log(sumFilteredNeighbours(filterHalfwayNeighbours([1, 2, 3, 1, 2, 3], 3)), 'expect 12')
console.log(sumFilteredNeighbours(filterHalfwayNeighbours([1, 2, 3, 4, 2, 5], 3)), 'expect 4')
console.log(sumFilteredNeighbours(filterHalfwayNeighbours([1, 2, 2, 1], 2)), 'expect 0')
console.log(sumFilteredNeighbours(filterHalfwayNeighbours([1, 2, 1, 2], 2)), 'expect 6')
console.log(sumFilteredNeighbours(filterNeighbours([1, 1, 2, 2])), 'expect 3')

console.log('part 1: ', sumFilteredNeighbours(filterNeighbours(input)))
console.log('part 2: ', sumFilteredNeighbours(filterHalfwayNeighbours(input, input.length / 2)))
