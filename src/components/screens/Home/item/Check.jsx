import React from 'react'
import { FaCheck } from "react-icons/fa6";
import cn from 'classnames'

const Check = ({isCompleted}) => {
    return(
        <button className={cn('border-2 rounded-lg border-pink-400 w-5 h-5 mr-3 flex items-center justify-center', {
            'bg-pink-400': isCompleted,
        })}>
        {isCompleted && <FaCheck size={24} 
            className='text-gray-900' />
        }
        </button>
    )
}

export default Check