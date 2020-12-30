import React, {Component} from "react";

class Task extends Component {

  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
      </tr>
    )
  }
}

export default Task;
