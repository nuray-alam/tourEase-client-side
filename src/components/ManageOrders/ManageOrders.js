import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">My Orders</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    orders.map(order => <Order key={order._id} isAdmin={true} order={order}></Order>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;