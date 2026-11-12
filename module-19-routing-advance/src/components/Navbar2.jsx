import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

    let navigate = useNavigate()


    return (
        <div className='py-2 px-5 bg-cyan-600 '>
            <button onClick={() => {
                navigate('/')
            }} className='bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to home page</button>

            <button onClick={() => {
                navigate(-1)
            }} className='bg-emerald-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back Page</button>

            <button onClick={() => {
                navigate(+1)
            }} className='bg-purple-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next Page</button>
        </div>
    )
}

export default Navbar2
