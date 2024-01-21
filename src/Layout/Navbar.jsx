import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbarstyle.css'



const Navbar = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" dir='ltr'>
                <div className="container-fluid">
                    {/* <NavLink className="navbar-brand" to="#">Navbar w/ text</NavLink> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 link-size">

                        <li className="nav-item p-2">
                        <NavLink className="btn btn-outline-success button-style button:hover" to="/login">تسجيل الدخول <i className="fa  p-r-5 fa-sign-in"> </i></NavLink>
                        </li>
                        <li className="nav-item p-2">
                        <NavLink className="btn btn-success button-style button-style-login" to="/registration">انشاء حساب <i className="fa  p-r- fa-user">  </i></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">المدونة</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/sotoor-ecommerce">متجر سطور للقدرات جديد</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/exams_summary">النماذج والاختبارات</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                    <NavLink className="nav-link" to="/"><img src='logo.webp' width={'230px'} height={'80px'}/></NavLink>
                    </span>
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;