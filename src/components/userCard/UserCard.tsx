import Card from "@designSystem/card/Card.tsx";
import styles from './userCard.module.scss'
import {usersInterface} from "@/utils/Interfaces/usersInterface.ts";
import Button from "@designSystem/button/Button.tsx";
import {messageIcon, plusIcon} from "@assets/icons.tsx";
interface UserCardProps {
    item:usersInterface | null
}

const UserCard = ({item}: UserCardProps) => {

    return (
        <div className={styles['box']} >
            <Card showHover={false} >
                <div className={styles['box__content']}>
                    <div className={styles['box__content__image']}>
                        <img src={item?.imageUrl} alt={`user-card-image-${item?.username}`} fetchpriority="high" loading="lazy"/>

                    </div>
                    <div className={styles['box__content__details']}>
                        <span className={styles['box__content__details__title']}>{item?.name}</span>
                        <span className={styles['box__content__details__username']}>@{item?.username}</span>
                        <span className={styles['box__content__details__address']}>{item?.locationTitle}</span>
                        <div className={styles['box__content__details__socialInfo']}>
                          <div className={styles['box__content__details__socialInfo__line']}>
                              <div className={styles['box__content__details__socialInfo__label']}>Followers</div>
                              <div className={styles['box__content__details__socialInfo__value']}>{item?.followersCounter}</div>
                              <div className={styles['box__content__details__socialInfo__line']}/>
                          </div>
                            <div className={styles['box__content__details__socialInfo__line']}>
                                <div className={styles['box__content__details__socialInfo__label']}>Following</div>
                                <div className={styles['box__content__details__socialInfo__value']}>{item?.followingsCounter}</div>
                            </div>
                            <div>
                                <div className={styles['box__content__details__socialInfo__label']}>Posts</div>
                                <div className={styles['box__content__details__socialInfo__value']}>{item?.postsCounter}</div>
                            </div>
                        </div>
                        <div className={styles['box__actionBar']}>
                            <Button icon={messageIcon} color={'secondary'}>Message</Button>
                            <Button icon={plusIcon} color={'primary'}>Follow</Button>
                        </div>
                    </div>
                </div>

            </Card>
        </div>)
}
export default UserCard