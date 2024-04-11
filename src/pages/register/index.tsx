import styles from "./styles.module.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "../../components/Button";
import {registerTC} from "../../store/authReducer.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

type Inputs = {
    email:string;
    password:string;
    confirmPassword:string;
}
export const Register = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data, event) => {
        event?.preventDefault()
        if(data.password===data.confirmPassword) {
            dispatch(registerTC({email:data.email, password:data.password}, navigate))
        }
        else {
            setError("confirmPassword", {message: "confirm password is invalid"})
        }
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
                    <span className={styles.title}>Register</span>
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

                        <label htmlFor="confirmPassword" className={styles.label}>
                            Confirm Password
                            <div>
                                <input type="password"
                                       className={styles.input}
                                       id="confirmPassword"
                                       {...register("confirmPassword",{ required: true })}
                                />
                                <input type="checkbox"
                                       onClick={()=> showPassword("confirmPassword")}
                                />
                            </div>
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                        </label>
                    </div>

                    <div className={styles.buttons}>
                        <Button className={styles.button} variant={"outlined"}>Cancel</Button>
                        <Button className={styles.button} variant={"primary"} type="submit">Register</Button >
                    </div>
                </form>
            </div>
        </div>
    );
};
