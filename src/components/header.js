import { Link } from "gatsby"
import React from "react"

import './header.scss'

export default function Header (props) {

  return   (
    <header className = "header">
      {props.siteTitle}
    </header>
  )
  

};

