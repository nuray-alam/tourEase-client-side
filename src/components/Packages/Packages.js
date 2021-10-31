import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
//getting all the packages
    useEffect(() => {
        fetch('https://polar-mountain-12529.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setIsLoading(false);
            })
    }, [])

    if(isLoading){
        return <div className="d-flex w-75 mx-auto my-5 justify-content-center">
            <div className="me-3">
                <Spinner animation="border" variant="primary" />
            </div>
            <div><h4>Loading...</h4></div>
        </div>
    }


    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">Our Packages</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    packages.map(pkg => <Package key={pkg._id} pkg={pkg}></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;