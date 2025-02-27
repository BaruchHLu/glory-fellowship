import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icons here

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void; // Event handler passed from parent (ChatWindow)
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Sidebar Toggle Button */}
            <button
                className="absolute top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded md:block"
                onClick={toggleSidebar} // Using the toggle function passed as a prop
            >
                {isOpen ? (
                    <X size={24} /> // 'X' icon when sidebar is open
                ) : (
                    <Menu size={24} /> // 'Menu' icon when sidebar is closed
                )}
            </button>

            <motion.aside
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300`}
                initial={{ width: 0 }}
                animate={{ width: isOpen ? 256 : 0 }} // Control the sidebar width
                exit={{ width: 0 }}
                style={{ zIndex: 1000 }}
            >
                {/* Sidebar content */}
                <div className="p-4">
                    <h2 className="text-xl">Glory Fellowship</h2>
                    <button onClick={toggleSidebar}>Toggle Sidebar</button>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
