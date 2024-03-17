import React from 'react'

function Input({fieldText ,type, value ,onChange}) {
  return (
    <div >
      <input className='p-3 my-4 border-2 rounded-md border-cyan-500 focus:border-4' value={value} onChange={onChange} type={type} placeholder={fieldText}/>
    </div>
  )
}
 
export default Input
