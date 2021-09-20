import React from 'react';
import { Link } from 'react-router-dom';

const TobBar = () => {
    return (
        <div className="sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <i className="topIcon fab fa-facebook-square fs-2 ms-3"></i>
                    <i className="topIcon fab fa-instagram fs-2 ms-3"></i>
                    <i className="topIcon fab fa-twitter-square fs-2 ms-3"></i>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="#" to="/">BLOG</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="#" to="/write">WRITE</Link>
                        </li>
                        <li class="nav-item me-5">
                        <Link class="nav-link active" aria-current="page" href="#" to="/contact">CONTACT</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="#" to="/login">LOGIN</Link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TobBar;