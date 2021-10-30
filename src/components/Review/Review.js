import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    const { name, title, imgUrl, message } = props.review;
    return (
        <Col>
            <div className="review text-center py-2 px-3 rounded">
                <img src={imgUrl} className="img-fluid rounded-circle mb-3 mt-2" alt="" />
                <h4 className="text-warning">{name}</h4>
                <p className="text-light">{title}</p>
                <p className="text-white">{message}</p>
            </div>
        </Col>
    );
};

export default Review;