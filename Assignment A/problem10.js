// Task 10 
const words = ["js", "ts", "js", "react", "js", "ts"];

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);
