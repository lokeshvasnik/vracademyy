import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        // Initialize the map script
        const script = document.createElement("script");
        script.src = "https://1map.com/js/script-for-user.js?embed_id=1092661";
        script.async = true;
        script.onload = () => {
            // This function is called when the script is loaded
            window.OneMap.initMap({
                query: "Sahyadri Ground Chembur, Road Number 12, Chembur West, Tilak Nagar, Chembur, Mumbai, Maharashtra, India",
                width: 600,
                height: 400,
                satellite: false,
                zoom: 17,
                placeId: "ChIJlzHbCZ7I5zsREyO80DBAu_8",
                cid: "0xffbb4030d0bc2313",
                coords: [19.069449, 72.8979567],
                lang: "us",
                queryString:
                    "Sahyadri Ground Chembur, Road Number 12, Chembur West, Tilak Nagar, Chembur, Mumbai, Maharashtra, India",
                centerCoord: [19.069449, 72.8979567],
                id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
                embed_id: "1092661",
            });
        };
        document.body.appendChild(script);

        return () => {
            // Clean up: remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="contact_hero px-10 mt-5 md:flex">
            <div>
                <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                    <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                </div>
            </div>
            <div className="px-10 mt-5">
                <div className="mt-2">
                    <div className="flex space-x-5 justify-center">
                        <i className="fa-solid fa-location-dot text-3xl"></i>
                        <h2 className="text-2xl">Our Office Address</h2>
                    </div>
                    <div className="mt-1 ml-12">
                        <p className="text-center">
                            Shree Narayan Guru, Urban Turf, Lokhande Marg,
                            Chembur West, Mumbai, Maharashtra 400089
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex space-x-5 justify-center">
                        <i className="fa-solid fa-envelope text-3xl"></i>
                        <h2 className="text-2xl">General Enquiries</h2>
                    </div>
                    <div className="mt-1 ml-12">
                        <p className="text-center">vrmogli@gmail.com</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex space-x-5 justify-center">
                        <i className="fa-solid fa-phone text-3xl"></i>
                        <h2 className="text-2xl">Call Us</h2>
                    </div>
                    <div className="mt-3 ml-12 text-center">
                        <p>ROBERT SIR : +91 99202 43952</p>
                        <p>VISHAL SIR : +91 97693 40003</p>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex space-x-5 justify-center">
                        <i className="fa-brands fa-square-instagram text-3xl"></i>
                        <h2 className="text-2xl">Instagram</h2>
                    </div>
                    <div className="mt-3 ml-12 text-center">
                        <a href="https://www.instagram.com/vracademy?igsh=MWVzeWQxaW5lYzdkaw==">
                            Vr Academy/Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
