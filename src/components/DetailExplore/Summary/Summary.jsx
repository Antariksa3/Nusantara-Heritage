import React from "react"
import './Summary.css'
import SummaryImage from '../../../assets/images/destination/destination-image-1.png'

const Summary = () => {
    return (
        <div className="summary">
            <h3>Summary</h3>
            <div className="summary-grid">
                <div className="summary-left">
                    <div className="summary-content">
                        <h4>Subtitle</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words . It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    <div className="summary-image">
                        <img src={SummaryImage} alt="" />
                    </div>
                </div>
                <div className="summary-right">
                    <div className="summary-content">
                        <h4>Subtitle</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words . It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    <div className="summary-image">
                        <img src={SummaryImage} alt="" />
                    </div>
                </div>
                <div className="summary-left">
                    <div className="summary-content">
                        <h4>Subtitle</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words . It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    <div className="summary-image">
                        <img src={SummaryImage} alt="" />
                    </div>
                </div>
                <div className="summary-right">
                    <div className="summary-content">
                        <h4>Subtitle</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words . It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words</p>
                    </div>
                    <div className="summary-image">
                        <img src={SummaryImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary