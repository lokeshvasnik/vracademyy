import supabase from "./supabase";
export const loginUser = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword(formData);

    if (error) {
        throw new Error(error.message);
    }
    return data;
};
