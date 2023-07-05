import { useState } from 'react';
import { ReviewCardType } from 'types/interfaces';
import { ReactComponent as LikesIcon } from 'assets/svg/likes-icon.svg';
import useToggle from 'hooks/useToggle';
import getMoment from 'utils/getMoment';
import Popup from 'common/popup/Popup';
import styles from './ReviewCard.module.css';
import GallerySlider from 'common/gallerySlider/GallerySlider';

type Props = {
    data: ReviewCardType
}

const ReviewCard: React.FC<Props> = ({ data }) => {
    const { on, onToggle } = useToggle(false);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const timeAgo = getMoment(data.creationDate);

    const handlePopup = (): void => {
        setShowPopup(prev => !prev)
    }

    const renderGallery = () => {
        const imgCount: number = data.images.length;
        const imgToRender = data.images.slice(0, 4);
        const galleryElements = imgToRender?.map((el, index) => {
            if (index === 3) {
                return (
                    <div key={index} className={styles.reviewCard__imgs} onClick={handlePopup}>
                        <img src={el.small} alt={data.title} />
                        <span>+{imgCount}</span>
                    </div>
                )
            } else {
                return (
                    <div key={index} className={styles.reviewCard__imgs} onClick={handlePopup}>
                        <img src={el.small} alt={data.title} />
                    </div>
                )
            }
        });
        return galleryElements;
    }

    return (
        <>
            <div className={styles.reviewCard}>
                <div className={styles.reviewCard__header}>
                    <img className={styles.reviewCard__authorImg} src={data.authorImg} alt={data.authorname} />
                    <p className={styles.reviewCard__authorname}>{data.authorname}</p>
                </div>
                <div className={styles.reviewCard__body}>
                    <h3 className={styles.reviewCard__title}>
                        <span className={styles.reviewCard__title_colored}>{data.title.split(' ')[0]}</span>
                        {' '}
                        {data.title.split(' ').slice(1,).join(' ')}
                    </h3>
                    <p className={styles.reviewCard__text}>{data.text}</p>
                </div>
                <div className={styles.reviewCard__gallery}>
                    {renderGallery()}
                </div>
                <div className={styles.reviewCard__interaction}>
                    <span className={styles.reviewCard__date}>{timeAgo}</span>
                    <span className={styles.reviewCard__comments}>{data.comments > 0 ? `${data.comments} комментариев` : `${data.comments} комментария`}</span>
                    <span className={styles.reviewCard__likes} onClick={onToggle}>
                        <LikesIcon className={on ? styles.reviewCard__likes_clicked : ''} />
                        {data.likes}
                    </span>
                </div>
            </div>
            {showPopup ?
                <Popup closePopup={handlePopup}>
                    <GallerySlider imgs={data.images} />
                </Popup>
                :
                null
            }
        </>
    )
}

export default ReviewCard;