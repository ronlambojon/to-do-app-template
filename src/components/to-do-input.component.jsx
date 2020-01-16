import React from 'react';

const ToDoInput = () => (
  <div className='card card-body my-3'>
    <form>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text bg-primary text-white'>
            <i className='fas fa-book'></i>
          </div>
        </div>
        <input className='form-control text-capitalize' type='text'/>
      </div>
      <button className='btn btn-block btn-primary mt-3' type='submit'>add item</button>
    </form>
  </div>
);

export default ToDoInput;
