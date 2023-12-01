import {useState} from 'react';
import styles from './videoSlider.module.scss';
import ReactPlayer from "react-player";
import {arrowLeftIcon, arrowRightIcon} from "@assets/icons.tsx";

interface VideoSliderProps {
    videos: string[];
}

const VideoSlider = ({videos}: VideoSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
   const getFilePath = (fullURL:string)=>{
       const url = new URL(fullURL);
       return url.origin + url.pathname;
   }
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevImage = () => {

        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className={styles["imageSlider"]}>
            {videos.length > 1 && currentIndex < (videos.length - 1) &&
                <div className={`${styles["videoSlider__button"]} ${styles["videoSlider__button--right"]}`}
                     onClick={nextImage}>
                    {arrowRightIcon}
                </div>}

               <ReactPlayer
                    url={getFilePath(videos[currentIndex])}
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={false}
                />

            {videos.length > 1 && currentIndex > 0 &&
                <div className={`${styles["videoSlider__button"]}  `} onClick={prevImage}>
                    {arrowLeftIcon}
                </div>}

        </div>
    );
};

export default VideoSlider;