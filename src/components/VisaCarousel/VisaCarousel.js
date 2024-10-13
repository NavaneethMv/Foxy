import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Mousewheel } from "swiper/modules"; // Import Mousewheel module

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Import custom styles
import "./VisaCarousel.css";

const App = () => {
    const swiperRef = useRef(null); // Create a ref for the Swiper instance

    useEffect(() => {
        const swiper = swiperRef.current.swiper; // Access the Swiper instance
        const swiperContainer = document.querySelector(".swiper");

        const handleClick = (event) => {
            const activeIndex = swiper.activeIndex; // Get the index of the currently active slide
            const slides = document.querySelectorAll(".swiper-slide");
            const activeSlide = slides[activeIndex]; // Get the currently active slide
            const slideRect = activeSlide.getBoundingClientRect(); // Get the dimensions of the active slide
            const clickX = event.clientX; // Get the x-coordinate of the click

            // If clicked on the left side of the active slide, go to the previous slide
            if (clickX < slideRect.left + slideRect.width / 2) {
                swiper.slidePrev(); // Use slidePrev for better looping behavior
            }
            // If clicked on the right side of the active slide, go to the next slide
            else {
                swiper.slideNext(); // Use slideNext for better looping behavior
            }
        };

        swiperContainer.addEventListener("click", handleClick); // Add the click event listener
        const updateOpacity = () => {
            const slides = document.querySelectorAll(".swiper-slide");
            const activeIndex = swiper.activeIndex;
            const totalSlides = slides.length;

            slides.forEach((slide, index) => {
                let distance = Math.abs(index - activeIndex);
                if (swiper.params.loop) {
                    const distanceFromEnd = Math.abs(index - (totalSlides - 1));
                    const distanceFromStart = Math.abs(index);
                    distance = Math.min(
                        distance,
                        distanceFromEnd + activeIndex + 1,
                        distanceFromStart + (totalSlides - 1 - activeIndex)
                    );
                }
                const opacity = Math.max(1 - distance * 0.3, 0.3); // Adjust these values as needed
                slide.style.opacity = opacity;
            });
        };

        // Initial setup
        const slides = document.querySelectorAll(".swiper-slide");
        slides.forEach((slide) => {
            slide.style.transition = "opacity 0.3s ease";
        });

        // Update opacity on slide change
        swiper.on("slideChange", updateOpacity);
        swiper.on("init", updateOpacity);

        // Initial update
        updateOpacity();
        return () => {
            swiperContainer.removeEventListener("click", handleClick); // Clean up the event listener on component unmount
            swiper.off("slideChange", updateOpacity);
            swiper.off("init", updateOpacity);
        };
    }, []);

    return (
        <section>
            <div className="carousel-container">
                {" "}
                {/* Enclosing the Swiper in a div */}
                <Swiper
                    ref={swiperRef} // Attach the ref to the Swiper component
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"} // Ensure slides scale smoothly
                    loop={true} // Enables looping
                    spaceBetween={15}
                    coverflowEffect={{
                        rotate: 0, // Use your specified values
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false, // Disable shadows for cleaner look
                    }}
                    mousewheel={true} // Enable mousewheel control
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[EffectCoverflow, Navigation, Mousewheel]} // Include Mousewheel module
                    className="swiper"
                >
                    <SwiperSlide className="swiper-slide swiper-slide--one">
                        <div className="description">
                            <h2>Hawaii Adventure</h2>
                            <p>Maui, Hawaii - Explore the exotic landscapes of Hawaii</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--two">
                        <div className="description">
                            <h2>Paris Escapade</h2>
                            <p>Paris, France - Discover the romantic city of lights</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--three">
                        <div className="description">
                            <h2>Alaskan Wilderness</h2>
                            <p>
                                Anchorage, Alaska - Experience the untouched beauty of Alaska
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--four">
                        <div className="description">
                            <h2>Safari Adventure</h2>
                            <p>Kenya, Africa - Embark on a thrilling safari experience</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--five">
                        <div className="description">
                            <h2>Tokyo Delight</h2>
                            <p>Tokyo, Japan - Dive into the vibrant culture of Japan</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--three">
                        <div className="description">
                            <h2>Alaskan Wilderness</h2>
                            <p>
                                Anchorage, Alaska - Experience the untouched beauty of Alaska
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--four">
                        <div className="description">
                            <h2>Safari Adventure</h2>
                            <p>Kenya, Africa - Embark on a thrilling safari experience</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide swiper-slide--five">
                        <div className="description">
                            <h2>Tokyo Delight</h2>
                            <p>Tokyo, Japan - Dive into the vibrant culture of Japan</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default App;