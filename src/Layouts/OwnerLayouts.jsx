import React from 'react'
import HeaderOwner from '../HeaderFooter/HeaderOwner'
import { Outlet } from 'react-router-dom'
import Footer from '../HeaderFooter/Footer'

function OwnerLayouts() {
    return (
        <div>
            <HeaderOwner />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default OwnerLayouts
