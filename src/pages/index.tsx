import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import "../styles.scss"
import Helmet from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Marvin Gay</title>
        <meta name="title" content="Portfolio | Marvin Gay" />
        <meta
          name="description"
          content="The portfolio website for Marvin Gay, a software engineer, poker player, and sports enthusiast."
        />
      </Helmet>
      <Header />
      <Main />
    </>
  )
}

export default Home
