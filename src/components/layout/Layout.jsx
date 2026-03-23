import React from 'react';
import Navbar from './Navbar';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen text-white font-sans selection:bg-primary selection:text-white relative">
            <Background />
            <Navbar />
            <main className="relative z-10 overflow-hidden">
                {children}
            </main>
            <footer className="relative z-10 py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Chiara Marie C. Canque. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
