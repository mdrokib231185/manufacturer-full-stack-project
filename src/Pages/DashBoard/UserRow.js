import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faield to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
              toast.success("SuccessFully made an admin");
              refetch();
        }
      });
  };
  return (
    <tr>
      <td>{user.email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs btn-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs btn-secondary">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;