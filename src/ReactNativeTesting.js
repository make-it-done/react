import React from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Switch
} from "react-native";

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  appContainer: {
    flex: 1,
    paddingTop: 50
  },
  fill: {
    flex: 1
  }
});

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch onValueChange={props.onToggle} value={props.todo.checked} />
    <Button onPress={props.onDelete} title="delete" />
    <Text>{props.todo.text}</Text>
  </View>
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
    id++;
    const text = `Todo number ${id}`;
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }]
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
      <View style={[styles.appContainer, styles.fill]}>
        <Text> Total todos : {this.state.todos.length} </Text>
        <Text>
          Unchecked todo count:
          {this.state.todos.filter(todo => todo.checked === false).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="add Todos" />
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleChecked(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
