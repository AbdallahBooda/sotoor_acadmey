import React from 'react';
import'../style/Homestyle.css'


const Basic_skills = () => {
    return ( 
        <>
            <div className='h-page-80'>
                <section className=" bg-light p-t-50 p-b-50">
                    
                        <div className="section-intro m-b-40 text_center_basic_skill">
                            <h2 className="section-intro__title ">سطور تهتم بالمهارات الأساسية للاستعداد
                                    التام لاختبار القدرات العامة
                            </h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card card-feature text_center_basic_skill bg-white mb-4 mb-lg-0 card-style ">
                                    <span className="card-feature__icon m-b-30">
                                    <img className="img_Basic_skills"  src="place_icon_1.webp" alt="" />
                                    </span>
                                    <h3 className="card-feature__title">تعلم</h3>
                                    <p className="card-feature__subtitle">تعلم أساسيات الجزء الكمي واللفظي لاختبار القدرات عن طريق منهج مكتوب  وساعات من الفيديوهات </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card card-feature text_center_basic_skill bg-white mb-4 mb-lg-0 card-style">
                                    <span className="card-feature__icon m-b-30">
                                    <img className="img_Basic_skills"  src="place_icon_2.webp" alt="" />
                                    </span>
                                    <h3 className="card-feature__title">تمرن</h3>
                                    <p className="card-feature__subtitle">تمرن على الأسئلة والتمارين التي تم تجميعها من نماذج لاختبارات سابقة.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card card-feature text_center_basic_skill bg-white mb-4 mb-lg-0 card-style">
                                    <span className="card-feature__icon m-b-30">
                                    <img className="img_Basic_skills"  src="place_icon_3.webp" alt="" />
                                    </span>
                                    <h3 className="card-feature__title">اختبر</h3>
                                    <p className="card-feature__subtitle">تخيل نفسك في قاعة الامتحان، واختبر نفسك في اختبارات تحاكي اختبار القدرات الحقيقي.</p>
                                </div>
                            </div>
                        </div>
                    
                </section>
            </div>
        </>
     );
}
 
export default Basic_skills;