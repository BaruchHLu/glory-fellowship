import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ChatWindow from './ChatWindow';
import Footer from './Footer';

interface ChatContainerProps {
    isSidebarOpen: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ isSidebarOpen }) => {
    return (
        <motion.div
            className="flex flex-col min-h-screen transition-all duration-300"
            animate={{
                marginLeft: isSidebarOpen ? 260 : 60, // Moves the container left
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ width: 'calc(100% - 60px)', overflow: 'hidden' }} // Ensures it doesn’t shrink
        >
            <Navbar />
            <ChatWindow />
            <Footer />
        </motion.div>
    );
};

export default ChatContainer;
