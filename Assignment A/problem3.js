// Task 3
const products = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Screen" }
];

const foundProduct = products.find(p => p.id === 3);
console.log(foundProduct);
