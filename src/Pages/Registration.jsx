import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Registration.css'


const Registration = () => {

    const [data, setData] = useState({
        FristName:'gyyvt',
        Email: '',
        phone_num:'',
        Educational_level:'',
        type:'',
        password: '',
        returnpassword:'',

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
            <div className="card shadow-card">
                <div className="card-body m-5">
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <img src="https://sotooracademy.com/images/main-logo.png" className="img_width m-3" />
                            <h2 className='header_style p-3'>صفحة انشاء حساب جديد</h2>
                            <h2 className='header_style p-2'>عشان تبدع في اختبار القدرات <br />لازم تتأسس صح!</h2>
                            <h4 className='header_style p-2'>سجل بياناتك واحصل على دورة مجانية للقدرات -<br /> للقسم الكمي</h4>
                            <h2 className='maincolor header_style p-2'>تأسيس من الصفر</h2>
                            <h4 className='header_style p-2'>ارفع درجتك معنا واضمن مقعدك في الجامعة!</h4>
                        </div>

                        <div className='col-md-6'>
                            <h1 className='maincolor bold 4em text-center mb-5'>حساب جديد</h1>

                            <form className='container' onSubmit={formsubmit}>

                                <div className="mb-3">
                                    <input value={data.FristName} onChange={handleChange} name="FristName" type="FristName"  placeholder="اسمك الاول " className="form-control fram_border" id="FristName" required/>
                                </div>

                                <div className="mb-3 ">
                                    <input value={data.Email} onChange={handleChange} name="Email" type="email" placeholder="الايميل" className="form-control fram_border" id="Email" aria-describedby="emailHelp" required/>
                                </div>

                                <div class="card mb-3 fram_border">
                                    <div class="card-body">
                                        <h5>المرحلة الدراسية :</h5>
                                        <div className='row'>
                                            
                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="Educational_level" value={data.Educational_level} id="flexRadioDefault1"/>
                                                    <label class="form-check-label" htmlfor="flexRadioDefault1">
                                                    الثاني الثانوي
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="Educational_level" value={data.Educational_level} id="flexRadioDefault2" />
                                                    <label class="form-check-label" htmlfor="flexRadioDefault2">
                                                    الثالث الثانوي
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="Educational_level" value={data.Educational_level} id="flexRadioDefault2" />
                                                    <label class="form-check-label" htmlfor="flexRadioDefault2">
                                                    غير ذلك
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-3 fram_border">
                                    <div class="card-body">
                                        <h5>النوع :</h5>
                                        <div className='row'>
                                            
                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="type" value={data.type} id="flexRadioDefault4"/>
                                                    <label class="form-check-label" htmlfor="flexRadioDefault4">
                                                    طالب
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="type" value={data.type} id="flexRadioDefault5" />
                                                    <label class="form-check-label" htmlfor="flexRadioDefault5">
                                                    طالبة
                                                    </label>
                                                </div>
                                            </div>

                                            <div className='col-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input check_box_style" type="radio" name="type" value={data.type} id="flexRadioDefault6" />
                                                    <label class="form-check-label" htmlfor="flexRadioDefault6">
                                                    الوالد / الوالدة
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input value={data.phone_num} onChange={handleChange} name="number" type="num" placeholder="رقم الجوال" className="form-control fram_border" id="num" aria-describedby="numHelp" required/>
                                </div>

                                <div className="mb-3">
                                    <input value={data.password} onChange={handleChange} name="password" type="password" placeholder="كلمة السر"className="form-control fram_border" id="userpassword" required/>
                                </div>

                                <div className="mb-3">
                                    <input value={data.returnpassword} onChange={handleChange} name="returnpassword" type="returnpassword" placeholder="اعادة كلمة السر" className="form-control fram_border" id="returnpassword" required/>
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input check_box_style" id="usercheck" />
                                    <label className="form-check-label maincolor" htmlFor="usercheck">نعم أوافق ‫على‬ الشروط و اﻷحكام</label>
                                </div>

                                <div className="d-grid gap-2">
                                <button type="submit" className="button_style mt-2 mb-4"> انشاء حساب الان</button>

                                <b>هل قمت بانشاء حساب من قبل ؟</b>
                                <Link to="/login" className="link_regist "> <i className="fa-solid fa-right-to-bracket"> </i> تسجيل الدخول   </Link>
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
 
export default Registration;