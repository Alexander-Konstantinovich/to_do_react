import React from 'react';
import Check from "./Check";

const TodoItem = ({item}) => {
    return(
        <div className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
        <Check />
            {item.title}
        </div>
    )
}

export default TodoItem