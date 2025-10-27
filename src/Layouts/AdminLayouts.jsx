import React from 'react'
import HeaderAdmin from '../HeaderFooter/HeaderAdmin'
import { Outlet } from 'react-router-dom'
import Footer from '../HeaderFooter/Footer'

function AdminLayouts() {
    return (
        <div>
            <HeaderAdmin />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AdminLayouts
