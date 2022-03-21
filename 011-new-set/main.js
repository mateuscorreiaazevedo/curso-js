const NUMBER = [1,2,3,1,4,5,4,5,6,3,2,1,1]
const STRING = ['banana', 'pera', 'melão','banana', 'pera', 'melão','banana', 'pera', 'melão']

const UNIQUENumber = [... new Set(NUMBER)]
const UNIQUEString = [... new Set(STRING)]

console.log(UNIQUENumber)
console.log(UNIQUEString)
console.log(UNIQUENumber.sort())
console.log(UNIQUEString.sort())