const users = [
    { id: 1, name: "Malak", age: 21, isActive: true },
    { id: 2, name: "Omar", age: 24, isActive: false },
    { id: 3, name: "Lina", age: 20, isActive: true },
];
const products = [
    { id: 101, name: "Laptop", price: 25000, inStock: true },
    { id: 102, name: "Headphones", price: 1800, inStock: false },
    { id: 103, name: "Mouse", price: 650, inStock: true },
];
// ─── Functions ────────────────────────────────────────────────────────────────
function getUserById(id) {
    return users.find((user) => user.id === id);
}
function getActiveUsers(list) {
    return list.filter((user) => user.isActive);
}
function getProductNames(items) {
    return items.map((item) => item.name);
}
function calculateTotal(price, quantity) {
    return price * quantity;
}
function printUser(user) {
    return `${user.name} is ${user.age} years old`;
}
const selectedUser = getUserById(1);
const activeUsers = getActiveUsers(users);
const productNames = getProductNames(products);
const total = calculateTotal(650, 3);
console.log("Selected User:", selectedUser);
console.log("Active Users:", activeUsers);
console.log("Product Names:", productNames);
console.log("Total:", total);
if (selectedUser) {
    console.log(printUser(selectedUser));
}
