function isValid(code) {

  let openersToClosers = {
      '(': ')',
      '[': ']',
      '{': '}',
  };

  let openers = ['(', '[', '{'];
  let closers = [')', ']', '}'];

  openersStack = [];

  for (let i = 0; i < code.length; i++) {
      let char = code[i];

      if (openers.includes(char)) {
          openersStack.push(char);
      } else if (closers.includes(char)) {
          if (!openersStack.length) {
              return false;
          } else {
              lastUnclosedOpener = openersStack.pop();

              // if this closer doesn't correspond to the most recently
              // seen unclosed opener, short-circuit, returning false
              if (openersToClosers[lastUnclosedOpener] !== char) {
                  return false;
              }
          }
      }
  }
  return openersStack.length === 0;
}

console.log(isValid("{ [ }"))
