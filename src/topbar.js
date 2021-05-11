import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-nav">
                        <a class="navbar-brand" href="/">SHAWTY</a>
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/login">Login</a>
                        <a class="nav-link" href="/register">Register</a>
                        <a class="nav-link" href="/" onClick={() => {
                            window.localStorage.removeItem("loginToken");
                        }}>Logout</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopBar;