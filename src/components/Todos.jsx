import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          status: false,
          work: "First thing to do ",
        },
      ],
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="w-50 mx-auto my-3">
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default Todos;
