import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img className="logo_img" src="Img/logo.png" alt="logo" />
                <center>
                    <h1>VR ACADEMY</h1>
                </center>
                <img
                    className="mfa_logo"
                    src="Img/mfa_logo.png"
                    alt="mga_logo"
                />
            </nav>

            <div className="nav-btn flex">
                <Link to="/">
                    <button className="button-56" role="button">
                        HOME
                    </button>
                </Link>
                <Link to="/photos">
                    <button className="button-56" role="button">
                        PHOTOS
                    </button>
                </Link>
                <Link to="/videos">
                    <button className="button-56" role="button">
                        VIDEOS
                    </button>
                </Link>
                <Link to="/about">
                    <button className="button-56 text-sm" role="button">
                        ABOUT US
                    </button>
                </Link>
                <Link to="/contact">
                    <button className="button-56 text-sm" role="button">
                        CONTACT US
                    </button>
                </Link>
                <Link to="/addmission">
                    <button className="button-56 text-sm" role="button">
                        ADMISSION FORM
                    </button>
                </Link>
                <Link to="/login">
                    <button className="button-56 text-sm" role="button">
                        LOGIN
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
