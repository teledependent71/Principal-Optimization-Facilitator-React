import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Optimization Facilitator</title>
        <meta
          property="og:title"
          content="Principal Optimization Facilitator"
        />
      </Helmet>
    </div>
  )
}

export default Home
