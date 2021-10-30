import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Order = (props) => {
    const { handleCancelOrder, handleApproveButton } = props;
    const { _id, packageId, status, name, email } = props.order;
    const [packageToShow, setPackageToShow] = useState({});
    const { isAdmin } = props;
    let isApproved;
    if (status === 'approved') {
        isApproved = true;
    }
    else {
        isApproved = false;
    }
    useEffect(() => {
        fetch(`http://localhost:5000/package/detail/${packageId}`)
            .then(res => res.json())
            .then(data => {
                setPackageToShow(data);
            })
    }, [packageId])


    return (
        <Col className="">
            <div className="package text-center py-2 px-3 card h-100 d-flex flex-column justify-content-between">
                <div>
                    <img src={packageToShow?.imgUrl} className="img-fluid" alt="" />
                    <h4 className="text-success mt-1">{packageToShow?.name}</h4>
                    <h5 className="text-primary">Name: {name}</h5>
                    <h5 className="text-primary">email: {email}</h5>
                    <h4>Status: {status}</h4>
                    <small>{packageToShow?.days} day</small> <small>Location: {packageToShow.location}</small>
                    <p>Order Id: {_id}</p>

                </div>
                <div className="d-flex flex-column">
                    {isAdmin && <button onClick={() => handleApproveButton(_id)} className={isApproved ? "btn btn-dark mb-2" : "btn btn-success mb-2"}>{isApproved ? "Approved" : "Approve Order"}</button>}
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-danger">Cancel Order</button>
                </div>
            </div>
        </Col>
    );
};

export default Order;