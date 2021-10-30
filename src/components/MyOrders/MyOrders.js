import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {

    const { user } = useAuth();

    // const [orders, setOrders] = useState([]);
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // setOrders(data);
                const ordersToAdd = data.filter(order => order.email === user.email)
                setMyOrders(ordersToAdd)
            })
    }, [user.email])

   
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
                        const remainingOrders = myOrders.filter(ord => ord._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }

    }

    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">My Orders</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    myOrders.map(order => <Order
                        key={order._id}
                        isAdmin={false}
                        order={order}
                        handleCancelOrder={handleCancelOrder}></Order>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;