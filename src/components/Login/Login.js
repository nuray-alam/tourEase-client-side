import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { setUser, setIsLoading, signInUsingGoogle, createNewUser, updateUserProfileName, signInUsingEmail, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }

    //handle name change event
    const handleNameChange = event => {
        setName(event.target.value);
    }
    //handle email change event
    const handleEmailChange = (event) => {

        setEmail(event.target.value);
    }
    //handle password change event
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const toggleLogin = event => {
        setIsLogin(!event.target.checked);
    }

    //creating new user account
    const registerNewUser = () => {

        createNewUser(email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user)
                updateUserProfileName(name)
                    .then(() => {
                        history.push(redirect_url)
                    })
                    .catch(err => setError(err.message))
                .finally(() => setIsLoading(false))
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }
    // handle form submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLogin) {
            registerNewUser();
        }
        else {
            signInUsingEmail(email, password)
                .then((userCredential) => {
                    // Signed in 
                    setUser(userCredential.user)
                    history.push(redirect_url)
                    // ...
                })
                .catch((err) => {
                    setError(err.message)
                })
                .finally(() => setIsLoading(false))
        }

    }

    return (
        <div className="w-75 mx-auto my-5 border p-4 border-primary roundedgi">
            <h3 className="text-primary fw-bold">{isLogin ? "Login" : "Register"}</h3>
            <form onSubmit={handleSubmit}>
                {!isLogin &&
                    <div className="pb-3">
                        <label htmlFor="name">Name</label>
                        <div className="">
                            <input
                                type="text"
                                onChange={handleNameChange}
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                required
                            />
                        </div>
                    </div>
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input
                            type="email"
                            onChange={handleEmailChange}
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <div className="">
                        <input
                            type="password"
                            onChange={handlePasswordChange}
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                </div>
                <div className="form-check mt-3">
                    <input
                        onChange={toggleLogin}
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        New User? Create a account.
                    </label>
                </div>
                <p className="text-danger">{error}</p>

                <button type="submit" className="btn btn-primary mt-3">{isLogin ? "Login" : "Submit"}</button>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-primary my-5"><i className="fab fa-google me-2"></i>Sign in with Google</button>
        </div>
    );
};

export default Login;