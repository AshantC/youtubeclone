import React from 'react'

const ButtonList = () => {
  const buttonList = ["Python", "JavaScript", "React","Music", "Trending", "Movies", "Latest", "Gaming", "Composting"];
  return (
    <div className='container flex gap-4 bg-white font-medium text-sm rounded py-2'>
      <button className='bg-black px-3 py-1 rounded-md text-white'>All</button>
      {
        buttonList.map((item, index)=>{
          return(
            <button key={index} className='bg-gray-100 px-3 py-1 rounded-md'>{item}</button>
          )
        })
      }
    </div>
  )
}

export default ButtonList
