import React from 'react';
import { Col } from 'react-bootstrap';
import './Advantage.css'
const Advantage = (props) => {

    const { imgUrl, title } = props.advantage;
    return (
        <Col>
            <div className=" advantage text-center py-2 px-3 rounded card h-100">
                <img src={imgUrl} className="img-fluid" alt="" />
                <h3>{title}</h3>
            </div>
        </Col>
    );
};

export default Advantage;