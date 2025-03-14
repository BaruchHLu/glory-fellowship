import React from 'react';

const ChatWindow: React.FC = () => {
    return (
        <div className="flex-grow p-4 overflow-auto bg-gray-100">
            <div className="space-y-4">
                <div className="flex items-center">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        A
                    </div>
                    <div className="ml-4 text-lg">Assistant</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p>Hello! How can I assist you today?</p>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
