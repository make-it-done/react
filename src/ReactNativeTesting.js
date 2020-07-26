import React from "react";
import { render } from "react-dom";

const styles = {
  fontfamily: "sans-serif",
  textAlign: "center"
};

const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}> delete</button>
    <span>{props.todo.text}</span>
  </li>
);

let id = 0;

export default class ReactNativeTesting extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Enter the text");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleChecked(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <h2>This is a class Heading </h2>
        <div> Total todos : {this.state.todos.length} </div>
        <div>
          {" "}
          Unchecked todo count:{" "}
          {this.state.todos.filter(todo => todo.checked === false).length}
        </div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleChecked(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
