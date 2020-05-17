import React, { useState } from "react"
import { Link } from "gatsby"
import { PieChart } from "react-minimal-pie-chart"

import "./change.scss"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import Modal from "react-bootstrap/Modal"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MOCK_DATA = [
  { title: "Dining", value: 100, color: "#7BC950" },
  { title: "Drug Stores", value: 115, color: "#7ce577" },
  { title: "Travel", value: 250, color: "#9CFFD9" },
  { title: "Online Shopping", value: 220, color: "#B6EFD4" },
  { title: "Transport", value: 203, color: "#A0CCDA" },
]

export default function Change({ location }) {
  let initCashbackChoice = "Make a Choice"
  if (location !== null) {
    if (location.state !== null && location.state !== undefined) {
      if (
        location.state.cashbackChoice !== null &&
        location.state.cashbackChoice !== undefined
      ) {
        initCashbackChoice = location.state.cashbackChoice
      }
    }
  }

  const [cashbackChoice, setCashbackChoice] = useState(initCashbackChoice)

  const [preliminaryChoice, setPreliminaryChoice] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Layout headerTitle="Rewards Choice">
      <SEO title="Rewards Choice" />
      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        className="choice-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Choice Selected.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Confirm your choice of <h2>{preliminaryChoice}</h2> Note that you can
          only change your choice once a month.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="pay-btn"
            onClick={() => {
              setCashbackChoice(preliminaryChoice)
              handleClose()
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="change">
        <Container className="overview">
          <Row>
            <Col>
              <p className="text-center">your are currently earning 3% from</p>
              <h1 className="text-center">{cashbackChoice}</h1>
            </Col>
          </Row>
        </Container>

        <Card>
          <Card.Header>Is it time for a change?</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                We are here to help. Here is a breakdown of your spending last
                month
              </Col>
            </Row>
            <Row>
              <Col>
                <PieChart
                  className="pie"
                  label={({ dataEntry }) => dataEntry.title}
                  data={MOCK_DATA}
                />
              </Col>
            </Row>
            <ListGroup variant="flush">
              {MOCK_DATA.map(entry => {
                return (
                  <>
                    <ListGroup.Item>
                      <Row>
                        <Col xs={5}>{entry.title}</Col>
                        <Col>{`$${entry.value}`}</Col>
                        <Col
                          onClick={() => {
                            setPreliminaryChoice(entry.title)
                            handleShow()
                          }}
                          className="choose"
                        >
                          Choose
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </>
                )
              })}
            </ListGroup>
          </Card.Body>
        </Card>
        <Link to="/bills/" state={{ newCashbackChoice: cashbackChoice }}>
          <Button className="pay-btn"> Go Back </Button>
        </Link>
      </div>
    </Layout>
  )
}
