import ReviewCard from "./components/ReviewCard";
import reviewsData from 'data/reviews.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useMedia from "hooks/useMedia";
import styles from './CityReviews.module.css';

const CityReviews: React.FC = () => {
    const { isMobileScreen, isTabletScreen } = useMedia();

    const getReviews = () => {
        const elements = reviewsData.map((el, index) => {
            return (
                <SwiperSlide key={index}>
                    <ReviewCard data={el} />
                </SwiperSlide>
            )
        });
        return elements;
    }

    const swiperParams = {
        spaceBetween: 20,
        slidesPerView: isMobileScreen ? 1 : isTabletScreen ? 1.6 : 2.7,
        modules: [Pagination],
        pagination: {
            el: '.reviews-custom-pagination',
            clickable: true
        },
        loop: true
    };

    return (
        <section className={styles.cityReviews}>
            <h2 className={styles.cityReviews__title}>Отзывы о Барселоне</h2>
            <div className={styles.cityReviews__slider}>
                <Swiper {...swiperParams}>
                    {getReviews()}
                </Swiper>
            </div>
            <div className={styles.cityReviews__controls}>
                <button className={styles.cityReviews__allReviewsBtn}>Все отзывы</button>
                <div className="reviews-custom-pagination"></div>
            </div>
        </section>
    )
}

export default CityReviews;