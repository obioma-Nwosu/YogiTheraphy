import React from 'react'
import Typed from 'react-typed'
import iosImage from '../img/appstore.png'
import androidImage from '../img/googleplay.png'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Rheumatism and yoga</h2>
                <div className="">

                    <Typed
                        className="typed-text"
                        strings={["Hi, We are YogiTherapy", "We provide, Ankylosing Spondyloarthritis Solutions", "Results, Assesments and Consultation"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>
                <div className="btn-group mt-2">
                    <a href="#" className="btn-app me-3"><img src={iosImage} alt="Appstore Image" /></a>
                    <a href="#" className="btn-app"><img src={androidImage} alt="Google Play Image" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header
