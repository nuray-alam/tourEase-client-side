import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Row sm={1} lg={2} xs={1} className="w-75 mx-auto  my-5">
            <Col>
                <div className="">
                    <h3 className="text-success fw-bold">Get In Touch</h3>
                    <p className="text-muted">Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.</p>
                </div>
                <div className="d-flex ">
                    <div>
                        <i className="far fa-clock fs-1"></i>
                    </div>
                    <div className="ms-3">
                        <h3 className="text-success fw-bold"  >Open Hour</h3>
                        <p className="text-muted">Sat - Thu At</p>
                        <p className="text-muted">10.00Am to 10.00PM</p>

                    </div>
                </div>
                <div className="d-flex ">
                    <div>
                        <i className="far fa-clock fs-1"></i>
                    </div>
                    <div className="ms-3">
                        <h3 className="text-success fw-bold">Close Hour</h3>
                        <p className="text-muted">Friday Office Close</p>

                    </div>
                </div>
            </Col>

            <Col className="">
                <h3 className="text-success fw-bold">Contact Us</h3>
                <form className="border rounded p-2">
                    <input className="me-3 mb-3" type="text" placeholder="Full Name" />
                    <input type="text" className="mb-3" placeholder="Subject" />
                    <br />
                    <input className="me-3 mb-3" type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Phone" />
                    <br />

                    <textarea rows="4" cols="50" className="mt-3 form-control" placeholder="Write Message"></textarea>
                    <br />
                    <button className="btn btn-outline-success disabled">Submit</button>
                </form>
            </Col>
        </Row>
    );
};

export default ContactUs;