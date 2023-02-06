import React from 'react'
import { Link } from 'react-router-dom'
import Button_Com from './Button_Com'

function Navbar() {
    return (
        <>
            <div className="container-fluid Navbar_section sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="assets/image/logo.svg" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">  Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Template</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Pages</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Contact</a>
                                </li>
                            </ul>
                            <Button_Com btn_title="Purchase Now"/>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar