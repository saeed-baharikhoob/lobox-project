import styles from './header.module.scss'
import {createIcon, logo, menuIcon, notifyIcon, searchIcon, userIcon} from "@assets/icons.tsx";
import {useState} from "react";
import SearchItem from "@components/searchItem/SearchItem.tsx";
import CategoryItem from "@components/categoryItem/CategoryItem.tsx";
import searchCategoryJobs from '@/assets/search-category-jobs.png'
import searchCategoryPages from '@/assets/search-category-pages.png'
import searchCategoryPeople from '@/assets/search-category-people.png'
import searchCategoryPost from '@/assets/search-category-posts.png'

const Header = () => {
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)


    return (<div className={styles['box']}>
        <div className={styles['box__menu']}>
            {menuIcon}
            {logo}
        </div>
        <div className={styles['box__search']}>
         <div className={styles['box__search__icon']}>{searchIcon}</div>
        <input type={'text'} placeholder={'Search'} onFocus={onFocus}  onBlur={onBlur}/>
            {focused && <div>
                <div className={styles['box__search__resultBox__background']}/>
                <div className={styles['box__search__resultBox']}>
                    <span className={styles['box__search__resultBox__label']}>Try searching for</span>
                    <SearchItem text={'Yigit Basaran'}/>
                    <SearchItem text={'Burhan Yetis'}/>
                    <SearchItem text={'ittcorp'}/>
                    <SearchItem text={'careergrowth'}/>
                    <div className={styles['box__search__resultBox__line']}/>
                    <span className={styles['box__search__resultBox__label']}>Search in</span>
                    <div className={styles['box__search__resultBox__categoryBox']}>
                        <CategoryItem image={searchCategoryPeople} label={'People'}/>
                        <CategoryItem image={searchCategoryPost} label={'Post'}/>
                        <CategoryItem image={searchCategoryPages} label={'Page'}/>
                        <CategoryItem image={searchCategoryJobs} label={'Jobs'}/>
                    </div>
                </div>
            </div>}
        </div>
        <div className={styles['box__tools']}>
            {createIcon}
            {notifyIcon}
            <div className={styles['box__tools__user']}>
            {userIcon}
            </div>
        </div>

    </div>)
}
export default Header