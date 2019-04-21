import React, { useState } from 'react'

const About = props => {
  const [testState, setTestState] = useState("testing")

  const onTestHandler = (item) => {
    setTestState("new state" + item)
  }

  return (
    <div className="about__div-Area">
      <div className="about__div">
        <h1>About</h1>
        <p>info on what the product is as well has how to use</p>
        <p>{testState}</p>
        <button onClick={onTestHandler.bind(null, "testinghere")}>button</button>
      </div>
    </div>
  )
}

export default About
