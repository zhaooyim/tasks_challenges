//  Same code from `demo.js` but SAFER:

function callMom(digits: number) {
  const message: string = 'call mom on this number: '
  console.log(message, digits)
}

callMom('i am totally a ph number')

// To COMPILE (this will make a javascript file, which you can run in node):
// tsc demo-static.ts

// To RUN like in node:
// tsx ./demo-static.ts
