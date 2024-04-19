import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createData } from "../backend/homepage";
import toast from "react-hot-toast";

const Dashboard = () => {
    const [image, setFiles] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const queryClient = useQueryClient();
    // const navigate = useNavigate();

    // Mutate question
    const { mutate } = useMutation({
        mutationFn: (formData) => createData(formData),
        onSuccess: () => {
            toast.success("Data Added Successfully!");
        },
        onError: () => {
            toast.error("Something went wrong!");
        },
    });

    const onSubmitHandler = (formData) => {
        mutate({
            ...formData,
            image,
        });
    };

    return (
        <section className="my-0">
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form
                        className="rounded-xl p-20"
                        onSubmit={handleSubmit(onSubmitHandler)}
                    >
                        <h1 className="text-black text-2xl mx-auto text-center font-bold">
                            ADMIN DASHBOARD
                        </h1>
                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label">
                                    Title
                                </label>
                                <input
                                    rows="6"
                                    name="title"
                                    id="title"
                                    placeholder="Enter Title"
                                    className="formbold-form-input w-full"
                                    {...register("title", {
                                        required: "Title is required",
                                        pattern: {
                                            message: "Invalid Title",
                                        },
                                    })}
                                ></input>
                            </div>
                        </div>
                        <div className="formbold-input-flex">
                            <div>
                                <label className="formbold-form-label">
                                    Description
                                </label>
                                <textarea
                                    rows="6"
                                    name="description"
                                    id="description"
                                    placeholder="Your Description"
                                    className="formbold-form-input w-full"
                                    {...register("description", {
                                        required: "Description is required",
                                        pattern: {
                                            message: "Invalid Description",
                                        },
                                    })}
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label
                                    htmlFor="image"
                                    className="formbold-form-label"
                                >
                                    {" "}
                                    Upload Images{" "}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register("image", {
                                        required: true,
                                    })}
                                    onChange={(event) => {
                                        setFiles(event.target.files);
                                    }}
                                    className="my-4 w-full rounded border border-none file:cursor-pointer file:rounded file:border-none file:bg-slate-100 file:p-2"
                                />
                            </div>
                        </div>

                        <button type="submit" className="formbold-btn">
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
