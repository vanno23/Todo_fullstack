import React, { useState } from 'react'
import TodoInput from './TodoInput'
import './Todo.css'
import TodoContainer from './TodoContainer'

const Todo = () => {
  const [dataIsAdded, setDataIsAdded] = useState<boolean>(false);
  const [editData, setEditData] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [dataId, setDataId] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);


  return (
    <div className='container'>
      <TodoInput dataIsAdded={dataIsAdded} setDataIsAdded={setDataIsAdded} editData={editData} setEditData={setEditData} setInputValue={setInputValue} inputValue={inputValue} dataId={dataId} completed={completed} setCompleted={setCompleted}/>
      <TodoContainer dataIsAdded={dataIsAdded} setDataIsAdded={setDataIsAdded} setEditData={setEditData} setInputValue={setInputValue} setDataId={setDataId} setCompleted={setCompleted}/>
    </div>
  )
}

export default Todo