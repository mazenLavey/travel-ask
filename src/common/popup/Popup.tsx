import styles from './Popup.module.css';
import ReactDOM from 'react-dom';

interface Props {
    children: React.ReactNode,
    closePopup: () => void
}

const Popup: React.FC<Props> = ({ children, closePopup }) => {
    const portal = typeof document !== "undefined" ? document.querySelector<HTMLDivElement>("#popupPortal") : null;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetType = e.target instanceof HTMLElement ? e.target.dataset.type : null;
        if (targetType === "popup") {
            closePopup();
        }
    }

    if (portal) {
        return ReactDOM.createPortal(
            <div className={`${styles.popup} fadeIn-animation`} data-type="popup" onClick={handleClick}>
                {children}
            </div>,
            portal)
    } else { return null };
};

export default Popup;
