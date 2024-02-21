import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from './righthbar'

export default function MainLayout({children}) {
  return (
    <div className='w-[1265px] mx-auto flex'>
        <Sidebar></Sidebar>
        <main className='flex-1 flex gap-[30px]'>
        <main className='flex-1 border-x border-[#2f3336] max-w-[578px]'>
        <Outlet></Outlet>
        </main>
    <RightBar></RightBar>
        </main>
    </div>
  )
}
