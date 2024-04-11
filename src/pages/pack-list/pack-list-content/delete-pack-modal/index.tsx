import styles from "./styles.module.css";
import {Button} from "../../../../components/Button";
import {Modal} from "../../../../components/Modal";
import {deletePackTC} from "../../../../store/packsReducer.ts";
import {useDispatch} from "react-redux";

type Props = {
    isOpen:boolean
    onClose:() =>void
    selectedId:string
}
export const DeletePackModal = ({isOpen,onClose,selectedId}:Props) => {

    const dispatch = useDispatch<any>()
    const deletePack = () => {
        if (selectedId) {
            dispatch(deletePackTC({id: selectedId}))
            onClose()
        }

    }
    return (
        <>
            <Modal
                modalContent={styles.modalContent}
                isOpen={isOpen}
                onClose={() => {
                    onClose()
                }
                }>
                <h3>
                    Do you really want to remove Pack Name - Name Pack?
                    All cards will be excluded from this course.
                </h3>
                <div className={styles.deleteBtnBlock}>
                    <Button className={styles.cancelBtn}
                            onClick={() => {
                                onClose()
                            }}
                            variant={"outlined"}
                    >
                        Cancel
                    </Button>
                    <Button className={styles.deleteBtn}
                            onClick={deletePack}
                            variant={"delete"}
                    >
                        Delete
                    </Button>
                </div>
            </Modal>

        </>
    );
};

