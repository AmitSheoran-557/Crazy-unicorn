import React from 'react'

const CustomHeading = (props) => {
  return (
    <h2 className={`xl:text-[70px] lg:text-6xl md:text-5xl text-4xl !leading-[115%] ${props.className}`}>{props.title}</h2>
  )
}

export default CustomHeading