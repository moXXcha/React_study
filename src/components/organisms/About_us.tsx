import React from 'react'
import { Section_h1 } from '../atoms/Section_h1'

export const About_us = () => {
  return (
    <div>
        <section className="mt-12">
                <Section_h1 text="About"/>
                <div className="mt-28 mb-28">
                    <p className="mb-6 text-xs">Xxxxx Ashley</p>
                    <p className="mb-6 text-xs">
                    2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan<br/>
                    tel: 000-0000-0000<br/>
                    url: www.xxxxxx.jp<br/>
                    mail: xxx@xxxxxx.jp
                    </p>
                    <p>プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
            </section>
    </div>
  )
}
