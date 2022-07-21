// sinctactic sugar
const [a, b, ...parameters] = process.argv;

// normal
// const c = process.argv[0];
// const d = process.argv[1];
// const params = process.argv.slice(2);

const width = parameters[0];
const height = parameters[1];

// const  [width, height] = parameters
console.log(width * height);
