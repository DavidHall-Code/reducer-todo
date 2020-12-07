import React, {useReducer, useState} from 'react'
import {initialState, reducer} from './reducers/reducers'
import moment from 'moment'




fuction App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [taskInput, setTaskInput] = useState('')

  const handleChange = e => {
    setTaskInput(e.target.value)
  }

  return (
    <div className='App'>
      <div className='timeShow'>
        {moment(Date.now()).format('L')}
      </div>
      <h1>Things Todo</h1>
      <h2>Things that need doing!</h2>

      <div className='inputs'>
        <input
          type='text'
          name='addTask'
          placeholder='Add a Task'
          value={taskInput}
          onChange={handleChange}
          />

      </div>

    </div>
  )
}