import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-blue-800 text-white p-4 mt-4">
            <input
                type="text"
                className="w-full p-2 rounded-lg"
                placeholder="Type a message..."
            />
        </div>
    );
};

export default Footer;
