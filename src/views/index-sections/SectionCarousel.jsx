
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/labs.jpg"),
    altText: "Labs certification",
    caption:""
  },
  {
    src: require("assets/img/it security.jpg"),
    altText: "IT Security certification",
    caption:""
  },
  {
    src: require("assets/img/Infrastructure and Manufacturing.jpg"),
    altText: "Infrastructure and Manufacturing certification",
    caption:""
 
  },
  {
    src: require("assets/img/it.jpg"),
    altText: "Info Tech certification",
    caption:"" },

  {
    src: require("assets/img/food.jpg"),
    altText: "Food certification",
    caption:""  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  useEffect(()=>
  {
    Aos.init();
  },[])
  return (
    <>
      <div className="section pt-o" id="carousel">
  <Container >
    <Row>
      <Col>
        <Row className="align-items-center">
          <Col xs="12" md="3" className="mb-2" >
            <h2 style={{fontFamily: "'Raleway', sans-serif",fontWeight:"400"}}>Our Expertise</h2>
          </Col>
          <Col xs="12" md="9" data-aos="flip-right">
            
              <Card className="page-carousel mt-4 mt-md-0 ml-md-5 ">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} loading="lazy"  />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left"  />
                    <span className="sr-only" >Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" style={{backgroundColor:"primary"}} />
                    <span className="sr-only" >Next</span>
                  </a>
                </Carousel>
                </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>

      </div>{" "}
    </>
  );
}

export default SectionCarousel;
