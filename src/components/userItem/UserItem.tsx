import Card from "@designSystem/card/Card.tsx";
import styles from './userItem.module.scss'
import {usersInterface} from "@/utils/Interfaces/usersInterface.ts";

interface UserItemProps {
    item:usersInterface
    selectedItem: usersInterface | null
    onSelect: (item:usersInterface)=>void
}

const UserItem = ({item, selectedItem, onSelect}: UserItemProps) => {

    return (
        <div className={styles['box']} onClick={() => onSelect(item)} data-testid={'user-item'}>
            <Card isSelected={item?.id === selectedItem?.id}>
                <div className={styles['box__content']}>
                    <div className={styles['box__content__image']}>
                        <img src={item?.imageUrl} alt={`image-${item?.username}`} fetchpriority="high" loading="lazy"/>

                    </div>
                    <div className={styles['box__content__details']}>
                        <span className={styles['box__content__details__title']}>{item?.name +' ' + item?.surname}</span>
                        <span className={styles['box__content__details__username']}>@{item?.username}</span>
                        <span className={styles['box__content__details__address']}>{item?.locationTitle}</span>
                    </div>
                </div>

            </Card>
        </div>)
}
export default UserItem