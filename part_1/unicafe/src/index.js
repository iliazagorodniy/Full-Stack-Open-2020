import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    function reset() {
        setGood(0);
        setNeutral(0);
        setBad(0);
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={() => {setGood(good + 1)}} name={"good"}/>
            <Button handleClick={() => {setNeutral(neutral + 1)}} name={"neutral"}/>
            <Button handleClick={() => {setBad(bad + 1)}} name={"bad"}/>
            <Button handleClick={reset} name={"reset"}/>
            <h1>Feedback statistics</h1>
            <FeedbackStats good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

function Button(props) {
    const {name, handleClick} = props;
    return (
        <button onClick={handleClick}>{name}</button>
    )
}

function SingleStatItem(props) {
    const {name, value} = props;

    return (
        <p>{name} {value}</p>
    )
}

function FeedbackStats(props) {
    const {good, neutral, bad} = props
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100 + "%"

    const result = (all === 0)
        ? <p>No feedback given</p>
        : (
            <div>
                <SingleStatItem name={"good"} value={good} />
                <SingleStatItem name={"neutral"} value={neutral} />
                <SingleStatItem name={"bad"} value={bad} />
                <SingleStatItem name={"all"} value={all} />
                <SingleStatItem name={"average"} value={average} />
                <SingleStatItem name={"positive"} value={positive} />
            </div>
        )
    return result;
}

ReactDOM.render(<App />,document.getElementById('root'))
