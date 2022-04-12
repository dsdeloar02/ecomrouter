import React from 'react';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'



const Header = () => {
    return (
        <div className='absolute w-full top-0 z-0' >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BdShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> <FaBars className="h-[25px] text-white" /> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    User
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    LogOut
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                    Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/phonecart">
                                    PhoneCart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sresult">
                                    Sresult
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
