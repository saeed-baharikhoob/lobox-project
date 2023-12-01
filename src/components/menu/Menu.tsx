import styles from './menu.module.scss'
import MenuItem from "@components/menuItem/MenuItem.tsx";
import {
    calendarIcon,
    circleUserIcon,
    flagIcon,
    homeIcon,
    inviteIcon,
    messagesIcon,
    suitcaseIcon
} from "@assets/icons.tsx";
const Menu = ()=>{
    return (
        <div className={styles['box']}>
            <MenuItem icon={homeIcon} text={"Home"} />
           <MenuItem icon={circleUserIcon} text={"People"} />
            <MenuItem icon={flagIcon} text={"Pages"} />
            <MenuItem icon={calendarIcon} text={"Schedules"} />
            <MenuItem icon={calendarIcon} text={"Schedules"} />
            <MenuItem icon={messagesIcon} text={"Messages"} />
            <MenuItem icon={suitcaseIcon} text={"Jobs"} divider={true} />
            <MenuItem icon={inviteIcon} text={"Invite"} divider={true} />
        </div>
    )
}
export default Menu