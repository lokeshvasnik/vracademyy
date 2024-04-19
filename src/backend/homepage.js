import supabase from "./supabase";

export const createData = async (formData) => {
    // Image
    const imageName = `${Math.random()}-${formData.image[0].name}`.replace(
        "/",
        ""
    );

    const imagePath = `https://fpamhkffzvvmerxjtrhq.supabase.co/storage/v1/object/public/images/${imageName}`;

    // Upload image
    const { error: storageError } = await supabase.storage
        .from("images")
        .upload(imageName, formData.image[0]);

    if (storageError) {
        throw new Error(storageError.message);
    }

    // Insert job data into the 'jobs' table
    const { data, error } = await supabase
        .from("upload-data")
        .insert([{ ...formData, image: imagePath }]);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const showData = async () => {
    const { data, error } = await supabase.from("upload-data").select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
