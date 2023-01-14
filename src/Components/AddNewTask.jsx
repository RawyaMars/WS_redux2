import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/actions'

const AddNewTask = () => {
    const [text, setText] = useState("Rawya tighgoch fina ")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        const newOne={
            id:Math.random(),action:text,isDone:false
        }

        text.length>0&&dispatch(handleAdd(newOne))
setText("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddNewTask