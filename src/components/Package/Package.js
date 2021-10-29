import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Package.css'
const Package = (props) => {

    const { _id, name, location, days, description, price, imgUrl } = props.pkg;
    const history = useHistory();
    const handleOrderButton = (id) => {
        const url = `/package/detail/${id}`;
        history.push(url);
    }
    return (
        <Col className="">
            <div className="package text-center py-2 px-3 card h-100">
                <img src={imgUrl} className="img-fluid" alt="" />
                <h4 className="text-success mt-1">{name}</h4>
                <small>{days} day</small> <small>Location: {location}</small>
                <p>{description}</p>
                <button onClick={() => handleOrderButton(_id)} className="btn btn-outline-primary">Order Now</button>
            </div>
        </Col>
    );
};

export default Package;