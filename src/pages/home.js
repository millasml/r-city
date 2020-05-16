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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMedal } from "@fortawesome/free-solid-svg-icons"

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
        <Card.Title>Leaderboard</Card.Title>

        <Row>
            <Col xs = {4}><h1 style = {{fontSize: "4rem"}}><FontAwesomeIcon icon = {faMedal}/></h1></Col>
            <Col><Row><h1>Brandon</h1></Row><Row>Cashback Efficiency of 400</Row></Col>
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
