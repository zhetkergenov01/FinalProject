import styles from "../register/styles.module.css";
import {Button} from "../../components/Button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginTC} from "../../store/authReducer.ts";
import {useNavigate} from "react-router-dom";


type LoginInputsFields = {
    email:string;
    password:string;
    rememberMe?:boolean;
}


export const Login = () => {

    const dispatch= useDispatch<any>()

    const {register, handleSubmit, formState:{errors}} = useForm<LoginInputsFields>()

    const navigate= useNavigate()
    const onSubmit = (data:LoginInputsFields) =>{
        dispatch(loginTC(data,navigate))
    }
    const showPassword=(id:string)=>{
        const x = document.getElementById(id) as HTMLInputElement;
        if(x===null) return;
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <span className={styles.title}>Log In</span>
                    <div className={styles.fields}>
                        <label htmlFor="email" className={styles.label}>
                            Email
                            <input type="email"
                                   className={styles.input}
                                   id="email"
                                   {...register("email")}
                            />
                        </label>
                        <label htmlFor="password" className={styles.label}>
                            Password
                            <div>
                                <input type="password"
                                       className={styles.input}
                                       id="password"
                                       {...register("password", { required: true })}
                                />
                                <input type="checkbox"
                                       onClick={()=> showPassword("password")}
                                />
                            </div>
                            {errors.password && <span className={styles.error}>This field is required</span>}
                        </label>
                        <label htmlFor="rememberMe" className={styles.label}>
                            Remember me
                            <div>
                                <input type="checkbox"
                                       id="rememberMe"
                                       {...register("rememberMe", {required: true})}
                                />
                            </div>
                        </label>
                    </div>

                    <div className={styles.buttons}>
                        <Button className={styles.button} variant={"outlined"}>Cancel</Button>
                        <Button className={styles.button} variant={"primary"} type="submit">Log In</Button >
                    </div>
                </form>
            </div>
        </div>
    );
};

