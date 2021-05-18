import React from 'react';
import about from '../img/image-1.JPG';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Nodir</span></h4>
                <p className="about-text">
                    ello my dear! I am Abdunazrov Nodir and I’m 20. I am from Uzbekistan, Tashkent and currently I’m
                    living in Tashkent region, Zangiota. So I started learning Frontend development since 2020 years from
                    PDP IT-Academy
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Abdunazarov Nodir</p>
                        <p>: 20</p>
                        <p>: Uzbek</p>
                        <p>: English, Russian, Uzbek</p>
                        <p>: 3/12 A.Qodiriy st., Zangiota</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
