import React, {Component} from "react";


import Task from "./Task";

import CustomModal from "./CustomModal";

class Board extends Component{


  state = {
    tasks : [
      {
        title:'Task1',
        description:'It\'s Task1'
      },
      {
        title:'Task2',
        description:'It\'s Task2'
      },
    ],
    isOpen : false,
  }

  showModal = () => {
    this.setState({
        isOpen: true
      }
    )
  };

  hideModal = () => {
    this.setState({
        isOpen: false
      }
    )
  };

  // Функция для добавления задачи
  openAdd = () => {

  }

  // Функция для удаления задачи


  // Функция для редактирования задачи


  render(){




    const {tasks} = this.state;

    // Можно разбить на отдельные компоненты
    const rows = tasks.map(
      (task, index) => {
        return <Task id={index} title={task.title} description={task.description}/>
      }
    );

    return <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>


        <CustomModal title={"Добавление"} body={} hideModal={this.hideModal}/>

        <button onClick={this.showModal}>Добавить</button>
      </table>
    </div>
  }
}

export default Board;
