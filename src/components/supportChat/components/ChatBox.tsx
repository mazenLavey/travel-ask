import { useState, useRef, useEffect } from 'react';
import styles from './ChatBox.module.css';
import { ReactComponent as FlagIcon } from 'assets/svg/flag-icon.svg';
import { ReactComponent as StarEmptyIcon } from 'assets/svg/star-empty-icon.svg';
import { ReactComponent as StarFillIcon } from 'assets/svg/star-fill-icon.svg';
import { ReactComponent as SendIcon } from 'assets/svg/send-icon.svg';
import { ReactComponent as EmptyChatIcon } from 'assets/svg/empty-chat-icon.svg';
import { ChatBoxType, ChatDataType, MessagesType } from 'types/interfaces';
import Message from './Message';
import { nanoid } from 'nanoid';

type Props = {
    chatBoxType: ChatBoxType,
    chatData: ChatDataType,
    updateChat: (newMessage: MessagesType) => void
}

const ChatBox: React.FC<Props> = ({ chatBoxType, chatData, updateChat }) => {
    const [messageText, setMessageText] = useState<string>('');
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            const box = chatBodyRef.current;
            box.scrollTo({
                top: box.scrollHeight,
                behavior: 'smooth'
            })
        }
    }, [chatData])

    const messageElements = chatData.messages.map(el => {
        return (
            <Message key={el.id} messagesData={el} adminImg={chatData.adminImg} clinetImg={chatData.clientImg} />
        )
    });

    const getRating = (): JSX.Element[] => {
        let starsCount = chatData.clientRating;

        // make sure that rating between 1 and 5
        if (starsCount > 5) {
            starsCount = 5;
        } else if (starsCount < 1) {
            starsCount = 1;
        }

        const ratingArray = Array(5).fill("fill", 0, starsCount);

        for (let i = 0; i < ratingArray.length; i++) {
            if (ratingArray[i] === undefined) {
                ratingArray[i] = "empty";
            }
        }

        const jsxElements = ratingArray.map((el, index) => {
            if (el === 'fill') {
                return <StarFillIcon key={index} />
            } else {
                return <StarEmptyIcon key={index} />
            }
        })

        return jsxElements;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setMessageText(value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            handleClick();
        }
    }

    const handleClick = (): void => {
        const newMessage: MessagesType = {
            id: nanoid(),
            sender: chatBoxType,
            content: messageText,
            timestamp: new Date().getTime()
        };

        updateChat(newMessage); // send and save message
        setMessageText(''); //empty input box
    }

    return (
        <div className={styles.chatBox}>
            <div className={styles.chatBox__header}>
                <img className={styles.chatBox__receiverImg} src={chatBoxType === 'admin' ? chatData.clientImg : chatData.adminImg} alt="avatar" />
                <div className={styles.chatBox__info}>
                    <h3 className={styles.chatBox__receiverName}>{chatBoxType === 'admin' ? chatData.clientName : chatData.adminName}</h3>
                    <div className={styles.chatBox__receiverInfo}>
                        <FlagIcon />
                        <p>{chatBoxType === "admin" ? chatData.clientSubtext : chatData.adminSubtext}</p>
                    </div>
                </div>
                {
                    chatBoxType === "admin" ?
                        <div className={styles.chatBox__rating}>
                            {getRating()}
                        </div>
                        :
                        null
                }
            </div>
            <div className={`${styles.chatBox__body} ${chatData.messages.length > 0 ? styles.chatBox__body_active : ''}`} ref={chatBodyRef}>
                {chatData.messages.length > 0 ?
                    messageElements
                    :
                    <div className={styles.chatEmpty}>
                        {chatBoxType === "client" ?
                            <>
                                <EmptyChatIcon className={styles.chatEmpty__icon} />
                                <p className={styles.chatEmpty__text}>
                                    Напишите нам, <br />
                                    мы помогаем круглосуточно
                                </p>
                            </>
                            :

                            <p className={styles.chatEmpty__text}>
                                Нет сообщений
                            </p>

                        }
                    </div>
                }
            </div>
            <div className={styles.chatBox__footer}>
                <img className={styles.chatBox__senderImg} src={chatBoxType === 'admin' ? chatData.adminImg : chatData.clientImg} alt="avatar" />
                <input
                    className={styles.chatBox__inputBox}
                    type="text"
                    name='textInput'
                    id='textInput'
                    value={messageText}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Напишите сообщение...'
                />
                <button className={styles.chatBox__sendBtn} onClick={handleClick}>
                    <SendIcon />
                </button>
            </div>
        </div >
    )
}

export default ChatBox;