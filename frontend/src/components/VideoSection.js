import React from 'react'
import { useTranslation } from "react-i18next";
import '../css/VideoSection.css'

const VideoSection = () => {
    const { t } = useTranslation()
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start vid-info"><h2 className="float-left mt-1">{t('videos')}</h2></div>
                <div className="col-md-6 btn-group d-flex justify-content-end">
                    <h4 className="float-right mr-4 mt-1">{t('sort')}</h4>
                    <div class="dropdown">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" 
                        type="button" id="dropdownMenu2" data-toggle="dropdown" 
                        aria-haspopup="true" aria-expanded="false">
                        {t('select')}
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">{t('new')}</button>
                        <button className="dropdown-item" type="button">{t('popular')}</button>
                    </div>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" for="inlineCheckbox1">Beginner</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" for="inlineCheckbox2">Intermediate</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">Advanced</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox4"
                            value="option4"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">Upper Body</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox5"
                            value="option5"
                        />
                        <label className="form-check-label" for="inlineCheckbox3">Lower Body</label>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default VideoSection
