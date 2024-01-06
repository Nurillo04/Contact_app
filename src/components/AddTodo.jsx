import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div className="py-3  ">
        <form className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add new..."
          />
          <button className="btn btn-dark">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
