import React, {useEffect} from 'react'
import logo from '../img/YogiTherapy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faVideo, faImages, faInfoCircle, faAddressCard, faUserPlus, faSignInAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie'
import {Link} from 'react-router-dom'

const languages = [
    {
        code: 'de',
        name: 'Deutsche',
        country_code: 'de'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    }
]
const NavBar = () => {

    const currentLanguageCode = cookies.get('i18next') || 'en'

    const { t } = useTranslation()
    useEffect(() => {
        document.title = t('app_title')
    }, [t])
    return (
        <nav className="navbar sticky-top navbar-expand-xl navbar-light">
            <div className="container">

                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="yogi Theraphy Logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#253054' }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >
                                <FontAwesomeIcon icon={faHome} style={{ color: '#253054' }} /> {t('home')}</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faVideo} style={{ color: '#253054' }} /> {t('videos')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faImages} style={{ color: '#253054' }} /> {t('asanas')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#253054' }} /> {t('blog')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faAddressCard} style={{ color: '#253054' }} /> {t('contact')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faUserPlus} style={{ color: '#253054' }} /> {t('register')}</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" >
                                <FontAwesomeIcon icon={faSignInAlt} style={{ color: '#253054' }} /> {t('login')}</Link>
                        </li>
                        <div className="dropdown">
                            <button
                            className = "btn btn-link dropdown-toggle"
                            type = "button"
                            id = "dropdownMenuButton"
                            data-toggle = "dropdown"
                            aria-expanded = "false"
                            >
                                <FontAwesomeIcon icon={faGlobe} style={{ color: '#253054' }} /> 
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><span className="dropdown-item-text">{t('language')}</span></li>
                                {languages.map(({code, name, country_code}) =>(
                                    <li key={country_code}>
                                        <button className="dropdown-item" onClick={() => 
                                            i18next.changeLanguage(code)}
                                            disabled={code === currentLanguageCode}>
                                            <span className={`flag-icon flag-icon-${country_code} mx-2`}
                                            style={{opacity: code === currentLanguageCode ? 0.5 : 1}}
                                            ></span>
                                            {name}
                                        </button>
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
