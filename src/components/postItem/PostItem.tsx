import styles from './postItem.module.scss'
import Card from "@designSystem/card/Card.tsx";
import {postInterface} from "@/utils/Interfaces/postInterface.ts";
import {calculateTimeSince} from "@/utils/functions/time";
import ExpandableText from "@designSystem/expandableText/ExpandableText.tsx";
import ImageSlider from "@designSystem/imageSlider/ImageSlider.tsx";
import Button from "@designSystem/button/Button.tsx";
import {useEffect, useState} from "react";
import VideoSlider from "@designSystem/videoSlider/VideoSlider.tsx";
import {commentIcon, likeIcon, moreIcon, shareIcon} from "@assets/icons.tsx";


interface PostItemProps {
    item: postInterface
}

const PostItem = ({item}: PostItemProps) =>{
const [images,setImages] = useState<string[] >([])
const [videos,setVideos] = useState<string[] >([])
    useEffect(() => {
        setImages(separateMedias(item?.post?.medias,"IMAGE"))
        setVideos(separateMedias(item?.post?.medias,'VIDEO'))
    }, [item]);
const separateMedias = (items: postInterface['post']['medias'],type:string):string[] => {
    const data: string[] = [];

    items?.map((item) => {
        if (item.type === type) {
            data.push(item.url)
        }
    })

   return data

}
return (
    <div className={styles['box']}>
        <Card showHover={false}>
            <div className={styles['box__header']}>
                <div className={styles['box__header__image']}>
                    <img src={item?.post?.ownerProfileInfo?.imageUrl}
                         alt={`image-${item?.post?.ownerProfileInfo?.username}`} fetchpriority="high"
                         loading="lazy"/>

                </div>
                <div className={styles['box__header__details']}>
                        <span
                            className={styles['box__header__details__title']}>{item?.post?.ownerProfileInfo?.name}</span>
                    <span
                        className={styles['box__header__details__date']}>{calculateTimeSince(item?.post?.createdDate)}</span>
                </div>

                <div className={styles['box__header__moreButton']}>

                    <Button variant={'circleButton'} icon={moreIcon}/>
                </div>
            </div>
            <div>
                <div className={styles['box__description']}>
                    <ExpandableText text={item?.post?.body}/>
                </div>
                {images.length > 0 && <ImageSlider images={images}/>}
                {videos.length > 0 && <VideoSlider videos={videos}/> }
                <div className={styles['box__actionBar']}>
                    <Button variant={'text'} icon={shareIcon}>Share</Button>
                    <Button variant={'text'} icon={commentIcon}>Comment</Button>
                    <Button variant={'text'} icon={likeIcon}>Like</Button>

                </div>
            </div>
        </Card>
    </div>
)
}
export default PostItem