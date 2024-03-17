import AccUser from "./AccUser"
import { useState,useEffect } from "react";
import axios from 'axios'

function User() {
  const[user,setUser] = useState('')
  const[data,setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${user}`);
        setData(response.data.user || []); 
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    if (user !== '') {
      fetchData();
    }
  }, [user]);

  return (
    <div className="ml-3 mt-">
      <p className= "my-7 text-4xl mr-7 my-2 font-mono font-black text-gray-700" >Users</p>
      <input className=' w-1/2 p-3 my-7 border-2 rounded-md border-cyan-500 focus:border-4' value={user} type ='text' placeholder="Search users..."
      onChange={(e)=>{
        setUser(e.target.value);
      }}
      />     
      <div>
      {data.map(user => <AccUser userName={user} key={user.userId} />)}
      </div>
      
      
    </div>
  )
}

export default User
