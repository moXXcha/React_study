import React from 'react'

export const Works_img = (props: any) => {
  return (
    <div className="w-64 p-4">
        <a href={props.href}><img src={props.src}/></a>
    </div>
  )
}
