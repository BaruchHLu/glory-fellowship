import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ChatWindow from './ChatWindow';
import Footer from './Footer';

interface ChatContainerProps {
    isSidebarOpen: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ isSidebarOpen }) => {
    return (
        <motion.main
            className="flex-1 bg-gray-100 p-4 transition-all duration-300 ease-in-out"
            style={{
                marginLeft: isSidebarOpen ? '256px' : '0', // Adjust width based on sidebar state
            }}
        >
            <Navbar />
            <ChatWindow />
            <Footer />
        </motion.main>
    );
};

export default ChatContainer;
