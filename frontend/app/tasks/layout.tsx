'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Access localStorage only on the client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Set authentication status based on token presence
      setLoading(false); // Once we know whether the user is authenticated or not, stop loading
    }
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/'); // Redirect to home if not authenticated
    }
  }, [isAuthenticated, loading, router]);

  const handleLogout = () =>{
    localStorage.clear();
    window.location.reload();
  }

  // Show a loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>; // Optionally, you can replace this with a loading spinner
  }

  // Render children only if authenticated
  return <>{isAuthenticated ? <>
  <button onClick={handleLogout} className='px-4 py-2 bg-red-500 text-white rounded absolute right-[8%]'>Logout</button>
  {children}
  </> : null}</>;
}
