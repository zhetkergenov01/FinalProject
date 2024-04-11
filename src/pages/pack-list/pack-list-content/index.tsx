import {Loader} from "../../../components/Loader";
import {Table} from "../../../components/Table";
import styles from "./styles.module.css";
import {Input} from "../../../components/Input";
import {Button} from "../../../components/Button";
import {InitialPacksState} from "../../../store/packsReducer.ts";
import {useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../store";
import {AddPackModal} from "./add-pack-modal";
import {DeletePackModal} from "./delete-pack-modal";
import {UpdatePackModal} from "./update-pack-modal";


export const PackListContent = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [selectedPackId, setSelectedPackId] = useState('')

    const {packs, loading} = useSelector<AppStateType, InitialPacksState>(({packs}) => {
        return packs
    })

    return (

        <>
            <div className={styles.search}>
                <Input icon={<img src="/search.svg" alt=""/>}/>
                <Button
                    className={styles.addButton}
                    variant={"primary"}
                    onClick={() => setIsOpen(true)}
                >
                    Add new pack-list
                </Button>
            </div>
            {
                loading
                    ? <Loader/>
                    : <Table
                        packs={packs}
                        onEdit={(packId) => {
                            setIsUpdateOpen(true)
                            setSelectedPackId(packId)
                        }}
                        onDelete={(packId) => {
                            setIsDeleteOpen(true)
                            setSelectedPackId(packId)
                        }
                        }
                    />
            }
            <UpdatePackModal
                isOpen={isUpdateOpen}
                onClose={() => {setIsUpdateOpen(false)}}
                selectedId={selectedPackId}/>

            <DeletePackModal
                isOpen={isDeleteOpen}
                onClose={() => {setIsDeleteOpen(false)}}
                selectedId={selectedPackId}
            />

            <AddPackModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

        </>
    );
};

