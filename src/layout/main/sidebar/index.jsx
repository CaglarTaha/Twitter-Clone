import React from 'react'
import Logo from '../logo/logo'
import Menu from './menu/menu'

export default function Sidebar() {
  return (
    <aside className='w-[275px] min-h-screen px-8'>
    <Logo></Logo>
  <Menu></Menu>
    </aside>
  )
}
