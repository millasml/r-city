import React, { useState } from "react"
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
import Slide1 from "../images/slide1.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChessQueen } from "@fortawesome/free-solid-svg-icons"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const MOCK_DATA = [
  [
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
  ],
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
  ],
]

const SUGGESTIONS = [
  {
    title: "Reduce the Spending on Dining",
    description: "Dining currently takes up 10% of your spending.",
  },
  {
    title: "Stick to taking the bus",
    description: "Your transport expenses are 30% higher than last month's",
  },
  {
    title: "Set your Cashback Option to Online Shopping",
    description: "Based on your previous spending trends, you spend most on Online Shopping in the month of May.",
  },

]

export default function User() {
  const [key, setKey] = useState("future")

  const [earningGrowth, setEarningGrowth] = useState(3)
  const [spendingGrowth, setSpendingGrowth] = useState(3)

  const [suggestions, setSuggestions] = useState(SUGGESTIONS)

  const [todo, setTodo] = useState([])

  const scaleData = (data, scale) => {
    return data[Math.floor(Math.random() * data.length)].map(d => {
      return {
        x: d.x,
        y: d.y * (scale / 100 + 1),
      }
    })
  }

  const moveSuggestionToTodo = (index) => {
    const suggestion = suggestions[index]
    const newSuggestions = [...suggestions]
    newSuggestions.splice(index, 1)
    setSuggestions(newSuggestions)

    const newTodo = [...todo]
    newTodo.push(suggestion)
    setTodo(newTodo)
  }

  const removeFromTodo = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  const removeFromSuggestions = (index) => {
    const newSuggestions = [...suggestions]
    newSuggestions.splice(index, 1)
    setSuggestions(newSuggestions)
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
                  width="250"
                  height="250"
                  xLabel="Account Balance ($)"
                  yLabel="Years from Now"
                  hideXAxis={true}
                  hideYAxis={true}
                  hideXLabel = {true}
                  hideYLabel = {true}
                  data={[
                    {
                      color: "green",
                      points: scaleData(MOCK_DATA, earningGrowth),
                    },
                    {
                      color: "blue",
                      points: scaleData(MOCK_DATA, spendingGrowth),
                    },
                  ]}
                />
                <Row>
                  <Col>
                    <div
                      className="circle"
                      style={{ backgroundColor: "green" }}
                    ></div>{" "}
                    {"Spending"}
                  </Col>
                  <Col>
                    <div
                      className="circle"
                      style={{ backgroundColor: "blue" }}
                    ></div>{" "}
                    {"Earnings"}
                  </Col>
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
                The best choice of 3% category is <strong> Travel</strong>,
                which was your choice. Good job!
              </Card.Body>
            </Card>
            <Card className="future-predictions">
              <Card.Body>
                <Card.Title>Month on Month</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Here is how your spending compares to last month's for each
                  category.
                </Card.Subtitle>
                <LineChart
                 width="250"
                 height="250"
              
                  hideXAxis={true}
                  hideYAxis={true}
                  hideXLabel = {true}
                  hideYLabel = {true}
                  data={[
                    { color: "green", points: MONTH_DATA[0] },
                    { color: "blue", points: MONTH_DATA[1] },
                  ]}
                />
                <Row>
                  <Col>
                    <div
                      className="circle"
                      style={{ backgroundColor: "green" }}
                    ></div>{" "}
                    {"Last Month"}
                  </Col>
                  <Col>
                    <div
                      className="circle"
                      style={{ backgroundColor: "blue" }}
                    ></div>{" "}
                    {"This Month"}
                  </Col>
                </Row>
                <p>
                  You have already exceeded the amount you spent last month. It
                  might be a good idea to start saving up!
                </p>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="actions" title="Actions">
            <div className="tab-description">
              Here are some recommendations that you might want to consider. Accepting it will add it to your to-do list.
            </div>
            {
              suggestions.map( (suggestion, index) => {
                return <Card>
                <Card.Body>
                  <Card.Title>{suggestion.title}</Card.Title>
                  <Card.Text>
                    {suggestion.description}
                  </Card.Text>
                  <Card.Link  onClick = {() => {moveSuggestionToTodo(index)}}>Accept</Card.Link>
                  <Card.Link onClick = {() => {removeFromSuggestions(index)}}>Reject</Card.Link>
                </Card.Body>
              </Card>
              })
            }
           <Image src={Slide1} className="d-block w-100" />
          </Tab>
          <Tab eventKey="to-do" title="To-Do">
            <div className="tab-description">
              Here are some to-dos for better financial planning.
            </div>
            <ListGroup>
              {
                todo.map((td, index) =>{
                  return <Card>
                  <Card.Body>
                    <Card.Title>{td.title}</Card.Title>
                    <Card.Text>
                      {td.description}
                    </Card.Text>
                    <Card.Link  onClick = {() => {removeFromTodo(index)}}>Done</Card.Link>
                  </Card.Body>
                </Card>
                })
              }
              
            </ListGroup>
            <Image src={Slide1} className="d-block w-100" />
          </Tab>
        </Tabs>
      </div>
    </Layout>
  )
}
