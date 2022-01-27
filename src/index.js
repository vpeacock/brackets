module.exports = function check (str, bracketsConfig) {
  if(str.length % 2 != 0) return false;
  
  let stack = [];
  const objBrackets = Object.fromEntries(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    if (objBrackets[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else if (Object.keys(objBrackets).includes(str[i])) {
      stack.push(str[i]);
    } 
  }

  return stack.length === 0;
};
