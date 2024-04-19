const Videos = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="my-5">
                    <h2 className="text-2xl font-bold mt-5 text-center">
                        UNDER 11 TEAM WORK PASSING
                    </h2>
                    <video width=" 440" height="150" controls>
                        <source src="Vid/fist.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="my-5">
                    <h2 className="text-2xl font-bold my-5 text-center">
                        DECATHLON SPORTS UTSAV
                    </h2>
                    <video width="340" height="100" controls>
                        <source src="Vid/scond.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="my-5">
                    <h2 className="text-2xl font-bold my-5 text-center">
                        SMALL KIDS PLAYING 1 V 1
                    </h2>
                    <video width="340" height="100" controls>
                        <source src="Vid/tird.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="my-5">
                    <h2 className="text-2xl font-bold my-5 text-center">
                        MASTER className
                    </h2>
                    <video width="340" height="100" controls>
                        <source src="Vid/frth.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="my-5">
                    <h2 className="text-2xl font-bold my-5 text-center">
                        FUN WITH BALL
                    </h2>
                    <video width="340" height="100" controls>
                        <source src="Vid/fith.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="my-5">
                    <h2 className="text-2xl font-bold my-5 text-center">
                        GOALKEEPING PRACTISE
                    </h2>
                    <video width="340" height="100" controls>
                        <source src="Vid/sixh.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Videos;
