import React from 'react'
import { useParams } from 'react-router-dom'
import { GoBack } from '../components/GoBack';

const Editpost = () => {
    const {id} = useParams();
    return (
        <div>
            <GoBack/>
            <h1>Edit post {id}</h1>
        </div>
    )
}

export default Editpost