import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './GallerySlider.module.css';
import { ImagesType } from 'types/interfaces';


type Props = {
    imgs: ImagesType[]
}

const GallerySlider: React.FC<Props> = ({ imgs }) => {
    const swiperParams = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto" as const,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.gallery-custom-pagination',
            clickable: true
        },
        modules: [EffectCoverflow, Pagination]
    };

    const element = imgs.map((el, index) => {
        return (
            <SwiperSlide key={index}>
                <img src={el.orignal} alt='gallery' />
            </SwiperSlide>
        )
    })

    return (
        <div className={styles.slider__container}>
            <Swiper {...swiperParams}>
                {element}
            </Swiper>
            <div className="gallery-custom-pagination"></div>
        </div>
    )
}

export default GallerySlider;