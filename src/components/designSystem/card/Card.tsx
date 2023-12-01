import styles from './card.module.scss'
import React from "react";

interface CardProps {
    children: React.ReactNode,
    isSelected ?: boolean,
    showHover ?: boolean,

}

const Card = ({children,isSelected = false,showHover=true}:CardProps) => {
    return <div className={`${styles['card']}  ${isSelected && styles['card--selected']} ${(!isSelected && showHover) && styles['card--withHover']}`}>
        {children}
    </div>
}
export default Card