// Task 9
const employees = [
  { name: "Nour", department: "HR" },
  { name: "Youssef", department: "IT" }
];

const itEmployee = employees.find(e => e.department === "IT");
console.log(itEmployee);
