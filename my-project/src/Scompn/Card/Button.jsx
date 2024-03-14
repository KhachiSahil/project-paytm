import React from 'react'

function Button({ buttonType }) {
  return (
    <button class=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full my-3">
    {buttonType}
  </button>
  )
}

export default Button
