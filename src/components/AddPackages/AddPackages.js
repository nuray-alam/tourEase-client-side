import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddPackages = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        const newPackage = data;
        const url = 'https://polar-mountain-12529.herokuapp.com/addPackage';
        fetch('http://localhost:5000/addPackage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {

                    alert("New package uploaded successfully");
                    reset();

                }
            })
    };
    return (
        <div className="addPackages w-75 mx-auto my-5 border p-5">
            <h2 className="text-success text-center fw-bolder">Add a New Package</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <label className="text-success fw-bold fs-5">Name:</label>
                <input className="mb-3" {...register("name", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Location:</label>
                <input className="mb-3" {...register("location", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Days:</label>
                <input className="mb-3" type="number" {...register("days", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Description:</label>
                <textarea className="mb-3"  {...register("description", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Itinerary:</label>
                <textarea className="mb-3"  {...register("Itinerary", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">price:</label>
                <input className="mb-3" type="number" {...register("price", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Image Url:</label>
                <input className="mb-3" {...register("imgUrl", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <button className="mx-auto btn btn-outline-success" type="submit"  >Submit</button>
            </form>
        </div >
    );
};

export default AddPackages;