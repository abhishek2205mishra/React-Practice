import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const param = useParams()
    console.log(param.Courseid);


    return (
        <div>
            <h1> {param.Courseid} All Courses</h1>
        </div>
    )
}

export default CourseDetail
