import styles from "./styles.module.css";
import {Input} from "../../../../components/Input";
import {Button} from "../../../../components/Button";
import {Modal} from "../../../../components/Modal";
import {createPackTC} from "../../../../store/packsReducer.ts";
import {useDispatch} from "react-redux";
import {useState} from "react";

type Props = {
    isOpen:boolean,
    onClose:() =>void
}
export const AddPackModal = ({isOpen,onClose}:Props) => {
    const [isPrivate, setIsPrivate] = useState(false)
    const [deckCover, setDeckCover] = useState('')
    const [newPackName, setNewPackName] = useState('')


    const dispatch = useDispatch<any>()
    const addNewPack = () => {
        dispatch(createPackTC({cardsPack: {name: newPackName, deckCover: deckCover, private: isPrivate}}))
        onClose()
    }
    return (
        <>
            <Modal
                modalContent={styles.modalContent}
                isOpen={isOpen}
                onClose={() => {
                    onClose()
                    setDeckCover('')
                    setNewPackName('')
                    setIsPrivate(false)
                }
                }
            >
                <Input value={newPackName} label={"Name"} onChange={(e) => setNewPackName(e.target.value)}/>
                <Input value={deckCover} label={"DeckCover"} onChange={(e) => setDeckCover(e.target.value)}/>
                <label>
                    Private
                    <input type="checkbox" checked={isPrivate}
                           onChange={(e) => setIsPrivate(e.target.checked)}/>
                </label>
                <Button className={styles.createButton}
                        onClick={addNewPack}
                        variant={"primary"}
                >
                    Create
                </Button>
            </Modal>

        </>
    );
};

