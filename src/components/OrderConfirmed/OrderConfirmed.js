import React from 'react';
import { useHistory } from 'react-router';

const OrderConfirmed = () => {
    const history = useHistory();

    return (
        <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthKvGGLVDGsYy8BkFwlrykq4BVQOdjx-Dxg&usqp=CAU" alt="" />
            <br />
            <button onClick={() => history.push('/home')} className="btn btn-success">Back Home</button>
        </div>
    );
};

export default OrderConfirmed;