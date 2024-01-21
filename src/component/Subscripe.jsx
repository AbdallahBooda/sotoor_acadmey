import React from 'react';
import'../style/Homestyle.css'
import { Link } from 'react-router-dom';

const Subscripe = () => {
    return ( 
        <>
            <section className="section-padding--small ">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                    <div className="col-md-5 mb-5 mb-md-0">
                        <div className="about__content">
                        <h2>تصفح منهج سطور في أي وقت وعلى أي جهاز</h2>
                        <p>&#x202B;يمكنك الآن الاستعداد لاختبار القدرات من أي جهاز متوفر لديك، حيث يمكنك استخدام الموقع والتعلم منه عن طريق الكومبيوتر والجهاز اللوحي والجوال.
                                                                </p>
                        <Link className="main-btn em1-2 btn b-r-20 p-15-20 p-b-10" to='/'> سجل مجانا الان</Link>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="about__img">
                        <img className="img-fluid" src="https://sotooracademy.com/website/img/home/about.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Subscripe;