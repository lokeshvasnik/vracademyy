import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { showData } from "../backend/homepage";
const Home = () => {
    const { data } = useQuery({
        queryKey: ["data"],
        queryFn: showData,
    });

    console.log(data);
    return (
        <div>
            <div className="w-full">
                <img
                    src="./Img/carousal1.jpeg"
                    alt=""
                    className="w-full cropped-ofp"
                />
            </div>

            {/* Admin Data */}
            <div>
                {data?.map((item) => (
                    <div
                        key={item.id}
                        className="flex-col mt-10 p-10 md:flex md:flex-row"
                    >
                        <div>
                            <img
                                className="w-50 rounded-md"
                                src={item.image}
                                alt=""
                            />
                        </div>
                        <div className="flex justify-center items-center flex-col p-30 mt-10">
                            <h2 className="text-4xl home-title">
                                {item.title}
                            </h2>
                            <p className="text-center text-3xl">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="flex-col mt-10 p-10 md:flex md:flex-row">
                    <div>
                        <video width=" 440" height="150" controls>
                            <source src="Vid/home_1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex justify-center items-center flex-col p-30 mt-10">
                        <h2 className="text-4xl text-center">
                            {" "}
                            "VR IS <span className="text-purple">PURPLE</span>"
                        </h2>
                        <p className="text-center text-3xl md:ml-20">
                            "Vr is purple", "Vr is white", "Vr is black"!
                        </p>
                    </div>
                </div>

                <div className="flex-col mt-10 p-10 md:flex md:flex-row md:flex-row-reverse">
                    <div>
                        <video width=" 440" height="150" controls>
                            <source src="Vid/home_2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex justify-center items-center flex-col p-30 mt-10">
                        <h2 className="text-4xl text-center"> "LORD ROBERT"</h2>
                        <p className="text-center text-3xl mr-20">
                            Lord Robert showing some good skills
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
