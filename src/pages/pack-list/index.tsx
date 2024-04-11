import styles from './styles.module.css'
import {Sidebar} from "../../components/Sidebar";
import {getPacksTC, InitialPacksState} from "../../store/packsReducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ApiTypes} from "../../api/apiTypes.ts";
import {PackListContent} from "./pack-list-content";


export const PackList = () => {
    const {filter} = useSelector<AppStateType, InitialPacksState>(({packs}) => {
        return packs
    })
    const navigate = useNavigate()

    const dispatch = useDispatch<any>()

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if (userId) {
            const params: ApiTypes.Packs.Get.Query = {
                pageCount: 8,
                page: 2,
            }
            if (filter === "my") {
                params.user_id = userId
            }
            dispatch(getPacksTC(params))
        } else navigate('/login')
    }, [filter])


    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <Sidebar/>
                <div className={styles.content}>
                    <h1 className={styles.title}>My packs list</h1>

                    <PackListContent/>
                </div>
            </div>
        </div>
    );
};
