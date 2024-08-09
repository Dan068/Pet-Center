import AboutUs from "../../aboutUs/AboutUs";
import MyAcount from "../../miAcount/MiAcount";
import { urlLogoCentroVeterinario } from "../assets/images/logo";
import styles from './NavBar.module.css';

const NavBar = ()=>{
    return (
        <>
        <nav className={styles.NavBar}>
            <div className={styles.leftSection}>
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
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscar... " />
            </div>
            <div className={styles.rightSection}>
                <div className={styles.notifications}>
                    <span className={styles.bellIcon}>🔔</span>
                    <div className={styles.dropdown}>
                        <p>No hay notificaciones</p>
                    </div>
                </div>
                {/* <img src={userPhoto} alt="Foto del Usuario"className={styles.userPhoto} /> */}
            </div>

        </nav>
        </>

    )
}
export default NavBar;