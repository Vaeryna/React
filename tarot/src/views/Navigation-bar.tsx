import styles from "../scss/Home.module.scss"
import {Link} from "react-router-dom";

function NavigationBar() {
    return (
        <div className={styles.navigationBar}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand" >Navbar </Link>
                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                    {/*        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"*/}
                    {/*        aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"></span>*/}
                    {/*</button>*/}
                    <div className="collapse navbar-collapse" id="navbarText">
                        {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link" href="#">Features</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link" href="#">Pricing</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
      {/*                  <span className="navbar-text">*/}
      {/*  Navbar text with an inline element*/}
      {/*</span>*/}
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default NavigationBar