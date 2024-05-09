import React, { useEffect, useState } from 'react';
import { Card, Placeholder } from 'react-bootstrap';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function Banner() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [boolean, setBoolean] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setBoolean(true);
        }, 1500);
    }, []);

    const handleSlideClick = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    const handlePrevSlide = () => {
        const newActiveSlide = (activeSlide - 1 + 3) % 3; // 3 - количество слайдов
        setActiveSlide(newActiveSlide);
    };

    const handleNextSlide = () => {
        const newActiveSlide = (activeSlide + 1) % 3; // 3 - количество слайдов
        setActiveSlide(newActiveSlide);
    };

    return (
        <>
            {
                boolean ?

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button
                                style={{ border: "2px solid rgba(0, 0, 0, 1)", width: '20px', height: '20px', backgroundColor: activeSlide === 0 ? 'rgba(11, 132, 87, 1)' : 'rgba(247, 247, 247, 1)' }}
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="0"
                                className="active banner-round"
                                // aria-current="true"
                                aria-label="Slide 1"
                                onClick={() => handleSlideClick(0)}
                            ></button>
                            <button
                                style={{ border: "2px solid rgba(0, 0, 0, 1)", width: '20px', height: '20px', backgroundColor: activeSlide === 1 ? 'rgba(11, 132, 87, 1)' : 'rgba(247, 247, 247, 1)' }}
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="1"
                                className="banner-round"
                                aria-label="Slide 2"
                                onClick={() => handleSlideClick(1)}
                            ></button>
                            <button
                                style={{ border: "2px solid rgba(0, 0, 0, 1)", width: '20px', height: '20px', backgroundColor: activeSlide === 2 ? 'rgba(11, 132, 87, 1)' : 'rgba(247, 247, 247, 1)' }}
                                type="button"
                                data-bs-target="#carouselExampleDark"
                                data-bs-slide-to="2"
                                className="banner-round"
                                aria-label="Slide 3"
                                onClick={() => handleSlideClick(2)}
                            ></button>
                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src="/images/banner.png" className="carousel-item-img" alt="..." />
                                    <div className="carousel-caption" style={{ position: "absolute", top: 80 }}>
                                        <h5 className='carousel-caption-title'>First slide label</h5>
                                        <p className='carousel-caption-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore consectetur voluptatum in dicta. Perspiciatis velit!</p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src="/images/banner.png" className="carousel-item-img" alt="..." />
                                    <div className="carousel-caption" style={{ position: "absolute", top: 80 }}>
                                        <h5 className='carousel-caption-title'>First slide label</h5>
                                        <p className='carousel-caption-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore consectetur voluptatum in dicta. Perspiciatis velit!</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/banner.png" className="carousel-item-img" alt="..." />
                                    <div className="carousel-caption" style={{ position: "absolute", top: 80 }}>
                                        <h5 className='carousel-caption-title'>First slide label</h5>
                                        <p className='carousel-caption-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dolore consectetur voluptatum in dicta. Perspiciatis velit!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                            onClick={handlePrevSlide}
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                            onClick={handleNextSlide}
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    :
                    <Card style={{ width: '100%', height: "356px", textAlign: "center", paddingTop: "100px" }}>
                        <Card.Body>

                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={3} style={{ height: "25px" }} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={8} />
                                <Placeholder xs={5} />
                            </Placeholder>
                            <Placeholder style={{ marginTop: "70px", backgroundColor: "white" }}>
                                <Placeholder.Button variant="success" xs={0} style={{ height: "20px", boderRadius: "50%", border: "2px solid black", marginRight: "5px" }} />
                                <Placeholder.Button variant="light" xs={0} style={{ height: "20px", boderRadius: "50%", border: "2px solid black", marginRight: "5px" }} />
                                <Placeholder.Button variant="light" xs={0} style={{ height: "20px", boderRadius: "50%", border: "2px solid black", marginRight: "5px" }} />
                            </Placeholder>


                        </Card.Body>
                    </Card>
            }
        </>
    )
}