import React from 'react'
import logo from '../img/YogiTherapy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faVideo, faImages, faInfoCircle, faAddressCard, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="yogi Theraphy Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#253054' }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faHome} style={{ color: '#253054' }} /> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faVideo} style={{ color: '#253054' }} /> Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faImages} style={{ color: '#253054' }} /> Asanas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#253054' }} /> Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faAddressCard} style={{ color: '#253054' }} /> Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#253054' }} /> Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faSignInAlt} style={{ color: '#253054' }} /> Login</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
