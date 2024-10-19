import axiosInstance from './axiosInstance';

// Function for user signup
export const signup = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/signup', {
    email,
    password,
  });
  return response.data;
};

// Function for user login
export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post('/auth/signin', {
    email,
    password,
  });

  // Set the token if login is successful
  if (response.data.accessToken) {
    localStorage.setItem('token', response.data.accessToken);
  }

  return response.data;
};