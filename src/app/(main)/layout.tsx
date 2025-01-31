import React from 'react'
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'An example of a Next.js project with the App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">My App</h1>
        </header>
        <main className="p-8">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
