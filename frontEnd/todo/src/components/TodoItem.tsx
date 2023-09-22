import React, {useState} from 'react';
import { GetTodoData } from '../TypeScript/getDataTypes';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';
import { TodoItemProps } from '../TypeScript/TodoItemProps';
import { FaCheckDouble } from 'react-icons/fa';



const TodoItem = ({ item, index, completeRow, deleteTodoRow, editFunction }: TodoItemProps) => {
  const { _id, title, completed } = item;


  return (
    <div className={`todoItem ${completed ? 'completed' : ''}`}>
      <div className='todoInfo'>
        <span className='todoItemIndex'>{index + 1}. </span>
        <span className='todoItemTitle'>{title}</span>
      </div>
      <div className='todoIcons'>

        <button onClick={() => completeRow(_id, completed)} aria-label="Complete">
          <FaCheckDouble />
        </button>
        <button className='editIcon' aria-label="Edit" onClick={() => editFunction(_id, title, completed)}>
          <BiSolidEdit />
        </button>
        <button className='deleteIcon' onClick={() => deleteTodoRow(_id)} aria-label="Delete">
          <RiDeleteBinLine />
        </button>

      </div>
    </div>
  )
}

export default TodoItem