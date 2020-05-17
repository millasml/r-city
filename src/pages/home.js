import React from "react"
import { Link } from "gatsby"

import "./home.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProgressBar from "react-bootstrap/ProgressBar"
import Image from "react-bootstrap/Image"


import Profile2 from "../images/profile2.jpg"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
    
    return(
  <Layout headerTitle="Dashboard">
    <SEO title="Home" />
    <div className = "home">

    <Card>
      <Card.Body>
        <Card.Title>Current Balance</Card.Title>
        <h1>$129.30</h1>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={8}>This Month's Charges</Col>
              <Col>$12</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={8}>Statement Balance</Col>
              <Col>$142.30</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={8}>Available</Col>
              <Col>$120.11</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <ProgressBar>
              <ProgressBar variant="success" now={35} key={1} />
              <ProgressBar variant="warning" now={20} key={2} />
            </ProgressBar>
          </ListGroup.Item>
          <ListGroup.Item>
           <Link to = "/bills/">Manage</Link>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>


    <Card>
      <Card.Body>
        <Card.Title>Cash Back Status</Card.Title>
        
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col><div className = "pill wide on">1%</div></Col>
              <Col><div className = "pill wide">1.25%</div></Col>
              <Col><div className = "pill wide">1.5%</div></Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row >
              <Col><div className = "pill on">$</div></Col>
              <Col><div className = "pill on">$</div></Col>
              <Col><div className = "pill on">$</div></Col>
              <Col><div className = "pill">$</div></Col>
              <Col><div className = "pill">$</div></Col>
              
            </Row>
          </ListGroup.Item>
  
          <ListGroup.Item>
           Make 6 monthly on time payments to increase your cashback status.
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>


    <Card>
      <Card.Body>
        <Card.Title>Leaderboard</Card.Title>

        <Row>
            <Col xs = {4}><Image className="first" src={Profile2} roundedCircle fluid /></Col>
            <Col><Row><h2 className = "text-center">Brandon</h2></Row><Row><Col>
                  <FontAwesomeIcon icon={faChessQueen} /> 302
                </Col></Row></Col>
        </Row>
        
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={8}>Milla</Col>
              <Col>387</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className = "you">
            <Row >
              <Col xs={8}>You</Col>
              <Col>338</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={8}>Celeste</Col>
              <Col>289</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
           <Link to = "/friends/">See More</Link>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>

    </div>
   
  </Layout>
)
    }
