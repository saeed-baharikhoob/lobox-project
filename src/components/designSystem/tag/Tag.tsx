import styles from './tag.module.scss'
interface TagProps{
    text:string,
    selectedTag :string,
    onSelect: (item:string)=>void

}
const Tag = ({text,selectedTag,onSelect}:TagProps)=>{
    return <div className={`${styles['box']} ${text === selectedTag && styles['box--selected']}`} onClick={()=>onSelect(text)} >
        <span >{text}</span>
    </div>

}
export default  Tag