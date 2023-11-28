import React, {useState} from "react";
import './App.css';
import List from "./components/List";
import Form from "./components/Form";

export default function App() {

  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()  //form 안에 input을 전송할 때 페이지 리로드 되는걸 막아준다.

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    //prev로 받으면 이전 상태값을 가져올 수 있다.
    setTodoData((prev) => [...prev, newTodo])
    setValue("")
  }
  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List
          todoData = {todoData}
          setTodoData = {setTodoData}
        />

        <Form
          handleSubmit = {handleSubmit}
          value = {value}
          setValue = {setValue}
        />

      </div>
    </div>
  )
}