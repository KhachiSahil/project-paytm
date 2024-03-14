import React from 'react'

function Input({fieldText ,type}) {
  return (
    <div >
      <input className='p-3 my-4 border-2 rounded-md border-cyan-500 focus:border-4' type={type} placeholder={fieldText}/>
    </div>
  )
}

export default Input
