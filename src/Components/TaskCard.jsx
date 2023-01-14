import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/actions';
import EditTask from './EditTask';

const TaskCard = ({task}) => {

    const dispatch=useDispatch();

  return (
    <div>
        <h1> {task.action}</h1>
        <h3>id:{task.id}</h3>
        <button onClick={()=>dispatch(handleDelete(task.id))}> Delete</button>
        <button onClick={()=>dispatch(handleComplete(task.id))} >Complete</button>
        <EditTask task={task}/>
        <hr />
        
    </div>
  )
}

export default TaskCard