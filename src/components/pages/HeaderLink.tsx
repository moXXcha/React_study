import React from 'react'

export const HeaderLink = (props: any) => {
  return (
    <div>
        <a href={props.href} className="px-8">{props.text}</a>
    </div>
  )
}
