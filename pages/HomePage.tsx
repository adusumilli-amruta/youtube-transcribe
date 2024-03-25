import type { NextPage } from "next";

export default function HomePage() {
    return (
        <div className="main-y col-100">
            <div className="main-container col-100">
                <div className="home-y col-100"></div>
                <div className="home-y-content col-100 common align flex-col">
                    <h1>Automated Transcription <br />Fast,accurate and reliable</h1>
                    <a href="#demo">Try App</a>
                </div>
            </div>
            <div className="about-y col-100 common">
                <div className="about-left common align col-30">
                    <h2>About<br />Us</h2>
                </div>
                <div className="about-right col-50 common align">
                    <p>we bridge the gap between audiovisual content and accessible text! 
                        Our mission is to make online video content more inclusive, 
                        searchable, and digestible through accurate transcriptions.
                        In today's digital age, video content dominates the online 
                        landscape, from educational tutorials to entertainment. However, 
                        not everyone can fully engage with videos due to language barriers, 
                        hearing impairments, or simply the need for quick reference. That's 
                        where we come in.</p>
                </div>
            </div>
            <div className="about col-100 common">
                <div className="about-right col-50 common align flex-col">
                    <p><a href="#">info@myapp.com</a></p>
                    <p>Call : +1 132746874</p>
                </div>
                <div className="about-left common align col-30">
                    <h2>Contact<br />Us</h2>
                </div>
            </div>
            <div className="demo col-100" id='demo'>
                <h2>Try App</h2>
                <div className="demo-main col-100">
                </div>
            </div>
        </div>
    );
}