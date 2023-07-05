import { useContext } from 'react';
import ChatBox from "./components/ChatBox";
import styles from './SupportChat.module.css';
import { ChatContext } from "context/ChatContext";

const SupportChat: React.FC = () => {
    const { chatData, updateChat } = useContext(ChatContext);

    return (
        <section className={styles.wrapper}>
            <div>
                <h2>Чат с пользователем</h2>
                <ChatBox chatBoxType="admin" chatData={chatData} updateChat={updateChat} />
            </div>
            <div>
                <h2>Чат с администратором</h2>
                <ChatBox chatBoxType="client" chatData={chatData} updateChat={updateChat} />
            </div>
        </section>
    )
}

export default SupportChat;