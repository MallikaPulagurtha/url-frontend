import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { postUserLogin } from "./api";

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [data, setData] = useState("");

    let userData = { email, password };

    let history = useHistory();

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                try {
                    let loginData = await postUserLogin(userData);
                    window.localStorage.setItem("app_token", loginData.data.token);
                    console.log(loginData.data);

                    let token = loginData.data.token;
                    if (token) {
                        history.push(`/main/${loginData.data.id}`);
                    }
                    else {
                        history.push('/login');
                        alert("Email or Password is incorrect");
                    }

                } catch (error) {
                    console.log(error);
                }
                // setEmail("");
                // setPassword("");

            }}>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card login">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" value={email} placeholder="Email Address" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} />
                                </div>
                                <button className="btn float-right login_btn">Login</button>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Have an account?
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to="/register">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* <button onClick={async () => {
                try {
                    let commondata = await getCommonData({
                        headers: {
                            authorization: window.localStorage.getItem("app_token")
                        }
                    });
                    setData(commondata.data.message);
                } catch (error) {
                    setData("Not logged In");
                }
            }}>Fetch</button>{data} */}
        </>
    )
}

export default Login;