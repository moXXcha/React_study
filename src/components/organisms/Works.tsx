import React from 'react'
import { Section_h1 } from '../atoms/Section_h1'
import { Works_img } from '../atoms/Works_img'

export const Works = () => {
  return (
    <div>
        <section className="mt-12">
                <Section_h1 text="Works"/>
                <div className="w-full flex flex-wrap">
                    <Works_img href="" src="../../img/works1.jpg"/>
                    <Works_img href="" src="../../img/works2.jpg"/>
                    <Works_img href="" src="../../img/works3.jpg"/>
                    <Works_img href="" src="../../img/works4.jpg"/>
                    <Works_img href="" src="../../img/works5.jpg"/>
                    <Works_img href="" src="../../img/works6.jpg"/>
                </div>
            </section>
    </div>
  )
}
