import React from 'react'

export const Forms = (props: any) => {
  return (
    <div className="flex mb-10">
        <p className="w-1/5">{props.text}</p>
        <input type="text" className="w-4/5 border-2 rounded"/>
    </div>
  )
}
