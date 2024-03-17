import React from 'react'
import  {Link} from 'react-router-dom'

function Bottom({text}) {
  return (
    <div className='my-2'>
      {text=='login'? (<div className='text-lg'>New to Paytm? <Link className='text-lg text-blue-500 font-bold hover:underline' to="/Signup">Create account</Link> </div>):
      (<div className='text-lg'>Already have an account ? <Link className='text-lg text-blue-500 font-bold hover:underline' to='/'>Sign In</Link> </div>)}
    </div>
  )
}

export default Bottom
