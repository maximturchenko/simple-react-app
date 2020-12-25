// Импортируем компонент реакта
import React, {Component} from "react";

import Table from "./Table";
// Компонент для выводы подписчиков
import Followers from "./Followers";

// Наследуемся на основе компонента React
class App extends Component {
  // Объект state
  state = {
    // массив объектов
    followers: [
      {
        name: 'Олег',
        count: 1,
      },
      {
        name: 'Борис',
        count: 343,
      },
      {
        name: 'Максим',
        count: 10000005,
      },
      {
        name: 'Мурзик',
        count: 132,
      },
      {
        name: 'Васька',
        count: 1000,
      },
    ],
  }

  // Удаление подписчика
  removeFollower = (followerId) => {

    // Деструктизируем объект в локальную переменную followers
    const {followers} = this.state;

    // Метод для работы и изменения объекта state
    this.setState({
      // Присваиваем новый массив после филтрации объекту state
      followers: followers.filter((value, i) => {
        // Фильтруем, оставляем всё, кроме нашего удаляемого значения
        return i !== followerId;
      })
    })
  }

  // Каждый компонент должен содержать метод render
  // Чтобы знать как выводить компонент
  render() {

    // Параметры
    const characters = [
      {
        position: "Слесарь-ремонтник",
        lastName: "Петропавлов",
        firstName: "Олег",
        middleName: "Петрович",
        phone: "+7(985)982-42-38",
      },
      {
        position: "Программист",
        lastName: "Боров",
        firstName: "Иван",
        middleName: "Павлович",
        phone: "+7(985)658-42-38",
      },
      {
        position: "Повар",
        lastName: "Барборисович",
        firstName: "Сергей",
        middleName: "Недоволевич",
        phone: "+7(985)397-42-38",
      },
      {
        position: "Ведущий",
        lastName: "Довольнов",
        firstName: "Борис",
        middleName: "Сергеевич",
        phone: "+7(985)467-42-38",
      },
    ];

    // Деструктизируем объект в локальную переменную followers
    const {followers} = this.state;

    return <div className="container">
      <Table characterData={characters}/>
      <Followers followers={followers} removeFollower={this.removeFollower}/>
    </div>
  }
}

// Экспортируем класс App
export default App;
