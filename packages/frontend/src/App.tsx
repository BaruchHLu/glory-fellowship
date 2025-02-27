import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatContainer from './components/ChatContainer';

const App: React.FC = () => {
    // State to manage the sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle function to open/close sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    return (
        <div className="flex">
            {/* Sidebar and passing necessary props */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Chat Container */}
            <ChatContainer isSidebarOpen={isSidebarOpen} />
        </div>
    );
};

export default App;
