import React, { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import Input from "./components/Input";
import LIstItem from "./components/LIstItem";

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
  });
  const [isBool, setIsBool] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState("");
  const [indexVal, setIndexVal] = useState(0);

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    if (isBool) {
      let dataUpdate = newTaskValue;
      let dataNew = [];
      for (let i = 0; i < taskList.data.length; i++) {
        if (i === indexVal) {
          dataNew.push(dataUpdate);
        } else {
          dataNew.push(taskList.data[i]);
        }
      }
      setTaskList({ data: dataNew });
      setIsBool(false);
    } else {
      const newData = taskList.data;
      newData.push(newTaskValue);
      setTaskList({ data: newData });
      setNewTaskValue("");
    }
  };

  const actionUpdateTask = (event) => {
    setIsBool(true);
    setIndexVal(event);
    setNewTaskValue(taskList.data[event]);
  };

  const actionDeleteTask = (event) => {
    let dataNew = [];
    for (let i = 0; i < taskList.data.length; i++) {
      if (i !== indexVal) {
        dataNew.push(taskList.data[i]);
      }
      setTaskList({ data: dataNew });
    }
  };

  return (
    <div>
      <div class="bg-[#293462]/[1] text-center text-bold border-radius">
        <h1 class="p-10 text-2xl font-bold text-white">Selamat Datang di aplikasi TodoList</h1>
      </div>
      <div className="bg-[#293462]/[0.5] border-2 shadow-lg max-w-3xl rounded-lg p-3 m-auto flex-none">
        <Title class title="Add Todo List" />
        <Input
          placeholder="Silahkan Inputkan Todo Disini !"
          value={newTaskValue}
          onChange={(event) => setNewTaskValue(event.target.value)}
        />
        <Button text={isBool ? "update" : "Add Task"} onClick={actionAddTask} />
      </div>
      <div >
        
        <ul>
        
          {taskList.data.map((item, index) => (
            <LIstItem
              name={item}
              update={() => actionUpdateTask(index)}
              delete={() => actionDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
      <footer class="bg-[#293462]/[1] text-center absolute inset-x-0 bottom-0">
        <p class="text-white p-2">React JS <b>Endrirmn | 2022</b></p>
      </footer>

    </div>
  );
};

export default App;
