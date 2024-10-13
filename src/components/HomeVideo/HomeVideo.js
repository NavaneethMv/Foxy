import './HomeVideo.css';
import React from 'react';
import mainVideo from './home_video.mp4';

function HomeVideo() {
    return (
        <div className='homevid'>
            <div className='homevid-container rounded-component'>
                <video autoPlay loop muted src={mainVideo} preload="auto"></video>
            </div>

            <div className='content'>
                <h1 className='content-heading'>WELCOME TO FOXY HOLIDAYS</h1>
                <p className='content-p'>We Take You To Happiness</p>
            </div>
        </div>
    );
}

export default HomeVideo;