import {ReactNode} from "react"; // Import CSS file for styling
import styles from './styles.module.css'
import clsx from "clsx";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    modalContent?: string;
}


export const Modal = ({isOpen, onClose, children, modalContent}: Props) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal}>
                <div className={clsx(styles.modal_content, modalContent)}>
                    <button className={styles.close_button} onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </div>
    );
};
