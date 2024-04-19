const About = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center space-y-10">
                <div>
                    <p className="text-center">
                        The endeavour of VR Football Academy is to provide
                        state-of-the-art sports and recreational facilities to
                        students and to provide the best possible coaching and
                        mentoring to them. Located in Chembur West, Mumbai,
                        Maharashtra, we offer elite training programs and
                        coaching classNamees which are available to members of
                        all ages and abilities. Our faculty is professional and
                        disciplined with great experience in coaching in their
                        perspective fields.
                    </p>
                </div>
                <div>
                    <img src="./Img//mfa_logo.png" alt="mfa_logo" />
                </div>
                <div>
                    <p className="text-2xl font-bold text-center">
                        OUR TEAMS PLAY'S IN MUMBAI FOOTBALL ASSOCIATION OUR
                        SENIOR TEAM PLAY FOR MFA 3RD DIVISION
                    </p>
                </div>
                <div>
                    <img src="./Img/ypl_logo.png" alt="ypl_logo" />
                </div>

                <div>
                    <p className="text-2xl font-bold text-center">
                        OUR UNDER 9, UNDER 11, UNDER 13 AND UNDER 15 TEAMS PLAY
                        FOR MFA YOUTH LEAGUE
                    </p>
                </div>
                <div>
                    <img src="./Img/dpdl_logo.png" alt="dpdl_logo" />
                </div>

                <div>
                    <p className="text-2xl font-bold text-center">
                        OUR TEAM ALSO PLAYS FOR DPDL LEAGUE
                    </p>
                </div>

                <div className="flex space-x-16 mb-10">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="w-60 rounded-md"
                            src="./Img/robert.jpeg"
                            alt="robert"
                        />
                        <p className="text-2xl font-bold mt-5">ROBERT V</p>
                        <p className="text-2xl font-bold">[COACH]</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="w-60 rounded-md"
                            src="./Img/vishal.jpeg"
                            alt="vishal"
                        />
                        <p className="text-2xl font-bold mt-5">VISHAL MOGNLI</p>
                        <p className="text-2xl font-bold">[COACH]</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
