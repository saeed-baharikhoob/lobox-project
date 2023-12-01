import {ReactNode} from "react";
import Button from "@designSystem/button/Button.tsx";
import styles from './menuItem.module.scss'

interface MenuItemProps {
    icon: ReactNode,
    text: string,
    divider?: boolean
}

const MenuItem = ({icon, text = "", divider = false}: MenuItemProps) => {
    return <div className={styles['box']}>
        {divider &&  <div className={styles['box__divider']}/>}
        <Button height={'60px'} variant={'text'} icon={icon} iconOnTop={true}>{text}</Button>
    </div>
}
export default MenuItem