// Импортируем основное api React
import React from "react";
// Импортируем методы для работы с dom
import ReactDom from "react-dom";

// Импортируем наш компонент
import App from "./App";



// Подключили стили бутстрапа 4
import "./bootstrap.min.css";


// Наш компонент App выводим в тег с id root
// Рендерим компонент
ReactDom.render(
  <App />
  ,
  document.getElementById("root")
);
