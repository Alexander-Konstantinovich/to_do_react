import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Check = ({isCompleted}) => {
    return(
        <button className='border-2 rounded-lg border-pink-400 w-5 h-5 mr-3'>
        {isCompleted && <FaCheck size={24} 
            className='text-gray-900' />
        }
        </button>
    )
}

export default Check