import React from "react"

import "./settings.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide1 from "../images/slide1.png"
import Slide3 from "../images/slide3.png"


import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function Settings() {
  return (
    <Layout headerTitle="Settings">
      <SEO title="Settings" />
      <div className="settings">
        <Image src={Slide1} className="d-block w-100" />
        <h3>Made for the Razer Fintech Competition in 2020.</h3>
        
        <Row>
          <Col><h4>Created By:</h4></Col>
          <Col>Milla Samuel <br/> Brandon Ong</Col>
        </Row>

        <Row>
          <Col><h4><a href = "https://github.com/millasml/r-city">Github Link</a></h4></Col>
          
        </Row>
        <Image src={Slide3} className="d-block w-100" />
      </div>
    </Layout>
  )
}
