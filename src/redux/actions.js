import { ADD, COMPLETE, DELETE, EDIT } from "./actionTypes"



export const handleAdd=(newTask)=>{
    return {
        type:ADD,
        payload:newTask
    }
};

export const handleDelete=(taskID)=>{
    return{
        type:DELETE,
        payload:taskID
    }
}

export const handleComplete=(ID)=>{return {type:COMPLETE,payload:ID}}

export const handleEdit=(editedTask)=>{return{type:EDIT,payload:editedTask}}