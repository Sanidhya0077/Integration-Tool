import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect} indicators>
                <Carousel.Item>
                    <div className="slide blue-slide">
                        <img
                            className="d-block w-100"
                            src="https://www.ltimindtree.com/wp-content/uploads/2024/05/Google-Cloud-Summit-2024-HB.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <p>Discover the latest updates on Google Cloud at the Summit 2024.</p>
                            <Button variant="primary">Explore</Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide blue-slide">
                        <img
                            className="d-block w-100"
                            src="https://www.ltimindtree.com/wp-content/uploads/2024/05/WatsonX-for-Generative-AI-HB.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <p>Unlock the power of generative AI with WatsonX.</p>
                            <Button variant="primary">Explore</Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide blue-slide">
                        <img
                            className="d-block w-100"
                            src="https://www.ltimindtree.com/wp-content/uploads/2024/04/SAP-Sapphire-ASUG-2024-HB.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <p>Experience the future of SAP at Sapphire ASUG 2024.</p>
                            <Button variant="primary">Explore</Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide blue-slide">
                        <img
                            className="d-block w-100"
                            src="https://www.ltimindtree.com/wp-content/uploads/2024/04/Snowflake-Summit-2024-HB.jpg"
                            alt="Fourth slide"
                        />
                        <Carousel.Caption>
                            <p>Stay ahead with the latest innovations at Snowflake Summit 2024.</p>
                            <Button variant="primary">Explore</Button>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
