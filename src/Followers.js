import React, {Component} from "react";

const TableHead = () => {
  return (
    <thead>
    <th>Имя</th>
    <th>Количество подписчиков</th>
    </thead>
  )
};

// Получаем пропсы
const TableBody = (props) => {

  // Деструктизируем объект в локальные переменные
  const {followers, removeFollower} = props;

  const rows = followers.map(
    (followerValue, index) => {
      return (
        <tr key={index}>
          <td>{followerValue.name}</td>
          <td>{followerValue.count}</td>
          <td>
            <button onClick={() => removeFollower(index)}>Удалить</button>
          </td>
        </tr>
      )
    }
  );
  return <tbody>{rows}</tbody>
};

class Followers extends Component {
  render() {
    // Деструктизируем объект в локальные переменные
    const {followers, removeFollower} = this.props;

    return (
      <table className="table table-striped">
        <TableHead/>
        <TableBody followers={followers} removeFollower={removeFollower}/>
      </table>
    )
  }
}

export default Followers;
