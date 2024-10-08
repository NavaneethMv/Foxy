import './HomeVideo.css'
import React from 'react'

function HomeVideo() {
    return (
        <div className='homevid'>
            <div className='homevid-container'>
                <video src='/assets/home_video.mp4'></video>
            </div>
        </div>
    );
}


export default HomeVideo;