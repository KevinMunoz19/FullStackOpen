import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.allClicks == 0) {
    return (
      <div>
        No statistics available yet
      </div>
    )
  }

  return (
    <div>
      <table>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>Total Clicks</td>
        <td>{props.allClicks}</td>
      </tr>
      <tr>
        <td>Score</td>
        <td>{(props.good-props.bad)}</td>
      </tr>
      <tr>
        <td>Positive Feedback</td>
        <td>{(props.good*100)/props.allClicks}</td>
      </tr>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>Give Us Feedback</h1>
        <Button onClick={handleGoodClick} text='Good' />
        <Button onClick={handleNeutralClick} text='Neutral' />
        <Button onClick={handleBadClick} text='Bad' />
        <h1>Statistics</h1>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad = {bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
