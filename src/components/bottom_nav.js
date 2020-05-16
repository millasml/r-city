import React, { useState } from "react"
import "./bottom_nav.scss"
import { Link } from "gatsby"

//bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

export default function BottomNav(props) {
  return (
    <Container className="bottom-nav">
      <Row className="menu">
        <Link to="/user/">
          <Col className={props.page === "You" ? "select" : ""}>
            <FontAwesomeIcon icon={faUser} />
            <br />
            <small>Profile</small>
          </Col>
        </Link>
        <Link to="/friends/">
          <Col className={props.page === "Leaderboard" ? "select" : ""}>
            <FontAwesomeIcon icon={faUsers} />
            <br />
            <small>Friends</small>
          </Col>
        </Link>
        <Link to="/home/">
          <Col className={props.page === "Dashboard" ? "select" : ""}>
            <FontAwesomeIcon icon={faHome} />
            <br />
            <small>Home</small>
          </Col>
        </Link>
        <Link to="/bills/">
          <Col className={props.page === "Bills" ? "select" : ""}>
            <FontAwesomeIcon icon={faMoneyBill} />
            <br />
            <small>Bills</small>
          </Col>
        </Link>

        <Link to="/settings/">
          <Col className={props.page === "Settings" ? "select" : ""}>
            <FontAwesomeIcon icon={faCog} />
            <br />
            <small>Settings</small>
          </Col>
        </Link>
      </Row>
    </Container>
  )
}
