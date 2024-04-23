import React from 'react';
import Check from "./Check";
import cn from 'classnames'


const TodoItem = ({item, changeTodo}) => {
    return(
        <button
         className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full' onClick={()=>changeTodo(item._id)}>
        <Check isCompleted={item.isCompleted}/>
            <span className={cn({
                'line-through': item.isCompleted
            })}>{item.title}</span>
        </button>
    )
}

export default TodoItem