import React from 'react'
import {Link} from 'react-router-dom'

export default function Homepage(){
    return (
        <>
        <Link to='/login'>Login here!</Link>
        <Link to='signup'>Signup here!</Link>
        </>
    )
}