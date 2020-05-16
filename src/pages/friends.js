import React from "react"
import { Link } from "gatsby"

import "./friends.scss"

import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

import Profile1 from "../images/profile1.jpg"
import Profile2 from "../images/profile2.jpg"
import Profile3 from "../images/profile3.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"

const MOCK_FRIENDS = [
  { name: "Badass", points: "201" },
  { name: "Badass", points: "201" },
  { name: "You", points: "201" },
  { name: "Badass", points: "201" },
  { name: "Badass", points: "201" },
  { name: "Badass", points: "201" },
  { name: "Badass", points: "201" },
  { name: "Badass", points: "201" },
]

const IndexPage = () => (
  <Layout headerTitle="Leaderboard">
    <SEO title="Friends" />
    <div className="friends">
      <div className="top-3">
        <Row>
          <h1>Leaderboard</h1>
        </Row>
        <Row>
          <Col>
            <Image className="irrelevant" src={Profile1} roundedCircle fluid />
            <div className="rank">2</div>
            <div className="label">Milla</div>
            <hr></hr>
            <div className="label">
              <FontAwesomeIcon icon={faChessQueen} /> 305
            </div>
          </Col>
          <Col xs={5}>
            <Image className="first" src={Profile2} roundedCircle fluid />
            <div className="rank">1</div>
            <div className="label">Brandon</div>
            <hr></hr>
            <div className="label">
              <FontAwesomeIcon icon={faChessQueen} /> 305
            </div>
          </Col>
          <Col>
            <Image className="irrelevant" src={Profile3} roundedCircle fluid />
            <div className="rank">3</div>
            <div className="label">Celeste</div>
            <hr></hr>
            <div className="label">
              <FontAwesomeIcon icon={faChessQueen} /> 305
            </div>
          </Col>
        </Row>
      </div>
      <ListGroup>
        {MOCK_FRIENDS.map((friend, rank) => {
          return (
            <ListGroup.Item className={friend.name === "You" ? "you" : ""}>
              <Row>
                <Col xs={2}>
                  <div className="rank">{rank + 4}</div>
                </Col>
                <Col xs={7}>{friend.name}</Col>
                <Col>
                  <FontAwesomeIcon icon={faChessQueen} /> {friend.points}
                </Col>
              </Row>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  </Layout>
)

export default IndexPage
