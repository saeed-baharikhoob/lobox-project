import {useState} from 'react';
import styles from './imageSlider.module.scss';
import {arrowLeftIcon, arrowRightIcon,loadingWhite,loadingPurple} from "@assets/icons.tsx";
interface ImageSliderProps {
    images: string[];
}

const ImageSlider = ({images}: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };


    const nextImage = () => {
        setIsLoading(true)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIsLoading(true)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles["imageSlider"]}>
            {images.length > 1 && currentIndex < (images.length - 1) &&
                <div className={`${styles["imageSlider__button"]} ${styles["imageSlider__button--right"]}`}
                     onClick={nextImage}>
                    {arrowRightIcon}
                </div>}
            <figure>

                {isLoading && <div className={styles["imageSlider__loading"]}>{currentIndex === 0  ?loadingPurple : loadingWhite}</div>}
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} fetchpriority="high" loading="lazy" onLoad={handleImageLoad}  style={{ height: '100%' }}/>
            </figure>
            {images.length > 1 && currentIndex > 0 &&
                <div className={`${styles["imageSlider__button"]}  `} onClick={prevImage}>
                    {arrowLeftIcon}
                </div>}
            {images.length > 1 &&  <div className={styles["imageSlider__indicators"]}>
                {images.map((_image, index) => (
                    <div key={index} className={`${styles["imageSlider__indicators__indicator"]} ${currentIndex === index && styles["imageSlider__indicators__indicator--active"]}`}></div>
                ))}
            </div>}
        </div>
    );
};

export default ImageSlider;