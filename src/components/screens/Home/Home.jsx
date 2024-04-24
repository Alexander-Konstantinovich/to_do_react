import React, { useState } from "react";
import TodoItem from "./item/Todoitem";

const data = [
    {
        _id: 'wef232',
        title:'Finish to essay collaboration',
        isCompleted: false,
    },
    {
        _id: 'dsf233',
        title:'Read next chapter of the book',
        isCompleted: false,
    },
    {
        _id: 'wef234',
        title:'Send the finished assignment',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    return( 
        <div className="text-white w-4/5 mx-auto" >
            <h1 className="text-2xl font-bold text-center mb-11">Todo</h1>
            {todos.map(todo => (
            <TodoItem 
            key={todo._id} 
            todo={todo} 
            changeTodo={changeTodo} 
            removeTodo={removeTodo} />
        ))}
        </div>
    )
}

export default Home