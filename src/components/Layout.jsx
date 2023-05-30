import React from 'react'
import { Outlet } from 'react-router-dom'
import { CustonLink } from './CustonLink'
const Layout = () => {
    return (
        <>
            <header>
                <CustonLink to="/" >home</CustonLink>
                <CustonLink to="blog">blog</CustonLink>
                <CustonLink to="about">about</CustonLink>
            </header>
            <main className="container">
                <Outlet />
            </main>
            <footer className='container'>2023</footer>
        </>
    )
}

export default Layout

