// Импортируем компонент реакта
import React, {Component} from "react";

import Table from "./Table";

// Наследуемся на основе компонента React
class App extends Component{

  // Каждый компонент должен содержать метод render
  // Чтобы знать как выводить компонент
  render(){

    // Параметры
    const characters = [
      {
        position : "Слесарь-ремонтник",
        lastName: "Петропавлов",
        firstName: "Олег",
        middleName: "Петрович",
        phone: "+7(985)982-42-38",
      },
      {
        position : "Программист",
        lastName: "Боров",
        firstName: "Иван",
        middleName: "Павлович",
        phone: "+7(985)658-42-38",
      },
      {
        position : "Повар",
        lastName: "Барборисович",
        firstName: "Сергей",
        middleName: "Недоволевич",
        phone: "+7(985)397-42-38",
      },
      {
        position : "Ведущий",
        lastName: "Довольнов",
        firstName: "Борис",
        middleName: "Сергеевич",
        phone: "+7(985)467-42-38",
      },
    ];

    return <div className="container">
      <Table characterData={characters}/>
    </div>
  }

}

// Экспортируем класс App
export default App;