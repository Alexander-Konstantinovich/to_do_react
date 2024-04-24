import React, { useState } from 'react'

const CreateTodoField = ({setTodos}) => {
    const [title, setTtile] = useState('')

    const addTodo = title => {
        setTodos(prev => [
            {
            _id:new Date(),
            title,
            isCompleted: false,
        },
        ...prev
        ])
        setTtile('')
    }


    return(
        <div className='flex items-center justify-between
         mb-4 mt-20 rounded-2xl bg-zinc-800 border-2 px-5 py-3 w-full'>
            <input 
            type='text' 
            onChange={e=> setTtile(e.target.value)}
            value={title}
            onKeyUp={e => e.key === "Enter" && addTodo(title)}
            className='bg-transparent w-full border-none outline-none'
            placeholder='Enter todo' />
        </div>
    )
}

export default CreateTodoField