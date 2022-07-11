import React from 'react'
import $ from 'jquery'

const Todo = ({ text, deleteHandler, id, completed, completeHandler }) => {
    const checkedStyle = (e) => {
        if (e.target.style.textDecoration == 'line-through') {           
            e.target.style.textDecoration = 'none'
            e.target.style.color = 'black'
        } else {
            e.target.style.textDecoration = 'line-through'
            e.target.style.color = 'gray'
        }
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <div onClick={() => completeHandler(id)} className='todo-item my-2'>
                    <div className='w-100' onClick={checkedStyle}>
                        <li className='me-auto'>
                            {text}
                        </li>
                    </div>
                </div>
                <div onClick={() => deleteHandler(id)}><i className="fa-solid fa-xmark delete fa-lg"></i></div>
            </div>
        </>
    )
}

export default Todo;