import { IUser } from "@/types/user";
import axios from 'axios';
const API_BASE_URL  = 'http://localhost:3000';

export const signUp = async (signUpData: IUser) => {
  try {
    console.log('Sending sign-up request:', signUpData);
    const response = await axios.post("http://127.0.0.1:3000/auth/signup", signUpData);
    console.log('Sign-up response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Sign-up error:', error);
    throw error;
  }
};

