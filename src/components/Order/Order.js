import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Order = (props) => {
    const { handleCancelOrder, handleApproveButton } = props;
    const { _id, packageId, status, name, email } = props.order;
    const [packageToShow, setPackageToShow] = useState({});
    const { isAdmin } = props;
    let isApproved;

    // setting the status state
    if (status === 'approved') {
        isApproved = true;
    }
    else {
        isApproved = false;
    }

    // getting order's package full detail
    useEffect(() => {
        fetch(`https://polar-mountain-12529.herokuapp.com/package/detail/${packageId}`)
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
                    <h4 className="mt-1">{packageToShow?.name}</h4>
                    <h5 className="">Name: {name}</h5>
                    <h5 className="">email: {email}</h5>
                    <h4 className="">Status: <span className={isApproved ? "text-success" : "text-danger"}>{status}</span></h4>
                    <small><i className="far fa-calendar-alt text-muted"></i> {packageToShow?.days} days</small> <small><i className="fas fa-map-marker-alt text-muted"></i> {packageToShow?.location}</small>
        
                    <p>Order Id: {_id}</p>

                </div>
                <div className="d-flex flex-column">
                    {isAdmin && <button onClick={() => handleApproveButton(_id)} className={isApproved ? "d-none" : "btn btn-outline-success mb-2"}>{isApproved ? "Approved" : "Approve Order"}</button>}
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-outline-danger">Cancel Order</button>
                </div>
            </div>
        </Col>
    );
};

export default Order;