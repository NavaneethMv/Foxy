import React from "react";
import './ScrollDown.css'


function ScrollDown() {
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    }

    return (
        <button className="scroll-down-button" onClick={handleScrollDown}>
            <span className="scroll-down-arrow">↓</span>
        </button>
    );
}

export default ScrollDown;