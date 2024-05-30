import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './order.css';
import './orderTable.css';

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'orderId', label: 'Order ID', minWidth: 100 },
  { id: 'orderAmount', label: 'Order Amount', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'text-warning';
    case 'delivered':
      return 'text-success';
    default:
      return 'text-primary';
  }
};

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/buyer/${user._id}`);
      const { data } = response;
      if (Array.isArray(data.orders)) {
        setOrders(data.orders);
      } else {
        console.error('Invalid data format for orders:', data);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed. Please try again later.');
      }
    }
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="container mt-5">
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
      <div className="header mb-4">
        <h1 className="p-2">Orders</h1>
        <div className="search ms-auto p-3 d-flex" style={{ width: '30%' }}>
          <SearchIcon style={{ height: '35px' }} />
          <input type="text" placeholder="Search" className="form-control ms-2 searchInput" style={{ border: 'none', height: '35px', borderRadius: '5px' }} />
        </div>
      </div>
      {orders.length === 0 ? (
        <div className="alert alert-info">No orders found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.id} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                <tr key={order._id} className="clickable-row" onClick={() => window.location.href = `/order/${order._id}`}>
                  <td>{index + 1}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>{order._id}</td>
                  <td>${order.overallTotal.toFixed(2)}</td>
                  <td className={getStatusColor(order.orderStatus)}>{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="d-flex justify-content-between">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className={`page-item ${page === 0 && 'disabled'}`}>
              <button className="page-link" onClick={() => handleChangePage(page - 1)} disabled={page === 0}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">{page + 1}</span>
            </li>
            <li className={`page-item ${page >= Math.ceil(orders.length / rowsPerPage) - 1 && 'disabled'}`}>
              <button className="page-link" onClick={() => handleChangePage(page + 1)} disabled={page >= Math.ceil(orders.length / rowsPerPage) - 1}>
                Next
              </button>
            </li>
          </ul>
        </nav>
        <select className="form-select" value={rowsPerPage} onChange={handleChangeRowsPerPage} style={{ width: 'auto' }}>
          <option value={6}>6</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
};

export default OrderTable;
