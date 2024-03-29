import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Advantage from '../Advantage/Advantage';

const Advantages = () => {

    const [advantages, setAdvantages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://tourease-server-side.onrender.com/advantages")
            .then(res => res.json())
            .then(data => {
                setAdvantages(data);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return '';   // already has a spinner in packages 
    }

    return (
        <div className="my-5 py-5 mx-auto w-75">
            <div className="text-center text-success mb-5">
                <h1>Why You Choose Us</h1>
            </div>
            <Row xs={1} md={2} lg={2} xl={3} className="g-5">
                {
                    advantages.map(advantage => <Advantage
                        key={advantage._id}
                        advantage={advantage}
                    ></Advantage>)
                }
            </Row>
        </div>
    );
};

export default Advantages;