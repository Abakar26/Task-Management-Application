import './globals.css';
import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Task Management App',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}