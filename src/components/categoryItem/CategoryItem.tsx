import styles from './categoryItem.module.scss'

interface CategoryItemProps {
    image: string,
    label: string
}

const CategoryItem = ({image, label}: CategoryItemProps) => {
    return (<div className={styles['box']}>

            <img src={image} alt={label} fetchpriority="high" loading="lazy"/>
        <div className={styles['box__wrapper']}>
            <span className={styles['box__wrapper__label']}>{label}</span>
        </div>
    </div>)
}
export default CategoryItem