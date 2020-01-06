import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Course {props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>Content is {props.part} with {props.excercises} excercises</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
    <Part part={props.parts.parts[0].name} excercises={props.parts.parts[0].exercises}/>
    <Part part={props.parts.parts[1].name} excercises={props.parts.parts[1].exercises}/>
    <Part part={props.parts.parts[2].name} excercises={props.parts.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of excercises is {props.total.parts[0].exercises +
        props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
    </div>
  )
}














const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total total = {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
