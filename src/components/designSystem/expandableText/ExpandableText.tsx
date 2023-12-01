import {useEffect, useRef, useState} from 'react';
import styles from './expandableText.module.scss'

interface ExpandableTextProps {
    text: string
}

const ExpandableText = ({text}: ExpandableTextProps) => {
    const [showFullText, setShowFullText] = useState(false);
    const [textHeight, setTextHeight] = useState(0);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTextHeight(textRef.current?.clientHeight ?? 0)
        setShowFullText(false)
    }, []);
    const toggleTextVisibility = () => {
        setShowFullText(!showFullText);
    };


    return (
        <div className={styles["expandableText"]}>

            <div  ref={textRef} className={`${showFullText && styles["expandableText__fullText"] } ${!showFullText && textHeight > 200 && styles["expandableText__smallText"]} `}>
                <span dangerouslySetInnerHTML={{__html: text}}></span>
            </div>


            {!showFullText && textHeight > 200 && <span className={styles["expandableText__readMore"]}  onClick={toggleTextVisibility}>
      ... Show More
      </span>}
        </div>
    );
};

export default ExpandableText;