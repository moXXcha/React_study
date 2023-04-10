import React from 'react'

export const News_content = (props: any) => {
  return (
    <div className="py-3.5 border-b">
        <div className="ml-10 flex">
            <p className="mr-40">{props.date}</p>
            <p>{props.content}</p>
        </div>
    </div>
  )
}
