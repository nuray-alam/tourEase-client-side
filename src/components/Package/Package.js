import React from 'react';
import { Col } from 'react-bootstrap';
import './Package.css'
const Package = (props) => {

    const { name, location, days, description, price, imgUrl } = props.pkg;

    const handleDetailButton = () => {

    }
    return (
        <Col>
            <div className="package text-center py-2 px-3">
                <img src={imgUrl} className="img-fluid" alt="" />
                <h4 className="text-success mt-1">{name}</h4>
                <small>{days} day</small> <small>Location: {location}</small>
                <p>{description}</p>
                <button onClick={handleDetailButton} className="btn btn-outline-primary">Detail</button>
            </div>
        </Col>
    );
};

export default Package;