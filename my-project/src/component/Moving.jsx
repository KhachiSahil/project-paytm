import Input from "../Scompn/Card/Input"
import Button from "../Scompn/Card/Button"
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Moving() {
    const navigate = useNavigate();
    const[userName,setUsername] = useState('');
  const[password,setPassword] = useState('');

  const handlEmail = (e) =>{
    setUsername(e.target.value)
  }

  const handlPassword = (e) =>{
    setPassword(e.target.value)
  }
  return (
    <div>
      <Input type={'text'} onChange={handlEmail} value={userName} fieldText={'Email'} />
        <Input type={'password'} onChange={handlPassword} value={password} fieldText={'Password'} />
        <Button buttonType={'Pay Securely'} onClick={async () => {
        try {
          const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
            userName,
            password
          });
          localStorage.setItem("token", response.data.token)
          navigate("/dashboard")
        } catch (err) {
          console.log(err)
        }
      }}/>
    </div>
  )
}

export default Moving
