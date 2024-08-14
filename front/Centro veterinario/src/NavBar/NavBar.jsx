import AboutUs from "../../aboutUs/AboutUs";
import MyAcount from "../../miAcount/MiAcount";
import { urlLogoCentroVeterinario } from "../assets/images/logo";
import styles from './NavBar.module.css';

const NavBar = ()=>{
    return (
        <>
        <nav className={styles.NavBar}>
            <div className={styles.rightSection}>
                <img src={urlLogoCentroVeterinario} alt="Logo" className={styles.log} />
                <ul className={styles.navLinks}>
                    <li> <a href="">
                        <MyAcount/>
                        </a> </li>
                    <li>
                        <AboutUs/>
                    </li>
                </ul>
            </div>
            
               

        </nav>
        </>

    )
}
export default NavBar;