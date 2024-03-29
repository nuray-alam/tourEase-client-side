import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://tourease-server-side.onrender.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return '';   // already has a spinner in packages 
    }

    return (
        <div className="my-5 py-5 mx-auto w-75">
            <div className="text-center text-success mb-5">
                <h1>What Our Traveller</h1>
                <h1>Say About Us</h1>
            </div>
            <Row xs={1} md={2} lg={2} xl={3} className="g-5">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;