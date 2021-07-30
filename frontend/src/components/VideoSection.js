import React from 'react'
import { useTranslation } from "react-i18next";
import '../css/VideoSection.css'
import cow from '../img/asanas/01_cow_variant1.jpg'
import dog from '../img/asanas/04_dog_Variation2.jpg'
import wheel from '../img/asanas/34_Wheel.jpeg'
import plank from '../img/asanas/37_HighPlank.jpg'
import warrior from '../img/asanas/08_warrior2.jpg'
import pyramid from '../img/asanas/26_Pyramid.jpeg'

const VideoSection = () => {
    const { t } = useTranslation()
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start vid-info"><h2 className="float-left mt-1">{t('asanas')}</h2></div>
                    <div className="col-md-6 btn-group d-flex justify-content-end">
                        <h4 className="float-right mr-4 mt-1">{t('sort')}</h4>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" 
                                type="button" id="dropdownMenu2" data-toggle="dropdown" 
                                aria-haspopup="true" aria-expanded="false">
                                {t('select')}
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">{t('new')}</button>
                            <button className="dropdown-item" type="button">{t('popular')}</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="mt-2 ml-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">{t('beginner')}</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">{t('intermediate')}</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">{t('advanced')}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox4"
                            value="option4"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">{t('upperBody')}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox5"
                            value="option5"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">{t('lowerBody')}</label>
                    </div>
                </div>
            </div>


            <div className=" row mt-2">
                <div className="card-columns ">
                    <div className="card">
                        <img src={cow} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Cow Pose</h5>
                            <p className="card-text">Spinal extensions and Spinal extensors are engaged</p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={dog} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Down Facing Dog</h5>
                            <p className="card-text">Strengthening the Shoulders </p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={wheel} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Wheel Pose</h5>
                            <p className="card-text">Elongation of the Lumber Spine</p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={warrior} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Warrior</h5>
                            <p className="card-text">Spinal Stabilization</p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pyramid} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Pyramid Pose</h5>
                            <p className="card-text">Lateral Stretching </p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={plank} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">High Plank</h5>
                            <p className="card-text">Strengthening the Spinal extensor muscles</p>
                        </div>
                        <div className="card-footer">
                            <small className="test-muted">updated few mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default VideoSection
