import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link  className="navbar-brand" href="#">Navbar</Link>
                    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className="collapse navbar-collapse">
                        <ul  className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{color:"white"}}>
                                <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li nclassName="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" aria-current="page" exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;