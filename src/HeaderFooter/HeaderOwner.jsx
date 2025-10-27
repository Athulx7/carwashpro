import React from 'react'
import { Link } from 'react-router-dom'

function HeaderOwner() {
    return (
        <div className='flex justify-between items-center py-4 px-24 bg-white w-full'>
            <div className='flex'>
                <h1 className='text-2xl font-bold text-blue-600'>CarWash Pro</h1>
                <div className='bg-green-500 text-green-400 rounded-xl px-3 py-2'>
                    Owner Panel
                </div>
            </div>

            <div className='flex items-center space-x-10'>
                <Link to={'/'} className='text-lg hover:text-blue-600 '>
                    Back to Site
                </Link>

                <Link to={''} className='text-lg bg-blue-600 text-white px-6 py-2 rounded-4xl hover:bg-blue-700 '>
                    D
                </Link>
            </div>
        </div>
    )
}

export default HeaderOwner
