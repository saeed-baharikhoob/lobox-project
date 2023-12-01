import styles from './searchItem.module.scss'
import {searchDarkIcon} from "@assets/icons.tsx";
interface SearchItemProps{
    text:string
}
const SearchItem = ({text}:SearchItemProps)=>{
    return (<div className={styles['box']}>
        <div className={styles['box__icon']}>{searchDarkIcon}</div>
        <span className={styles['box__label']}>{text}</span>
    </div>)
}
export default SearchItem