import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderUser from '../HeaderFooter/HeaderUser'
import Footer from '../HeaderFooter/Footer'

function UserLayouts() {
    return (
        <div>
            <HeaderUser />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default UserLayouts
