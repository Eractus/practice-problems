import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
    this.state = {
      todos: this.props.todos,
    }
  }

  completeTodo = (idx) => {
    let currTodos = this.state.todos.slice();
    currTodos.splice(idx, 1);
    this.setState( { todos: currTodos } );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let todo = { task: this.inputRef.current.value }
    this.setState({
      todos: [...this.state.todos, todo],
    })
    this.inputRef.current.value = "";
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo, index) => (
          <Todo key={index} task={todo.task} completeTodo={() => this.completeTodo(index)}/>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input ref={this.inputRef} type="text" placeholder="Add todo"/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

TodoList.defaultProps = {
  todos: [
    {
      task: "Buy milk"
    },
    {
      task: "Built app"
    },
    {
      task: "Walk dog"
    }
  ]
}

const Todo = (props) => {
  return (
    <div className="todo">
      {props.task}
      <button onClick={props.completeTodo}>Complete</button>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
