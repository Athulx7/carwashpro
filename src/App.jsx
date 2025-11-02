import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainUserDashboard from './user/container/MainUserDashboard'
import UserLayouts from './Layouts/UserLayouts'
import UserServices from './user/container/UserServices'
import AdminLayouts from './Layouts/AdminLayouts'
import AdminDashboard from './admin/containers/AdminDashboard'
import OwnerLayouts from './Layouts/OwnerLayouts'
import OwnerDashboard from './owner/Containers/OwnerDashboard'
import Centers from './user/container/Centers'
import UserCenterDetails from './user/container/UserCenterDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayouts />}>
          <Route index element={<MainUserDashboard />} />
          <Route path="services" element={<UserServices />} />
          <Route path='centers' element={<Centers />} />
          <Route path='centerDetails' element={<UserCenterDetails />} />
        </Route>

        <Route path="/owner" element={<OwnerLayouts />}>
          <Route index element={<OwnerDashboard />} />
        </Route>

        <Route path="/admin" element={<AdminLayouts />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
