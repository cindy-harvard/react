import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import Button from "../components/button"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <p>
        <Button buttonText="Click me" />
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
