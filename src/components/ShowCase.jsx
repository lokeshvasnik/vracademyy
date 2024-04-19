const ShowCase = () => {
    return (
        <div>
            <div className="flex-col mt-10 p-10 md:flex md:flex-row">
                <div>
                    <img
                        className="w-50 rounded-md"
                        src="./Img/home_under_1.jpeg"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center flex-col p-30 mt-10">
                    <h2 className="text-4xl home-title">
                        UNDER 11 QUALIFY FOR YPL GROUP STAGE
                    </h2>
                    <p className="text-center text-3xl">
                        Exciting news as young talents under the age of 11
                        secure their spot in the prestigious YPL (Youth Premier
                        League) group stage! These rising stars showcase their
                        skills and determination, paving the way for a promising
                        future in football.
                    </p>
                </div>
            </div>

            <div className="flex-col mt-10 p-10 md:flex md:flex-row md:flex-row-reverse">
                <div>
                    <img
                        className="w-50 rounded-md"
                        src="./Img/home_under.jpeg"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center flex-col p-30 mt-10">
                    <h2 className="text-4xl">UNDER 11 TOP SCORER</h2>
                    <p className="text-center text-3xl">
                        Elite strikers vie for glory, netting goals and etching
                        their names atop the leaderboard, defining football's
                        relentless pursuit
                    </p>
                </div>
            </div>

            <div className="flex-col mt-10 p-10 md:flex md:flex-row">
                <div>
                    <img
                        className="w-50 rounded-md"
                        src="./Img/home_under_2.jpeg"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center flex-col p-30 mt-10">
                    <h2 className="text-4xl text-center">
                        {" "}
                        The Revered Voice: When the Coach Speaks, Players Listen
                    </h2>
                    <p className="text-center text-3xl">
                        In the realm of sports, a coach's words carry weight,
                        commanding attention and respect, shaping teams, and
                        igniting triumphs.
                    </p>
                </div>
            </div>

            <div className="flex-col mt-10 p-10 md:flex md:flex-row md:flex-row-reverse">
                <div>
                    <img
                        className="w-50 rounded-md"
                        src="./Img/home_under_3.jpeg"
                        alt=""
                    />
                </div>
                <div className="flex justify-center items-center flex-col p-30 mt-10">
                    <h2 className="text-4xl">WINNING TROPHY</h2>
                    <p className="text-center text-3xl">
                        Basking in the glow of victory, the team hoists the
                        trophy high, a testament to their unity, resilience, and
                        unwavering determination.
                    </p>
                </div>
            </div>

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
    );
};

export default ShowCase;
