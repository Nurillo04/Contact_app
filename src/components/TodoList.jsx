import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <table className="table striped hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Group</th>
              <th>Does Work</th>
              <th className="text-end pe-5">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nurillo</td>
              <td>Aminjonov</td>
              <td>Group N32</td>
              <td>Yes</td>
              <td className="d-flex gap-3  justify-content-end ">
                <button className="btn btn-warning btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
