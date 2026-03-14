// Task 1
const students = [
  { name: "Ali", grade: 75 },
  { name: "Sara", grade: 92 },
  { name: "Mona", grade: 88 }
];

const topStudents = students.filter(s => s.grade > 80);
console.log(topStudents);
