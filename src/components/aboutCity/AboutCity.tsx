import styles from './AboutCity.module.css';

type Props = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    children: React.ReactNode,
    linkToArticle: string
}

const AboutCity: React.FC<Props> = ({ imgSrc, imgAlt, title, children, linkToArticle = "#" }) => {
    return (
        <section className={styles.aboutCity}>
            <img className={styles.aboutCity__img} src={imgSrc} alt={imgAlt} />
            <article className={styles.aboutCity__body}>
                <h2 className={styles.aboutCity__title}>{title}</h2>
                <p className={styles.aboutCity__text}>{children}</p>
                <a className={styles.aboutCity__link} href={linkToArticle}>Читать дальше</a>
            </article>
        </section>
    )
}

export default AboutCity;