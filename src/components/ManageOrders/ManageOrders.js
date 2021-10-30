import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])


    const handleCancelOrder = id => {
        let isAgreeToCancel = window.confirm("Are you sure cancel the order?");
        if (isAgreeToCancel === true) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = orders?.filter(ord => ord._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }

    }

    const handleApproveButton = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Order is approved successfully');
                   
                    const updatedOrder = orders.find( ord => ord._id === id);
                    updatedOrder.status = 'approved'
                   const remainingOrders = orders.filter( ord => ord._id !== id);
                   setOrders([...remainingOrders, updatedOrder])
                }
            })

    }
    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">All Orders</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    orders.map(order => <Order
                        key={order._id}
                        isAdmin={true}
                        order={order}
                        handleCancelOrder={handleCancelOrder}
                        handleApproveButton={handleApproveButton}
                    ></Order>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;