import React, { useState } from "react"
import { Link } from "gatsby"

import "./user.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import ListGroup from "react-bootstrap/ListGroup"

import ProfilePicture from "../images/user.jpg"
import ProjectionPlaceholder from "../images/projection_placeholder.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function User() {
  const [key, setKey] = useState("future")

  const [earningGrowth, setEarningGrowth] = useState(3)
  const [spendingGrowth, setSpendingGrowth] = useState(3)

  return (
    <Layout headerTitle="You">
      <SEO title="You" />
      <div className="user">
        <div className="profile">
          <Card.Body>
            <Row>
              <Col>
                <Image src={ProfilePicture} roundedCircle fluid />
              </Col>
              <Col>
                <div className="user-info">
                  <Card.Title>Jessica</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Level 9 Spender
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <FontAwesomeIcon icon={faChessQueen} /> 201
                  </Card.Subtitle>
                </div>
              </Col>
            </Row>
            <Card.Text>
              Hello Jessica! Check out some insights we have for you.
            </Card.Text>
          </Card.Body>
        </div>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="future" title="Future">
            <div className="tab-description">
              Based on your previous spending, here are some projections
              regarding your wealth and spending.
            </div>
            <Card className="future-assumptions">
              <Card.Body>
                <Card.Title>The Assumptions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Toggle your estimated growth in spending and income to see how
                  your projection changes.
                </Card.Subtitle>
                <Row>
                  <Col>Estimated Growth in Spending:</Col>
                  <Col>
                    {" "}
                    <h1>
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        onClick={() => {
                          setSpendingGrowth(spendingGrowth - 1)
                        }}
                      />{" "}
                      {spendingGrowth}
                      {"% "}
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        onClick={() => {
                          setSpendingGrowth(spendingGrowth + 1)
                        }}
                      />
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>Estimated Growth in Income:</Col>
                  <Col>
                    {" "}
                    <h1>
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        onClick={() => {
                          setEarningGrowth(earningGrowth - 1)
                        }}
                      />{" "}
                      {earningGrowth}
                      {"% "}
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        onClick={() => {
                          setEarningGrowth(earningGrowth + 1)
                        }}
                      />
                    </h1>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="future-predictions">
              <Card.Body>
                <Card.Title>The Predictions</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Based on your previous spending, here are some projections
                  regarding your wealth and spending.
                </Card.Subtitle>
                <Image src={ProjectionPlaceholder} fluid />
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="now" title="Now">
            <div className="tab-description">
              Here's an analysis of your current spending habits.
            </div>
            <Card className="future-predictions">
              <Card.Body>
                <Card.Title>This Month</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Based on your previous spending, here are some projections
                  regarding your wealth and spending.
                </Card.Subtitle>
                <Image src={ProjectionPlaceholder} fluid />
              </Card.Body>
            </Card>
            <Card className="future-predictions">
              <Card.Body>
                <Card.Title>Month on Month</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Based on your previous spending, here are some projections
                  regarding your wealth and spending.
                </Card.Subtitle>
                <Image src={ProjectionPlaceholder} fluid />
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="actions" title="Actions">
            <div className="tab-description">
              Here are some recommendations that you might want to consider.
            </div>
            <Card>
              <Card.Body>
                <Card.Title>Reduce the Spending on Dining</Card.Title>
                <Card.Text>
                  Dining currently takes up 10% of your spending.
                </Card.Text>
                <Card.Link href="#">Accept</Card.Link>
                <Card.Link href="#">Reject</Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Reduce the Spending on Dining</Card.Title>
                <Card.Text>
                  Dining currently takes up 10% of your spending.
                </Card.Text>
                <Card.Link href="#">Accept</Card.Link>
                <Card.Link href="#">Reject</Card.Link>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="to-do" title="To-Do">
            <div className="tab-description">
              Here are some to-dos for better financial planning.
            </div>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Tab>
        </Tabs>
      </div>
    </Layout>
  )
}
