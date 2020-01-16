import React from 'react';

import ToDoInput from './components/to-do-input.component';
import ToDoList from './components/to-do-list.component';

import './App.css';

class App extends React.Component { 
  
  render() {

    return (
      <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center'>
            ToDo App
          </h3>
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
