import AboutUs from "./AboutUs";
import MyAcount from "./MiAcount";
import { urlLogoCentroVeterinario } from "../assets/images/logo";


const NavBar = ()=>{
    return (
        <>
        <nav className='NavBar'>
            <div className='rightSection'>
                <img src={urlLogoCentroVeterinario} alt="Logo" className='logo' />
                <ul className='navLinks'>
                    <li> <a href="">
                        <MyAcount/>
                        </a> </li>
                    <li>
                        <AboutUs/>
                    </li>
                </ul>
            </div>
            
               

        </nav>
        <h1>navbar</h1>
        </>

    )
}
export default NavBar;