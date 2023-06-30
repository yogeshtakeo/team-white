import React from 'react'

interface IProps{
  children?: string
}

function button(props: IProps) {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  )
}

export default button