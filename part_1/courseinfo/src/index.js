// Exercise 2

// Refactor the Content component so that it does not render any names of parts
// or their number of exercises by itself.
// Instead it only renders three Part components of which
// each renders the name and number of exercises of one part.
//
//     const Content = ... {
//         return (
//             <div>
//                 <Part .../>
//                 <Part .../>
//                 <Part .../>
//             </div>
//         )
//     }

import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    let partComponents = props.content.map((item) => {
        return (
            <Part part={item.part} exercise={item.exercise} key={item.id}/>
        )
    })
    return (
        <div>
            {partComponents}
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

    const parts_and_exercises = [
        {
            id: 1,
            part: 'Fundamentals of React',
            exercise: 10
        },

        {
            id: 2,
            part: 'Using props to pass data',
            exercise: 7
        },

        {
            id: 3,
            part: 'State of a component',
            exercise: 14
        },
    ]

    const {exercise: total_exercises} = parts_and_exercises.reduce((previous, current) => {
        return (
            { exercise: previous.exercise + current.exercise }
        )
    });

    console.log(total_exercises);

    return (
        <div>
            <Header course={course}/>
            <Content content={parts_and_exercises}/>
            <Total total={total_exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));