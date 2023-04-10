import React from 'react'
import { About_us } from '../organisms/About_us'
import { Visu } from '../organisms/Visu' 
import { Works } from '../organisms/Works'
import { News } from '../organisms/News'
import { Contact } from '../organisms/Contact'

export const Content = () => {
  return (
    <div>
        <Visu/>
        <main className="max-w-3xl mx-auto">

            <About_us/>

            <Works/>

            <News/>

            <Contact/>

        </main>
    </div>
  )
}
