import styles from "./styles.module.css";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {Filter, setFilterAC} from "../../store/packsReducer.ts";
import {AppStateType} from "../../store";


export const Sidebar = () => {

    const dispatch = useDispatch()
    const filter = useSelector<AppStateType>((state) => state.packs.filter )
    const onChange = (filter: Filter) => {
        dispatch(setFilterAC(filter))
    }

    return (
        <div className={styles.sidebar}>
            <h4>Show packs cards</h4>
            <div className={styles.filter}>
                <span
                    className={clsx({
                        [styles.active]: filter === 'my'
                    })}
                    onClick={() => onChange('my')}
                >
                    My
                </span>
                <span
                    className={clsx({
                        [styles.active]: filter === 'all'
                    })}
                    onClick={() => onChange('all')}
                >
                    All
                </span>
            </div>
        </div>
    )
}