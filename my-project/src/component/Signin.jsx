import React from 'react';
import Heading from '../Scompn/Card/Heading';
import Input from '../Scompn/Card/Input';
import Button from '../Scompn/Card/Button';
import Bottom from '../Scompn/Card/Bottom';

function Signin() {
  return (
    <div className='flex flex-row'>
      <div className='object-contain w-1/2'>
        <img src='https://yt3.googleusercontent.com/5OqL88exM25Ew26whWDOgJwJ1I67kiCZr9TVxwT_2CVK-rxKH4qmL5peq72WgSMw6i_7znsI3Q=s900-c-k-c0x00ffffff-no-rj' alt="Sign In" />
      </div>

      <div className='w-1/2 flex flex-col justify-center items-center p-8 animate-fade-right animate-duration-1000 animate-delay-100  0 animate-ease-out'>
        <Heading text={'Sign In'} />
        <p className="font-mono font-medium font-extrabold text-cyan-500 text-2xl mb-3 mr-11">Happy Payments</p>
        <Input type={'text'} fieldText={'Email'} />
        <Input type={'password'} fieldText={'Password'} />
        <Button buttonType={'Pay Securely'} />
        <Bottom />
      </div>
    </div>
  );
}

export default Signin;
