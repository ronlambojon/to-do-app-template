import React from 'react';

const ToDoList = () => (
  <div>
    <ul className='list-group my-5'>
      <h3 className='text-capitalize text-center'>
        ToDo List
      </h3>
      <div className='to-do-item'>
        <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
          <h6> ToDo Item </h6>
          <div className='todo-icon'>
            <span className='mx-2 text-danger'>
              <i></i>
            </span>
          </div>
        </li>
      </div>
      <button 
        className='btn btn-danger btn-block text-capitalize mt-5' 
        type='button'
      >clear list</button>
    </ul>
  </div>
);

export default ToDoList;