import React from 'react'
import { HeaderLink } from '../atoms/HeaderLink'

export const Header = () => {
  return (
    <div>
        <header className="flex bg-[#f5f4f1] h-32">
      <h1 className="w-1/2 text-center text-2xl mx-0 my-auto">My Work</h1>
      <nav className ="flex ml-20 my-auto">
        <HeaderLink href="/about" text="About"/>
        <HeaderLink href="/contact" text="Contact"/>
        <HeaderLink href="/Hogehoge" text="hoge"/>
        <HeaderLink href="/Hogehoge" text="hoge"/>
      </nav>
    </header>
    </div>
  )
}
