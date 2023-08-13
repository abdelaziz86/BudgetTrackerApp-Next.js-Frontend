import { IUser } from "@/types/user";
import axios from 'axios';
const API_BASE_URL  = 'http://localhost:3000';

export const signUp = async (signUpData : IUser) => {
  try {
    const response = await axios.post(`http://localhost:3000/auth/signup`, signUpData);
    return response.data;
  } catch (error) {
    throw error;
  }
};