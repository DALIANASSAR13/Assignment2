interface User {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const users: User[] = [
  { id: 1, name: "Malak", age: 21, isActive: true },
  { id: 2, name: "Omar",  age: 24, isActive: false },
  { id: 3, name: "Lina",  age: 20, isActive: true },
];

const products: Product[] = [
  { id: 101, name: "Laptop",     price: 25000, inStock: true },
  { id: 102, name: "Headphones", price: 1800,  inStock: false },
  { id: 103, name: "Mouse",      price: 650,   inStock: true },
];

// ─── Functions ────────────────────────────────────────────────────────────────

function getUserById(id: number): User | undefined {
  return users.find((user: User) => user.id === id);
}

function getActiveUsers(list: User[]): User[] {
  return list.filter((user: User) => user.isActive);
}

function getProductNames(items: Product[]): string[] {
  return items.map((item: Product) => item.name);
}

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

function printUser(user: User): string {
  return `${user.name} is ${user.age} years old`;
}


const selectedUser: User | undefined = getUserById(1);
const activeUsers: User[]            = getActiveUsers(users);
const productNames: string[]         = getProductNames(products);
const total: number                  = calculateTotal(650, 3);



console.log("Selected User:", selectedUser);
console.log("Active Users:", activeUsers);
console.log("Product Names:", productNames);
console.log("Total:", total);
if (selectedUser) {
  console.log(printUser(selectedUser));
}