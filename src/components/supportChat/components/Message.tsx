import { MessagesType } from 'types/interfaces';
import styles from './Message.module.css';
import getMoment from 'utils/getMoment';

type Props = {
    messagesData: MessagesType,
    adminImg: string,
    clinetImg: string,
}

const Message: React.FC<Props> = ({ messagesData, adminImg, clinetImg }) => {
    const time = getMoment(messagesData.timestamp)
    return (
        <div className={`${styles.message} ${messagesData.sender === "admin" ? styles.message_colored : ''} fadeIn-animation`}>
            <img className={styles.message__img} src={messagesData.sender === "client" ? clinetImg : adminImg} alt="avatar" />
            <div className={styles.message__body}>
                <p className={styles.message__text}>{messagesData.content}</p>
                <span className={styles.message__time}>{time}</span>
            </div>
        </div>
    )
}

export default Message;