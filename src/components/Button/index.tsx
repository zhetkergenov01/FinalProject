import clsx from "clsx";
import styles from "./styles.module.css"
import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "outlined" | "delete";
}

export const Button = ({children, className, variant, ...rest}: Props) => {
    return (
        <button
            className={
                clsx(className, styles.button, {
                        [styles.primary]: variant === "primary",
                        [styles.outlined]: variant === "outlined",
                        [styles.delete]: variant === "delete"
                    }
                )
            }
            {...rest}>
            {children}
        </button>
    );
};