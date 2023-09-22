import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TodoInputProps } from '../TypeScript/TodoInputProps';

const TodoInput = ({dataIsAdded, setDataIsAdded, editData, setEditData, inputValue, setInputValue, dataId, completed, setCompleted}: TodoInputProps) => {


  const changeData = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!editData) {
        await axios.post('http://localhost:5000/todoApp', { title: inputValue, completed }, {
          headers: { 'Cache-Control': 'no-cache' },
        });
      } else {
        await axios.put('http://localhost:5000/todoApp/changeTodoData', { id: dataId, editedTitle: inputValue, completed }, {
          headers: { 'Cache-Control': 'no-cache' },
        });
        setEditData(false);
      }
      setDataIsAdded(!dataIsAdded);
      setCompleted(false);
      setInputValue('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className='TodoInput'>
      <h1 className='todoTitle'>Task manager</h1>

      <form onSubmit={changeData}>
        <div className='inputData'>
          <input
            type="text"
            placeholder='Add a task'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className='TodoInputBtns'>
            <button 
              className='submitButton' 
              type='submit'>
              {editData ? 'Edit' : 'Add'}
            </button>
            <button 
              className={`completeButton ${completed ? 'completeTrue' : ''}`} 
              type='button' onClick={() => setCompleted(!completed)} 
              aria-label="Toggle completion"
            >
              <div className={`${completed ? 'complete' : ''}`}></div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TodoInput