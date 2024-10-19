'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AuthForm from './components/AuthForm';

const Home = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we're running on the client-side before accessing localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Set the authentication state based on the presence of a token
    }
    setLoading(false);
  }, []);

  if (loading) return <div className='flex flex-col w-full h-screen justify-center items-center'>Loading...</div>

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      { isAuthenticated ?
      <>
      <h1 className='text-3xl mb-5'>Welcome to the Home Page</h1>
      <Link href="/tasks">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Go to Tasks
        </button>
      </Link>
      </>
      :
      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-3 flex justify-center">
          {isLoginMode ? 'Log In' : 'Sign Up'}
        </h2>
        <AuthForm mode={isLoginMode ? 'login' : 'signup'} />
        <button
          onClick={() => setIsLoginMode(!isLoginMode)} // Toggle mode
          className="mt-4 text-blue-500 underline"
        >
          Switch to {isLoginMode ? 'Sign Up' : 'Log In'}
        </button>
      </div>}
    </div>
  );
};

export default Home;
