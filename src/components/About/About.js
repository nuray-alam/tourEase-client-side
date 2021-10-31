import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5 px-5 mx-auto" >
            <Row sm={1} xs={1} lg={2} className="g-3">
                <Col >
                    <img src="https://www.tourx-react.egenslab.com/static/media/about-1.bcfbc984.png" className="img-fluid" alt="" />
                </Col >
                <Col className="d-flex flex-column justify-content-center">
                    <h5 className="text-success">About TourEase</h5>
                    <h3>The Best Travel Agency Company.</h3>
                    <p className="text-muted">Fusce aliquam luctus est, eget tincidunt velit scelerisque rhoncus. Aliquam lacinia ipsum ornare, porttitor risus nec, mattis mauris. Nunc nec ornare nisi, vel elementum est. Proin malesuada venenatis ex, eu fringilla justo scelerisque sit amet. Sed fringilla nec purus non venenatis. Aliquam nec turpis pharetra, bibendum lorem in, sollicitudin nibh. Nulla sit amet lacus diam.</p>
                </Col>
            </Row>
        </div>

    );
};

export default About;