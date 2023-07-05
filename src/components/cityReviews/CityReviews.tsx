import ReviewCard from "./components/ReviewCard";
import styles from './CityReviews.module.css';
import data from 'data/reviews.json';

const CityReviews: React.FC = () => {
    const elements = data.map((el, index) => {
        return (
            <ReviewCard
                key={index}
                authorname={el.authorname}
                authorImg={el.authorImg}
                text={el.text}
                title={el.title}
                creationDate={el.creationDate}
                comments={el.comments}
                likes={el.likes}
            />
        )
    })
    return (
        <section className={styles.cityReviews}>
            <h2 className={styles.cityReviews__title}>Отзывы о Барселоне</h2>
            <div>
                {elements}
            </div>
            <div className={styles.cityReviews__controls}>
                <button className={styles.cityReviews__allReviewsBtn}>Все отзывы</button>
            </div>
        </section>
    )
}

export default CityReviews;