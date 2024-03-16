import AccUser from "./AccUser"

function User() {
  return (
    <div className="ml-3 mt-">
      <p className= "my-7 text-4xl mr-7 my-2 font-mono font-black text-gray-700" >Users</p>
      <input className=' w-1/2 p-3 my-7 border-2 rounded-md border-cyan-500 focus:border-4' type ='text' placeholder="Search users..."/>     
      <AccUser/>
      <AccUser/>
      <AccUser/>
    </div>
  )
}

export default User
