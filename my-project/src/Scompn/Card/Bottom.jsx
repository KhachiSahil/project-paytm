import React from 'react'

function Bottom(text) {
  return (
    <div className='my-2'>
      {text=='login'? (<div>New to Paytm? <a href='#'>Create account</a> </div>):
      (<div className='text-lg'>Already have an account ? <a className='text-lg text-blue-500 font-bold hover:underline' href='#'>Sign In</a> </div>)}
    </div>
  )
}

export default Bottom
