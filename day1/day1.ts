import * as fs from "fs";

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Input = Array<Digit>;
type Result = number;


const input: Input = fs.readFileSync("day1/day1.input", { encoding: "utf8" })
  .split('')
  .map((digit: string): Digit => parseInt(digit) as Digit);

function sumNeighbours(input: Input, neighbourAt: number): Result {
  return input
    .reduce((acc: number, digit: number, index: number): number => {
      if (digit === input[index + neighbourAt]
        || (index >= neighbourAt && digit === input[index - neighbourAt])) {
          return acc + digit
        }
        return acc
  }, 0)
}

console.log(sumNeighbours([1, 2, 1, 3, 1, 4, 1, 5], 4), 'expect 4')
console.log(sumNeighbours([1, 2, 3, 1, 2, 3], 3), 'expect 12')
console.log(sumNeighbours([1, 2, 3, 4, 2, 5], 3), 'expect 4')
console.log(sumNeighbours([1, 2, 2, 1], 2), 'expect 0')
console.log(sumNeighbours([1, 2, 1, 2], 2), 'expect 6')

console.log('part 1: ', sumNeighbours(input, 1))
console.log('part 2: ', sumNeighbours(input, input.length / 2))