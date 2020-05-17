import React, { useState } from "react"
import { Link } from "gatsby"

import "./bills.scss"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import ProgressBar from "react-bootstrap/ProgressBar"

import Layout from "../components/layout"
import SEO from "../components/seo"

function TransactionEntry(props) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={8}>
          <small>{props.date}</small>
        </Col>
        <Col>
          <h6>{props.cost}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>{props.item}</h5>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default function Bills({location}) {

  let initCashbackChoice = "Make a Choice"
  if (location !== null){
    if (location.state !== null && location.state !== undefined){
      if(location.state.newCashbackChoice !== null && location.state.newCashbackChoice!== undefined){
        initCashbackChoice = location.state.newCashbackChoice
      }
    }

  }

  const [cashbackChoice, setCashbackChoice] = useState(
    initCashbackChoice
  )


  return (
    <Layout headerTitle="Bills">
      <SEO title="Bills" />
      <div className="bills">
        <Container className="overview">
          <Row>
            <Col>
              <h1 className="text-center">$123.00</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center">Current Balance</p>
            </Col>
          </Row>

          <Row>
            <Col xs={9}>{}</Col>
            <Col>$1000</Col>
          </Row>
          <Row height="10px">
            <Col>
              <ProgressBar variant="success" now={35} />
            </Col>
          </Row>
        </Container>

        <Card>
          <Card.Body>
            <Card.Title>Cash Rewards & Benefits</Card.Title>
            <h1>$29.30</h1>
            <p>Worth of Rewards Waiting to be Redeemed.</p>
            <Button className="pay-btn"> View and Redeem </Button>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col xs={8}>Current 3% Choice: <p className = "highlight">{cashbackChoice}</p></Col>
                  <Col>
                    <Link
                      to="/bills/change/"
                      state={{
                        cashbackChoice: cashbackChoice
                      }}
                    >
                      <Button className="change-btn"> Change </Button>
                    </Link>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
          <Card.Title>Payments</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col xs={7}>Payment Due Date</Col>
                  <Col>May 2020</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={7}>Total Minimum Payment Due</Col>
                  <Col>$0.30</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col xs={7}>Next Closing Date</Col>
                  <Col>May 24</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Button className="pay-btn"> Pay </Button>

        <Card>
          <Card.Body>
            <Card.Title>Recent Transactions</Card.Title>
            <ListGroup variant="flush">
              <TransactionEntry
                date="May 7, 2020"
                item="Ice Cream Andersens"
                cost="$12.00"
              />
              <TransactionEntry
                date="May 7, 2020"
                item="Ice Cream Andersens"
                cost="$12.00"
              />
              <TransactionEntry
                date="May 7, 2020"
                item="Ice Cream Andersens"
                cost="$12.00"
              />
              <ListGroup.Item>
                <Link to="/bills/">ALL TRANSACTIONS</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

       
      </div>
    </Layout>
  )
}
