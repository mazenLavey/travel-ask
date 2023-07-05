import { ReviewCardType } from 'types/interfaces';
import styles from './ReviewCard.module.css';
import { ReactComponent as LikesIcon } from 'assets/svg/likes-icon.svg';
import useToggle from 'hooks/useToggle';
import getMoment from 'utils/getMoment';

const ReviewCard: React.FC<ReviewCardType> = ({ authorImg, authorname, title, text, creationDate, comments, likes }) => {
    const { on, onToggle } = useToggle(false);
    const timeAgo = getMoment(creationDate);

    return (
        <div className={styles.reviewCard}>
            <div className={styles.reviewCard__header}>
                <img className={styles.reviewCard__authorImg} src={authorImg} alt={authorname} />
                <p className={styles.reviewCard__authorname}>{authorname}</p>
            </div>

            <div className={styles.reviewCard__body}>
                <h3 className={styles.reviewCard__title}>
                    <span className={styles.reviewCard__title_colored}>{title.split(' ')[0]}</span>
                    {' '}
                    {title.split(' ').slice(1,).join(' ')}
                </h3>
                <p className={styles.reviewCard__text}>{text}</p>
            </div>

            <div className={styles.reviewCard__gallery}></div>

            <div className={styles.reviewCard__interaction}>
                <span className={styles.reviewCard__date}>{timeAgo}</span>
                <span className={styles.reviewCard__comments}>{comments > 0 ? `${comments} комментариев` : `${comments} комментария`}</span>
                <span className={styles.reviewCard__likes} onClick={onToggle}>
                    <LikesIcon className={on ? styles.reviewCard__likes_clicked : ''} />
                    {likes}
                </span>
            </div>
        </div>
    )
}

export default ReviewCard;