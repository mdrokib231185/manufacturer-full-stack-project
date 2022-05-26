import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebaseinit";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { id } = orders;

  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?customer=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  const handelDelete = (id) => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Product  is Deleted`);
        }
      });
  };

  return (
    <div>
      <h1>My orders:{orders.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>

              <th>Order </th>
              
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.customerName}</td>
                <td>{order.product}</td>
                <td>{order.order}</td>
                <td>{order.totalPrice}</td>

                <td>
                  <button
                    onClick={() => handelDelete()}
                    class="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
                {/* <td>
                  {order.totalPrice && !order.paid && (
                    <Link  to={`/dashboard/payment/${order._id}`}>
                      <button disabled className="btn btn-secondary btn-xs">
                        Pay now
                      </button>
                    </Link>
                  )}
                  {order.totalPrice && order.paid && (
                    <span className="btn btn-success btn-xs">Paid</span>
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
