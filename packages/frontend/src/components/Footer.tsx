import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-gray-900 text-white p-4 mt-auto">
            <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-gray-800 p-2 rounded text-white outline-none"
            />
        </footer>
    );
};

export default Footer;
