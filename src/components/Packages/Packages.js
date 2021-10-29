import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])


    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">Our Packages</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-5">
                {
                    packages.map(pkg => <Package key={pkg._id} pkg={pkg}></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;