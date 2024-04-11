import styles from "./styles.module.css"
import {ApiTypes} from "../../api/apiTypes.ts";
import {Fragment} from "react";

type Props = {
    packs: null | ApiTypes.Packs.Get.Resp
    onDelete: (packId: string) => void
    onEdit:(packId:string) =>void
}
export const Table = ({packs, onDelete,onEdit}: Props) => {

        const userId = localStorage.getItem("userId")


        return (
            <table className={styles.table}>
                <thead className={styles.head}>
                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={styles.body}>

                {packs?.cardPacks.map((cardPack, index) => {
                    return <tr key={index}>
                        <td>{cardPack.name}</td>
                        <td>{cardPack.cardsCount}</td>
                        <td>{cardPack.updated}</td>
                        <td>{cardPack.user_name}</td>
                        <td>
                            {cardPack.user_id === userId ?
                                <Fragment>
                                    <button onClick={() => {
                                        onDelete(cardPack._id)
                                    }}
                                            className={styles.deleteButton}
                                    >
                                        Delete
                                    </button>
                                    <button onClick={() => {
                                        onEdit(cardPack._id)

                                    }}
                                        className={styles.editButton}>Edit</button>
                                </Fragment> : null}
                            <button className={styles.learnButton}>Learn</button>

                        </td>
                    </tr>
                })
                }
                </tbody>
            </table>
        );
    }
;

