import React, { useEffect, useState } from "react";
import api from "../api/api";
import { User } from "../types"

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Group users by role description
  const usersByRole = users.reduce((acc: { [key: string]: User[] }, user) => {
    const roleDesc = user.role?.description || "No Role";
    if (!acc[roleDesc]) acc[roleDesc] = [];
    acc[roleDesc].push(user);
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <h2>Users List by Roles</h2>

      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : Object.keys(usersByRole).length === 0 ? (
        <div className="alert alert-warning">No users found.</div>
      ) : (
        Object.entries(usersByRole).map(([role, usersInRole]) => (
          <div key={role} className="mb-5">
            <h4 className="mt-4">{role}</h4>
            <table className="table table-striped table-bordered table-dark">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {usersInRole.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default UsersList;
