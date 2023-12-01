import {ReactNode} from 'react';
import styles from './button.module.scss'


interface ButtonProps {
    height?: number | string;
    color?: 'primary' | 'secondary';
    onClick?: () => void;
    children?: ReactNode;
    icon?: ReactNode;
    variant?: "contained" | "text" | 'circleButton';
    iconOnTop?: boolean
}

const getClass = (variant: string, color: string, iconOnTop: boolean) => {
    let styleList = ""
    if (variant === "contained") {
        switch (color) {
            case  "primary":
                styleList = styles['button__primary'];
                break;
            case "secondary":
                styleList = styles['button__secondary'];
                break;
            default:
                styleList = styles['button__primary']
        }
    } else if (variant === "text")
        styleList = styles['button__text']
    else if (variant === "circleButton")
        styleList = styles['button__circleButton']

    if (iconOnTop)
        styleList = styleList + ' ' + styles['button__iconOnTop']

    return styleList
}

const Button = ({
                    height = '32px',
                    color = "primary",
                    icon,
                    onClick,
                    children,
                    variant = "contained",
                    iconOnTop = false
                }: ButtonProps) => (
    <button
        style={{
            height: `${height}`
        }}
        className={`${styles['button']} ${getClass(variant, color, iconOnTop)}`}
        onClick={onClick}>
        {icon}
        {variant !== 'circleButton' && children}
    </button>
);

export default Button;
