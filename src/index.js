module.exports = function check(str, bracketsConfig) {
  let stack = []
  const dictBrackets = Object.fromEntries(bracketsConfig)

  for (const bracket of str) {
    if (bracket === dictBrackets[stack[stack.length - 1]]) {
      stack.pop()
    } else if (dictBrackets.hasOwnProperty(bracket)) {
      stack.push(bracket)
    }
    else if (!dictBrackets.hasOwnProperty(bracket)) {
      return false
    }
  }
  return stack.length === 0
}
