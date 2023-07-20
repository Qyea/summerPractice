let array:string[]//Array<string> дженерики тоже можно

array = ['1', '2']// с просто 3 работать не будет

const numbers:ReadonlyArray<number> = [0, 1, 2, 3]

type TypeArray = [number, string, null]
const newArray:TypeArray = [1, '2', null]
