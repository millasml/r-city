/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import BottomNav from "./bottom_nav"
import "./layout.scss"

export default function Layout (props)  {

  return (
    <>
      <Header siteTitle={props.headerTitle} />
      <div className="content">
        <main>{props.children}</main>
      </div>
      <BottomNav />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
