// Task 2
const users = [
  { name: "Malak", role: "Student" },
  { name: "Omar", role: "Mentor" }
];

const userLabels = users.map(u => `${u.name} - ${u.role}`);
console.log(userLabels);
