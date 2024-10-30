import React from 'react'

 const WorkingArea = ({title, sub}) => {
  return (
    <div className="flex flex-col items-center space-x-2">
  <span className="text-4xl animate-bounce  duration-200">👷‍♂️</span>
<p className="text-2xl font-bold text-yellow-200 transition-transform duration-300  ">
    {title}</p>
<p className="text-lg text-gray-500 transition-transform duration-300 hover:-translate-y-1">
      {sub}</p>
</div>
  )
}

export default WorkingArea;