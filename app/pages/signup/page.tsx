"use client"; 
// pages/user/signup.tsx
import React from 'react';
import UserLayout from '../user/UserLayout';
import { signUp } from '@/apis/user';
import axios from 'axios';

const SignupPage: React.FC = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const signUpData = { name,  email, password };
      console.log(signUpData); 
      const response = await axios.post(`http://localhost:3000/auth/signup`, signUpData);
      return response.data;
      //const response = await signUp(signUpData);
      // Handle successful signup (e.g., set user state, redirect, etc.)
      prompt("Signup success:", response.data) ; 
      console.log('Signup success:', response.data);
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Signup error:', error);
    }
  };

  return (
    <UserLayout>
      <form onSubmit={handleSubmit}>
        <h1 className='font-bold text-lg'>Welcome new user, Sign Up to continue</h1>
        <div className='modal-action'>
          <input  
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Name'
            className='input input-bordered w-full'
          />
          <input  
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type='text'
            placeholder='Surname'
            className='input input-bordered w-full'
          />          
        </div>

        <div className='modal-action'>
          <input  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
            className='input input-bordered w-full'
          />
        </div>

        <div className='modal-action'>
          <input  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='input input-bordered w-full'
          />
          <input  
            type='password'
            placeholder='Repeat Password'
            className='input input-bordered w-full'
          />
        </div>

        <button style={{ marginTop: '20px' }} className="btn btn-primary" type='submit'>
          Sign Up
        </button>
      </form>
    </UserLayout>
  );
};

export default SignupPage;
