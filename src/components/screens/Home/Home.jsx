import React from "react";
import TodoItem from "./Todoitem";

const todos =[
    {
        title:'Finish to essay collaboration',
        isCompleted: false,
        _id: 'wef232',
    },{
        title:'Read next chapter of the book',
        isCompleted: false,
        _id: 'dsf233',
    },{
        title:'Send the finished assignment',
        isCompleted: false,
        _id: 'wef234',
    },
]

const Home = ()=>{
    return( <div className="bg-gray-900 h-screen text-white" >

        {todos.map(item => (
        <TodoItem key={item._id} item={item} />
        ))}
    </div>
    )
}

export default Home