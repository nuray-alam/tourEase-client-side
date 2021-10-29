import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Order = (props) => {
    const { _id, packageId, status } = props.order;
    const [packageToShow, setPackageToShow] = useState({});
    const { isAdmin } = props;
    useEffect(() => {
        fetch(`http://localhost:5000/package/detail/${packageId}`)
            .then(res => res.json())
            .then(data => {
                setPackageToShow(data);
            })
    }, [packageId])
    const handleApproveButton = () => {


    }
    const handleCancelOrder = () => [

    ]
    return (
        <Col className="">
            <div className="package text-center py-2 px-3 card h-100">
                <img src={packageToShow?.imgUrl} className="img-fluid" alt="" />
                <h4 className="text-success mt-1">{packageToShow?.name}</h4>
                <small>{packageToShow?.days} day</small> <small>Location: {packageToShow.location}</small>
                <p>{packageToShow?.description}</p>
                <h4>{status}</h4>
                {isAdmin && <button onClick={() => handleApproveButton(_id)} className="btn btn-outline-success mb-2">Approve Order</button>}
                <button onClick={() => handleCancelOrder(_id)} className="btn btn-outline-danger">Cancel Order</button>
            </div>
        </Col>
    );
};

export default Order;