import { useState } from 'react';
import Heading from '../Scompn/Card/Heading';
import Input from '../Scompn/Card/Input';
import Button from '../Scompn/Card/Button';
import Bottom from '../Scompn/Card/Bottom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex flex-row'>
      <div className='object-contain w-1/2'>
        <img src='https://yt3.googleusercontent.com/5OqL88exM25Ew26whWDOgJwJ1I67kiCZr9TVxwT_2CVK-rxKH4qmL5peq72WgSMw6i_7znsI3Q=s900-c-k-c0x00ffffff-no-rj' alt="Sign In" />
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center p-8 animate-fade-right animate-duration-1000 animate-delay-100  0 animate-ease-out'>
        <Heading text={'Sign Up'} />
        <p className="font-mono font-medium font-extrabold text-cyan-500 text-2xl mb-3 mr-11">Happy Payments</p>
        <Input type={'text'}
          onChange={(e) => { setFirstName(e.target.value) }}
          fieldText={'Firstname'} />
        <Input type={'text'}
          onChange={(e) => { setLastName(e.target.value) }}
          fieldText={'Lastname'} />   
        <Input type={'text'}
          onChange={(e) => { setUsername(e.target.value) }}
          fieldText={'Email'} />
        <Input type={'password'}
          onChange={(e) => { setPassword(e.target.value) }}
          fieldText={'Password'} />
        <Button
          onClick={async()=>{
            try{
              const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                userName,
                password,
                firstName,
                lastName
              })
                console.log(response.data.message)
                localStorage.setItem('token',response.data.token)
                navigate('/Dashboard')
            } catch(err){
              console.log(err)
            }
            }}
          buttonType={'Pay Securely'} />
        <Bottom text={'Signup'} />
      </div>
    </div>
  );
}



