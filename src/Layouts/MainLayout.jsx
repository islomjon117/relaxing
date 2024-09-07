import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/navbar/Navbar'
import Footer from '../Components/footer/Footer'

const MainLayout = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainLayout