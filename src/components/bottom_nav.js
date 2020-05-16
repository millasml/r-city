import React from "react"
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

export default function BottomNav() {
  return (
    <Container className="bottom-nav">
      <Row className="menu">
        <Link to="/user/">
          <Col>
            <FontAwesomeIcon icon={faUser} />
          </Col>
        </Link>
        <Link to="/friends/">
          <Col>
            <FontAwesomeIcon icon={faUsers} />
          </Col>
        </Link>
        <Link to="/home/">
          <Col>
            <FontAwesomeIcon icon={faHome} />
          </Col>
        </Link>
        <Link to="/bills/">
          <Col>
            <FontAwesomeIcon icon={faMoneyBill} />
          </Col>
        </Link>

        <Link to="/settings/">
          {" "}
          <Col>
            <FontAwesomeIcon icon={faCog} />
          </Col>
        </Link>
      </Row>
    </Container>
  )
}
