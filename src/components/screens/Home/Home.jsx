import React from "react";
import TodoItem from "./item/Todoitem";

const todos =[
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
    return( 
        <div className="text-white w-4/5 mx-auto" >
            <h1 className="text-2xl font-bold text-center mb-11">Todo</h1>
            {todos.map(item => (
            <TodoItem key={item._id} item={item} />
        ))}
        </div>
    )
}

export default Home