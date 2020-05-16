import React from "react"
import "./bottom_nav.scss"

//bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

//font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons' 
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'





export default function BottomNav() {
  return (
    <Container className = "bottom-nav">
      <Row className = "menu">
        <Col><FontAwesomeIcon icon = {faUser}/></Col>
        <Col><FontAwesomeIcon icon = {faUsers}/></Col>
        <Col><FontAwesomeIcon icon = {faHome}/></Col>
        <Col><FontAwesomeIcon icon = {faMoneyBill}/></Col>
        <Col><FontAwesomeIcon icon = {faCog}/></Col>
      </Row>
    </Container>
  )
}
