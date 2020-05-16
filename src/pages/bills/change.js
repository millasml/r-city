import React from "react"
import { Link } from "gatsby"
import { PieChart } from "react-minimal-pie-chart"

import "./change.scss"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const MOCK_DATA = [
  { title: "Dining", value: 100, color: "#7BC950" },
  { title: "Drug Stores", value: 115, color: "#7ce577" },
  { title: "Travel", value: 250, color: "#9CFFD9" },
  { title: "Online Shopping", value: 220, color: "#B6EFD4" },
  { title: "Transport", value: 203, color: "#A0CCDA" },
]

export default function Change() {
  return (
    <Layout headerTitle="Rewards Choice">
      <SEO title="Rewards Choice" />
      <div className="change">
        <Container className="overview">
          <Row>
            <Col>
              <p className="text-center">your are currently earning 3% from</p>
              <h1 className="text-center">Dining</h1>
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
                  <ListGroup.Item>
                    <Row>
                      <Col xs={5}>{entry.title}</Col>
                      <Col>{`$${entry.value}`}</Col>
                      <Col>Choose</Col>
                    </Row>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Card.Body>
        </Card>
        <Link to = "/bills/"><Button className="pay-btn"> Go Back </Button></Link>
      </div>
    </Layout>
  )
}
