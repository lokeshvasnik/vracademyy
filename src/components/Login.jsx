import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../backend/login";
import toast from "react-hot-toast";
import "../login.css";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Mutate question
    const { mutate } = useMutation({
        mutationFn: (formData) => loginUser(formData),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/dashboard");
            toast.success("Logged In.", {
                position: "bottom-center",
            });
        },

        onError: (error) => {
            toast.error(error.message, {
                position: "bottom-center",
            });
        },
    });

    const onSubmitHandler = (formData) => {
        console.log(formData);
        mutate(formData);
    };

    return (
        <div>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form
                            className="login"
                            onSubmit={handleSubmit(onSubmitHandler)}
                        >
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input
                                    type="text"
                                    className="login__input"
                                    placeholder="User name / Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input
                                    type="password"
                                    className="login__input"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 0,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="button login__submit"
                            >
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
