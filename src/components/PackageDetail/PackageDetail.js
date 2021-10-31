import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PackageDetail = () => {
    const { id } = useParams();
    const { user } = useAuth();
    let isThePackageAlreadyOrdered = false;
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const [packageToShow, setPackageToShow] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //getting package detail by id
    useEffect(() => {
        fetch(`https://polar-mountain-12529.herokuapp.com/package/detail/${id}`)
            .then(res => res.json())
            .then(data => {
                setPackageToShow(data);
            })
    }, [id])

    // getting the orders
    useEffect(() => {
        fetch('https://polar-mountain-12529.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    // getting current user's orders
    const myOrders = orders.filter(order => order.email === user.email);
    //checking if the current order already ordered
    myOrders.forEach(order => {
        if (order.packageId === id) {
            isThePackageAlreadyOrdered = true;
        }
    });

    // handling form submit
    const onSubmit = data => {
        const order = data;
        order.packageId = id;
        order.status = "pending";
        // positing the data to the server and db
        fetch('https://polar-mountain-12529.herokuapp.com/proceedOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    history.push('/orderConfirmed');
                }
            })
    }

    return (
        <div>
            <Row xs={1} sm={1} md={2} lg={2} className="mx-auto">
                {/* package detail section */}
                <Col className="mx-auto">
                    <Card style={{ width: '18rem' }} className="w-75 mx-auto py-3">
                        <Card.Img variant="top" src={packageToShow?.imgUrl} />
                        <Card.Body>
                            <Card.Title className="fs-2">{packageToShow?.name}</Card.Title>
                            <Card.Text>
                                <span className="d-block fw-bold">BDT {packageToShow?.price}</span>
                                {packageToShow?.description}

                                <span className="fs-bolder fs-3 d-block">Itinerary</span>
                                {packageToShow?.Itinerary}

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mx-auto">
                    {/* conditional rendering for order form */}
                    {isThePackageAlreadyOrdered ?
                        <h2 className="my-5 pd-5 text-success">Congratulations! you Already Ordered this package</h2> :
                        <div className="addPackages w-75 mx-auto my-5 border p-5">
                            <h2 className="text-success text-center fw-bolder">Order Process</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                                <label className="text-success fw-bold fs-5">Full Name:</label>
                                <input className="mb-3" defaultValue={user.displayName} {...register("name", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <label className="text-success fw-bold fs-5">Email:</label>
                                <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <label className="text-success fw-bold fs-5">Address:</label>
                                <input className="mb-3" {...register("address", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <label className="text-success fw-bold fs-5">City:</label>
                                <input className="mb-3" {...register("city", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <label className="text-success fw-bold fs-5">Phone:</label>
                                <input className="mb-3" {...register("phone", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}

                                <button className="mx-auto btn btn-outline-success" type="submit"  >Proceed to Book</button>
                            </form>
                        </div >}

                </Col>

            </Row>
        </div>


    );
};

export default PackageDetail;