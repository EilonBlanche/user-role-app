// Role type
export interface Role {
  id: number;
  description: string;
}

// User type
export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

// Users grouped by role
export interface UsersByRole {
  [roleDescription: string]: User[];
}
