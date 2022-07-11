import React from 'react'
import Todo from './Todo'
import Filter from './Filter'

const TodoList = ({todos, key, deleteHandler, completeHandler, completed , statusHandler, filteredItems}) => {
    return (
        <>
            <div className="col-lg-6 mx-auto">           
                <p className={`text-white text-center mt-4 ${todos.length>0 ? "d-none" : "d-block"}`}>You do not have any items yet!</p>
                <ul className='todo-list'>
                    {filteredItems.map(el => <Todo key={el.id} id={el.id} text={el.text} deleteHandler={deleteHandler} completed={completed} completeHandler={completeHandler}/>)}
                    <Filter statusHandler={statusHandler}/>
                </ul>
            </div>

        </>
    )
}

export default TodoList