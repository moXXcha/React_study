import React from 'react'
import { Section_h1 } from '../atoms/Section_h1'
import { News_content } from '../atoms/News_content'

export const News = () => {
  return (
    <div>
        <section className="mt-12">
                <Section_h1 text="News"/>
                <div className="py-3.5 border-b border-t">
                    <div className="flex ml-10">
                        <p className="mr-40">2xxx.xx.xx</p>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                </div>
                    <News_content date="2xxx.xx.xx" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
                    <News_content date="2xxx.xx.xx" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
                    <News_content date="2xxx.xx.xx" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
                    <News_content date="2xxx.xx.xx" content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
            </section>
    </div>
  )
}
