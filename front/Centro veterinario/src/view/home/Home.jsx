import { imglanding } from "../../assets/images/img";
import NavBar from "../../NavBar/NavBar";
import styles from './Home.module.css'

const Home =()=> {
 

return (
    <>
    <div>
        <NavBar />
    </div>
    
    <div><img src={imglanding} alt="Imagen de mascotas" className={styles.imglanding} /></div>
    
    
    </>
)
}
export default Home;