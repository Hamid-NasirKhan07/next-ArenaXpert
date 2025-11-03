import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
  axios.get('/api/users').then(res => setUsers(res.data));
  };

  const handleDelete = (id) => {
  axios.delete(`/api/users/${id}`).then(() => fetchUsers());
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  axios.put(`/api/users/${editUser._id}`, editUser).then(() => {
      fetchUsers();
      setEditUser(null);
    });
  };

  return (
    <div style={{backgroundColor:'#02BFF5'}}>
      <h2 style={{marginTop:'100px'}}>User Table</h2>
      <table border="1" cellPadding="8" style={{color:'white'}}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name || 'N/A'}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUser && (
        <form onSubmit={handleUpdate}>
          <h3>Edit User</h3>
          <input
            value={editUser.name || ''}
            onChange={e => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Name"
          />
          <input
            value={editUser.email}
            onChange={e => setEditUser({ ...editUser, email: e.target.value })}
            placeholder="Email"
          />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UserTable;
