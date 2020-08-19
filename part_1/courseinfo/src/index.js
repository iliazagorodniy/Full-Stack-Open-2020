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
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    let partComponents = props.content.map((item) => {
        return (
            <Part part={item.part} exercises={item.exercises} key={item.id}/>
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

    const course = {
        name: 'Half Stack application development!!!',
        parts:
        [
            {
                id: 1,
                part: 'Fundamentals of React',
                exercises: 10
            },

            {
                id: 2,
                part: 'Using props to pass data',
                exercises: 7
            },

            {
                id: 3,
                part: 'State of a component',
                exercises: 14
            },
        ]
    }

    const {exercises: total_exercises} = course.parts.reduce((previous, current) => {
        return (
            {exercises: previous.exercises + current.exercises}
        )
    });

    return (
        <div>
            <Header course={course.name}/>
            <Content content={course.parts}/>
            <Total total={total_exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));