import styles from "../styles.module.css";
import {Input} from "../../../../components/Input";
import {Button} from "../../../../components/Button";
import {Modal} from "../../../../components/Modal";
import {updatePackTC} from "../../../../store/packsReducer.ts";
import {useDispatch} from "react-redux";
import {useState} from "react";

type Props = {
    isOpen:boolean
    onClose:() =>void
    selectedId:string
}
export const UpdatePackModal = ({isOpen,onClose,selectedId}:Props) => {
    const [newUpdatePackName, setNewUpdatePackName] = useState('')

    const dispatch = useDispatch<any>()
    const updatePackName = () => {
        if (selectedId) {
            dispatch(updatePackTC({cardsPack: {_id: selectedId, name: newUpdatePackName}}))
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
                    setNewUpdatePackName('')
                }
                }>
                <Input value={newUpdatePackName} label={"Name"}
                       onChange={(e) => setNewUpdatePackName(e.target.value)}/>
                <Button className={styles.Button}
                        onClick={updatePackName}
                        variant={"primary"}
                >
                    Update
                </Button>
            </Modal>

        </>
    );
};
