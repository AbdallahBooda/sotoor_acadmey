import React from 'react';
import'../style/Homestyle.css'
import { Link } from 'react-router-dom';


const Integrated_Approach = () => {
    return ( 
        <>
        <section className="m-b-50 p-t-40">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="hero-banner__content m-t-20">
                        <h1> منهج متكامل لاختبار القدرات </h1>
                        <p className="em1-3 m-b-30">&#x202B;أساسيات وتجميعات على شكل أفكار ودروس مكتوبة وفيديوهات وتمارين واختبارات تجريبية متنوعة ... كل هذا في منصة واحدة! </p>

                        <Link className="main-btn em1-3 btn b-r-20 p-10-20 integratedstyle" to='/'> <i className="fa fa-book"> </i> انتقل لدورة القدرات </Link>

                        </div>
                    </div>
                    <div className="col-md-7">
                    <iframe className="shadow" width="100%" height="376" src="https://www.youtube.com/embed/6D1OvbG6zCQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>
        </section>

        
        </>
     );
}
 
export default Integrated_Approach;