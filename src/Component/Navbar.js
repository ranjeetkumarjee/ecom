// css styles 
import styles from "../styles/navbar.module.css";
import { useAuthValue } from "../authContext"; // custom context hook
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar() {
    const { isLoggedIn, signOut } = useAuthValue();     // user's login status
    return (
        <>
            <div className={styles.navbarContainer}>
                <div className={styles.appName}>
                    <NavLink to="/">
                        {/* logo */}
                        <img className={styles.logo} src={require("../Assets/favicon.png")} alt="App Logo" />
                        hopyShop
                    </NavLink>
                </div>

                {/* all the navigation link */}
                <div className={styles.navLinks}>
                    {/* homepage link */}
                    <NavLink to="/">
                        <span>
                            {/* home logo */}
                            <i className="fa-solid fa-house"></i>
                            &nbsp;Home
                        </span>
                    </NavLink>

                    {/* myorder link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/myorder">
                        <span>
                            {/* my order logo */}
                            <i className="fa-solid fa-bag-shopping"></i>
                            &nbsp;My Order
                        </span>
                    </NavLink>}


                    {/* cart link */}
                    {/* show when user is logged in */}
                    {isLoggedIn && <NavLink to="/cart">
                        <span>
                            {/* cart icon */}
                            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                            &nbsp;Cart
                        </span>
                    </NavLink>}


                    {/* for signIN and signOut */}
                    <NavLink to={!isLoggedIn ? "/signin" : "/"}>
                        <span>
                            {!isLoggedIn ?
                                <>
                                    {/* sign in icon */}
                                    <i className="fa-solid fa-right-to-bracket"></i>
                                    <span>SignIn</span>
                                </>
                                :
                                <>
                                    {/* sign out icon */}
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <span onClick={signOut}>SignOut</span>
                                </>
                            }
                        </span>
                    </NavLink>
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}