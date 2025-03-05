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
            className="flex flex-col min-h-screen transition-all duration-300"
            style={{
                marginLeft: isSidebarOpen ? 256 : 60,
                width: isSidebarOpen ? "calc(100% - 256px)" : "calc(100% - 60px)",
            }}
        >
            <Navbar />
            <ChatWindow />
            <Footer />
        </motion.main>
    );
};

export default ChatContainer;
