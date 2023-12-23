import React from "react"
import './Summary.css'
import SummaryImage from '../../../assets/images/destination/destination-image-1.png'

const Summary = (props) => {
    return (
        <div className="summary">
            <h3>Summary</h3>
            <div className="summary-list">
                <ul>
                    <li>
                        <h4>
                            Ibu kota: {props.capital}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Terletak di Pulau: {props.island}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Etnik: {props.ethnic}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Bahasa Daerah: {props.local_language}
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Jumlah Populasi: {props.population} Jiwa
                        </h4>
                    </li>
                </ul>
            </div>
            <div className="summary-grid">
                <div className="summary-left">
                    <div className="summary-content">
                        <h4>{props.dance}</h4>
                        <p>{props.dance_desc}</p>
                    </div>
                    <div className="summary-image">
                        <img src={props.dance_image} alt="" />
                    </div>
                </div>
                <div className="summary-right">
                    <div className="summary-content">
                        <h4>{props.house}</h4>
                        <p>{props.house_desc}</p>
                    </div>
                    <div className="summary-image">
                        <img src={props.house_image} alt="" />
                    </div>
                </div>
                <div className="summary-left">
                    <div className="summary-content">
                        <h4>{props.music}</h4>
                        <p>{props.music_desc}</p>
                    </div>
                    <div className="summary-image">
                        <img src={props.music_image} alt="" />
                    </div>
                </div>
                <div className="summary-right">
                    <div className="summary-content">
                        <h4>{props.weapon}</h4>
                        <p>{props.weapon_desc}</p>
                    </div>
                    <div className="summary-image">
                        <img src={props.weapon_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary