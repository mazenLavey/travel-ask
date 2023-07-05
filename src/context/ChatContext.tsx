import { createContext, useState, useEffect } from "react";
import { ChatDataType, MessagesType } from "types/interfaces";

type Props = {
    children: React.ReactNode
}

interface ChatContextType {
    chatData: ChatDataType,
    updateChat: (newMessage: MessagesType) => void
}

const ChatContext = createContext<ChatContextType>({
    chatData: {
        adminName: "Администратор",
        adminSubtext: "TravelAsk",
        adminImg: "./images/admin-avatar.png",
        clientName: "Наталия Полянская",
        clientImg: "./images/client-avatar.png",
        clientSubtext: "Гид по Баварии, фотограф",
        clientRating: 4,
        messages: []
    },
    updateChat: (newMessage) => { }
});

const ChatProvider: React.FC<Props> = ({ children }) => {
    const [chatData, setChatData] = useState<ChatDataType>({
        adminName: "Администратор",
        adminSubtext: "TravelAsk",
        adminImg: "./images/admin-avatar.png",
        clientName: "Наталия Полянская",
        clientImg: "./images/client-avatar.png",
        clientSubtext: "Гид по Баварии, фотограф",
        clientRating: 4,
        messages: []
    })

    useEffect(() => {
        const getChat = () => {
            const chatDataFromStorage = window.localStorage.getItem('travelAskChat');
            if (chatDataFromStorage !== null) {
                setChatData(JSON.parse(chatDataFromStorage));
            }
        };

        getChat();
    }, [])

    useEffect(() => {
        const saveChat = (): void => {
            if (chatData.messages.length > 0) {
                window.localStorage.setItem('travelAskChat', JSON.stringify(chatData))
            }
        };

        saveChat();
    }, [chatData])

    const updateChat = (newMessage: MessagesType): void => {
        const updateMessages = [...chatData.messages, newMessage];
        setChatData(prev => {
            return {
                ...prev,
                messages: updateMessages
            }
        })
    }

    return (
        <ChatContext.Provider value={{ chatData, updateChat }}>
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }