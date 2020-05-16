import React from "react"
import { Link } from "gatsby"

import "./user.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

export default function User() {
  return (
    <Layout headerTitle="You">
      <SEO title="You" />
      <div className="user">
      <Card className = "overview">
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      
      </div>
    </Layout>
  )
}
