import React from 'react'

const Description = (props) => {
  return (
   <p className={`max-w-[1109px] lg:text-[22px] md:text-lg !leading-[174%] text-base text-black`}>{props.title}</p>
  )
}

export default Description