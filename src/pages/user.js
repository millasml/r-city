import React, { useState, useRef, useEffect } from "react"
import LineChart from "react-linechart"
import { PieChart } from "react-minimal-pie-chart"


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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const MOCK_DATA = [[
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 6 },
  { x: 4, y: 8 },
  { x: 5, y: 7 },
  { x: 6, y: 10 },
], 

[
  { x: 1, y: 2 },
  { x: 2, y: 6 },
  { x: 3, y: 6 },
  { x: 4, y: 8 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
], 

[
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 6 },
  { x: 4, y: 8 },
  { x: 5, y: 9 },
  { x: 6, y: 10 },
]

]

const PIE_DATA = [
  { title: "Dining", value: 100, color: "#7BC950" },
  { title: "Drug Stores", value: 115, color: "#7ce577" },
  { title: "Travel", value: 250, color: "#9CFFD9" },
  { title: "Online Shopping", value: 220, color: "#B6EFD4" },
  { title: "Transport", value: 203, color: "#A0CCDA" },
]

const MONTH_DATA = [
  [
    { x: 1, y: 2 },
    { x: 2, y: 5 },
    { x: 3, y: 6 },
    { x: 4, y: 8 },
    { x: 5, y: 10 },
    { x: 6, y: 10 },
  ], 
  
  [
    { x: 1, y: 5 },
    { x: 2, y: 6 },
    { x: 3, y: 12 },
    { x: 4, y: 8 },
    { x: 5, y: 9 },
    { x: 6, y: 7 },
  ]
]

export default function User() {
  const [key, setKey] = useState("future")

  const [earningGrowth, setEarningGrowth] = useState(3)
  const [spendingGrowth, setSpendingGrowth] = useState(3)

  const [suggestions, setSuggestions] = useState(3)

  const [todo, setTodo] = useState(3)

  const scaleData = (data, scale) => {
    return data[Math.floor(Math.random() * data.length)].map(d => {
      return {
        x: d.x,
        y: d.y * (scale / 100 + 1),
      }
    })
  }

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
                <LineChart
                  width={350}
                  height={250}
                  hideXLabel={true}
                  hideYLabel={true}
                  data={[{ color: "green", points: scaleData(MOCK_DATA, earningGrowth)}, { color: "blue", points: scaleData(MOCK_DATA, spendingGrowth) }]}
                />
                <Row>
                  <Col><div className = "circle" style = {{backgroundColor: "green"}}></div> {"Spending"}</Col>
                  <Col><div className = "circle" style = {{backgroundColor: "blue"}}></div> {"Earnings"}</Col>
                </Row>
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
                  Here is a breakdown on your spending this month.
                </Card.Subtitle>
                <PieChart
                  className="pie"
                  label={({ dataEntry }) => dataEntry.title}
                  data={PIE_DATA}
                />
                The best choice of 3% category is <strong> Travel</strong>, which was your choice. Good job!
              </Card.Body>
            </Card>
            <Card className="future-predictions">
              <Card.Body>
                <Card.Title>Month on Month</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Here is how your spending compares to last month's for each category.
                </Card.Subtitle>
                <LineChart
                  width={350}
                  height={250}
                  hideXLabel={true}
                  hideYLabel={true}
                  data={[{ color: "green", points: MONTH_DATA[0]}, { color: "blue", points: MONTH_DATA[1] }]}
                />
                 <Row>
                  <Col><div className = "circle" style = {{backgroundColor: "green"}}></div> {"Last Month"}</Col>
                  <Col><div className = "circle" style = {{backgroundColor: "blue"}}></div> {"This Month"}</Col>
                </Row>
                <p>You have already exceeded the amount you spent last month. It might be a good idea to start saving up!</p>
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
