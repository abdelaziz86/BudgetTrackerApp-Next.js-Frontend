"use client";
// pages/user/signup.tsx
import React from 'react';  
import UserLayout from '../user/UserLayout';

const SignupPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');



  return (
    <UserLayout>
      <form >
        <h1 className='font-bold text-lg'>Welcome new user, Sign Up to continue</h1>
        <div className='modal-action'>
          <input  
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Name'
              className='input input-bordered w-full'
            />
            
          <input  
              onChange={(e) => setSurname(e.target.value)}
              type='text'
              placeholder='Surname'
              className='input input-bordered w-full'
            />          
        </div>

        <div className='modal-action'>
        <input  
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Email'
              className='input input-bordered w-full'
        />
        </div>

        <div className='modal-action'>
        <input  
              onChange={(e) => setPassword(e.target.value)}
              type='text'
              placeholder='Password'
              className='input input-bordered w-full'
        />
        <input  
              type='text'
              placeholder='Repeat Password'
              className='input input-bordered w-full'
        />
        </div>


        <button style={{'marginTop' : "20px"}} className="btn btn-primary"  type='submit'>Sign Up</button>
        </form>
    </UserLayout>
  );
};

export default SignupPage;
