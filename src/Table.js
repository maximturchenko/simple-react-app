import React, {Component} from "react";

const TableHead = () => {
  return (
    <thead>
    <th>Должность</th>
    <th>Фамилия</th>
    <th>Имя</th>
    <th>Отчество</th>
    <th>Телефон</th>
    </thead>
  )
};
const TableBody = (props) => {
  // Получили значения из пропсов
  const rows = props.myProps.map(
    (row, index) => {
      return (
        <tr key={index}>
          <td>{row.position}</td>
          <td>{row.lastName}</td>
          <td>{row.firstName}</td>
          <td>{row.middleName}</td>
          <td>{row.phone}</td>
        </tr>
      )
    }
  );
  return <tbody>{rows}</tbody>
};


class Table extends Component {
  render() {
    const {characterData} = this.props;
    return (
      <table className="table table-striped">
        <TableHead/>
        <TableBody myProps={characterData}/>
      </table>
    )
  }
}

export default Table;
