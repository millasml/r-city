import React from "react"
import { Link } from "gatsby"
import "./index.scss"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"

import Slide1 from "../images/slide1.png"
import Slide2 from "../images/slide2.png"
import Slide3 from "../images/slide3.png"

const IndexPage = () => (
  <Container className="index">
    <h1>Welcome to R City.</h1>
  
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Take Responsibility - and credit</h3>
            <p>With great credit comes great resposibility - the perfect first credit card to bring you to adulthood.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Keep Track - Spend Smart</h3>
            <p>With great perks, you are motivated to plan ahead and spend wisely.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Community, City.</h3>
            <p>
              Link up with friends to see who is the better spender.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      <Link to="/home/">
      <Button className = "get-started-btn">Get Started</Button>
      </Link>
   
  </Container>
)

export default IndexPage
