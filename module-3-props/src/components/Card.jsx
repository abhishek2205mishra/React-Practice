import React from 'react'

const Card = (props) => {

    // console.log(props.user,props.age);


    return (
        <div className='parent'>
            <div className="card">
                <img src={props.img} alt='Profile pic'></img>
                <h1>{props.user}</h1>
                <h2> Age - {props.age}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View profile</button>
            </div>
        </div>
    )
}

export default Card
