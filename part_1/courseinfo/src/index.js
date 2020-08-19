import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    console.log(props.content)
    return (
        <div>
            <p>
                {props.content.part1} {props.content.exercises1}
            </p>
            <p>
                {props.content.part2} {props.content.exercises2}
            </p>
            <p>
                {props.content.part3} {props.content.exercises3}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises is {props.total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development!!!'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts_and_exercises = {
        part1,
        part2,
        part3,
        exercises1,
        exercises2,
        exercises3,
    }

    const total_exercises = exercises1 + exercises2 + exercises3;

    return (
        <div>
            <Header course={course}/>
            <Content content={parts_and_exercises}/>
            <Total total={total_exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));