import styles from './styles.module.css'
import {InputHTMLAttributes, ReactNode} from "react";
import clsx from "clsx";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    icon?: ReactNode
    label?: string
}

export const Input = ({className, icon, label, ...rest}: Props) => {
    return (
        <label className={styles.label}>
            {label}
            <div className={styles.conteiner}>
                {icon}
                <input
                    {...rest}
                    className={clsx(className, styles.input)}
                />
            </div>
        </label>
    );
};
