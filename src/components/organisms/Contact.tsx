import React from 'react'
import { Section_h1 } from '../atoms/Section_h1'
import { Forms } from '../atoms/Forms'

export const Contact = () => {
  return (
    <div>
        <section className="mt-12">
                <Section_h1 text="Contact"/>
                <form className="w-full ">
                    <Forms text="Name"/>
                    <Forms text="E-mail"/>
                    <div className="flex mb-10">
                        <p className="w-1/5">Content</p> <input type="text" className=" block w-4/5 border-2 rounded h-24"/>
                    </div>
                    <div className="flex">
                        <button className="text-white mx-auto w-48 h-16 bg-gray-800 mb-12">送信</button>
                    </div>
                </form>
            </section>
    </div>
  )
}
