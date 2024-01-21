import React, { useState } from 'react';
import '../style/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const [data, setData] = useState({
        Email: '',
        password: '',
      });


    const formsubmit = (e) =>
    {
        e.preventDefult();
    }

    const handleChange = (e) =>
    {

        const { name, value } = e.currentTarget;
        setData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    return ( 
        <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                <div className="card shadow-card">
                    <div className="card-body">
                        <div className="text-center">
                            <img src="https://sotooracademy.com/images/main-logo.png" className="img_width m-3" />
                            <h1 className='m-3 maincolor header_style'>تسجيل الدخول</h1>
                            </div>
                            <form className='container' onSubmit={formsubmit}>
                                <div className="mb-3">
                                    <input value={data.Email} onChange={handleChange} name="Email" type="email" className="form-control" id="Email" aria-describedby="emailHelp" required/>
                                </div>

                                <div className="mb-3">
                                    <input value={data.password} onChange={handleChange} name="password" type="password" className="form-control" id="userpassword" required/>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input check_box_style" id="usercheck" />
                                    <label className="form-check-label maincolor" htmlFor="usercheck">تذكرني </label>
                                </div>

                                <Link className='maincolor' to='/'>هل نسيت كلمة السر الخاصة بك؟</Link>

                                <div className="d-grid gap-2">
                                <button type="submit" className="button_style mt-3 mb-5"><i className="fa-solid fa-right-to-bracket"></i> تسجيل الدخول </button>
                                <b>لم تقم بأنشاء حساب في الموقع ؟</b>

                                <Link to="/registration" className="link_regist m-3"> <i className="fa fa-user"> </i>  سجل حساب جديد   </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Login;