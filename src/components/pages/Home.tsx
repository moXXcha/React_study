import React from 'react'
import { HeaderLink } from './HeaderLink'
import { Section_h1 } from './Section_h1'
import { Works_img } from './Works_img'
import { News_content } from './News_content'
import { Forms } from './Forms'

const Home = () => {
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

      <div>
        <img src="../../img/mainvisual-pc.jpg"/>
      </div>

      <main className="max-w-3xl mx-auto">

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

    </main>

    <footer className="bg-gray-800 w-full h-10">
      <small className=" block text-white text-center block">&copy; 2020 My Work</small>
    </footer>
  </div>
  )
}

export default Home