'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signup, login } from '../api/authService';

interface AuthFormProps {
  mode: 'signup' | 'login';
}

const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = mode === 'signup' ? await signup(email, password) : await login(email, password);
      if (mode === 'login') {
        router.push('/tasks'); // Redirect to tasks page
      } else {
        alert("Please Go to Login");
        setEmail('');
        setPassword('');
         // For signup, show message
      }
    } catch (error: any) {
      alert(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md text-black">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        {mode === 'signup' ? 'Sign Up' : 'Log In'}
      </button>
    </form>
  );
};

export default AuthForm;
