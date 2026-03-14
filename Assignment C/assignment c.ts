// ─── Interfaces ───────────────────────────────────────────────────────────────

interface Course {
  id: number;
  title: string;
}

interface UserData {
  id: number;
  name: string;
  role: string;
  email: string;
  isActive: boolean;
  courses: Course[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: UserData;
}

// ─── Sample Data (matching the JSON response) ─────────────────────────────────

const response: ApiResponse = {
  success: true,
  message: "User retrieved successfully",
  data: {
    id: 1,
    name: "Malak Ahmed",
    role: "mentor",
    email: "malak@example.com",
    isActive: true,
    courses: [
      { id: 11, title: "JavaScript Basics" },
      { id: 12, title: "TypeScript Intro" },
    ],
  },
};

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("Success:", response.success);
console.log("Message:", response.message);
console.log("User Name:", response.data.name);
console.log("User Role:", response.data.role);
console.log("User Email:", response.data.email);
console.log("Is Active:", response.data.isActive);
console.log("Courses:", response.data.courses);