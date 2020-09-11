import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Anecdote(props) {
    const {votes, value} = props
    return (
        <p>{value} has {votes} votes</p>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))

    function randomIntNumber(min, max) {
        return Math.round(min + Math.random() * (max - min))
    }

    function generateRandomJoke() {
        const maxIndex = props.anecdotes.length - 1;
        let randNumber = randomIntNumber(0, maxIndex);
        while (randNumber === selected) {
            randNumber = randomIntNumber(0, maxIndex);
        }
        setSelected(randNumber);
    }

    function voteForJoke() {
        setVotes((prevVotes) => {
            prevVotes[selected] = prevVotes[selected] + 1
            return [
                ...prevVotes
            ]
        })
    }

    function findMostVotedJoke() {
        const maxVotesVal = Math.max(...votes);
        const indexOfMaxVotesVal = votes.indexOf(maxVotesVal);
        return {
            value: props.anecdotes[indexOfMaxVotesVal],
            votes: maxVotesVal,
        };
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote votes={votes[selected]} value={props.anecdotes[selected]} />
            <div>
                <button onClick={voteForJoke}>vote</button>
                <button onClick={generateRandomJoke}>next anecdote</button>
            </div>
            <h1>Anecdote with most votes</h1>
            <Anecdote votes={findMostVotedJoke().votes} value={findMostVotedJoke().value}/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)