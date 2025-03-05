import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icons here

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void; // Event handler passed from parent (ChatWindow)
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <motion.aside
            className="h-screen bg-gray-900 text-white fixed top-0 left-0 transition-all duration-300 flex flex-col"
            initial={{ width: 256 }}
            animate={{ width: isOpen ? 256 : 60 }}
        >
            {/* Sidebar Header */}
            <div className="h-16 flex items-center justify-between px-4">
                {isOpen && (
                    <span className="text-lg font-semibold">
                        Glory Fellowship
                    </span>
                )}
                <button onClick={toggleSidebar} className="p-2">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
