import React from 'react'

function Balance({balance}) {
  return (
    <div  className='font-black bg-gradient-to-r from-cyan-300 to-blue-500 p-7 m-3 mt-10 rounded-lg text-2xl text-gray-900'>
      Your Balance : Rs. {balance}
    </div>
  )
}

export default Balance
