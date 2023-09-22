import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetTodoData } from "../TypeScript/getDataTypes";
import TodoItem from "./TodoItem";
import { TodoContainerProps } from "../TypeScript/TodoContainerProps";

const TodoContainer = ({
  dataIsAdded,
  setDataIsAdded,
  setEditData,
  setInputValue,
  setDataId,
  setCompleted,
}: TodoContainerProps) => {
  const [getTodoData, setGetTodoData] = useState<GetTodoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mern-todo-app-jwow.onrender.com/todoApp/getTodoData",
          {
            headers: { "Cache-Control": "no-cache" }, // Disable caching for this request
          }
        );
        setGetTodoData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dataIsAdded]);

  const deleteTodoRow = async (id: string) => {
    try {
      await axios.delete(
        `https://mern-todo-app-jwow.onrender.com/todoApp/deleteTodoData/${id}`,
        {
          headers: { "Cache-Control": "no-cache" }, // Disable caching for this request
        }
      );
      setDataIsAdded(!dataIsAdded);
    } catch (error) {
      console.error("Error delete data:", error);
    }
  };

  const editFunction = (id: string, title: string, completed: boolean) => {
    setEditData(true);
    setInputValue(title);
    setDataId(id);
    setCompleted(completed);
  };

  const completeRow = async (id: string, completed: boolean) => {
    try {
      await axios.put(
        "https://mern-todo-app-jwow.onrender.com/todoApp/completeRow",
        { _id: id, completed: !completed },
        {
          headers: { "Cache-Control": "no-cache" },
        }
      );
      setDataIsAdded(!dataIsAdded);
    } catch (error) {
      console.error("Error complete row data:", error);
    }
  };

  return (
    <div className="todoItemContainer">
      <div className="todoItemContainerHeader">
        <div>
          <span>Total Tasks: </span>
          <span className="totalTasks">{getTodoData.length}</span>
        </div>
        <div>
          <span>Completed Tasks: </span>
          <span className="totalTasks">1</span>
        </div>
      </div>
      {getTodoData?.map((item, index) => {
        return (
          <TodoItem
            item={item}
            index={index}
            key={item._id}
            deleteTodoRow={deleteTodoRow}
            editFunction={editFunction}
            completeRow={completeRow}
          />
        );
      })}
    </div>
  );
};

export default TodoContainer;
